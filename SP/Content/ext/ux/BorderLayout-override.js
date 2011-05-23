/*
 * Overrides to fix BorderLayout floating region not resized
 * see http://www.sencha.com/forum/showthread.php?39948-CLOSED-2.x-3.x-BorderLayout-floating-region-not-resized/page2
 */

Ext.override(Ext.layout.BorderLayout.Region, {
    slideOut : function(){
        if(this.isSlid || this.el.hasActiveFx()){
            return;
        }
        this.isSlid = true;
        this.panel.isSlid = true;
        var ts = this.panel.tools;
        if(ts && ts.toggle){
            ts.toggle.hide();
        }
        this.el.show();
        if(this.position == 'east' || this.position == 'west'){
            this.panel.setSize(undefined, this.collapsedEl.getHeight());
        }else{
            this.panel.setSize(this.collapsedEl.getWidth(), undefined);
        }
        this.restoreLT = [this.el.dom.style.left, this.el.dom.style.top];
        this.el.alignTo(this.collapsedEl, this.getCollapseAnchor());
        this.el.setStyle("z-index", this.floatingZIndex+2);
        this.panel.el.replaceClass('x-panel-collapsed', 'x-panel-floating');
        if(this.animFloat !== false){
            this.beforeSlide();
            this.el.slideIn(this.getSlideAnchor(), {
                callback: function(){
                    this.afterSlide();
                    this.initAutoHide();
                    Ext.getDoc().on("click", this.slideInIf, this);
                },
                scope: this,
                block: true
            });
        }else{
            this.initAutoHide();
             Ext.getDoc().on("click", this.slideInIf, this);
        }
    },
    afterSlideIn : function(){
        this.clearAutoHide();
        this.isSlid = false;
        delete this.panel.isSlid;
        this.clearMonitor();
        this.el.setStyle("z-index", "");
        this.panel.el.replaceClass('x-panel-floating', 'x-panel-collapsed');
        this.el.dom.style.left = this.restoreLT[0];
        this.el.dom.style.top = this.restoreLT[1];
        var ts = this.panel.tools;
        if(ts && ts.toggle){
            ts.toggle.show();
        }
    },
    slideIn : function(cb){
        if(!this.isSlid || this.el.hasActiveFx()){
            Ext.callback(cb);
            return;
        }
        this.isSlid = false;
        delete this.panel.isSlid;
        if(this.animFloat !== false){
            this.beforeSlide();
            this.el.slideOut(this.getSlideAnchor(), {
                callback: function(){
                    this.el.hide();
                    this.afterSlide();
                    this.afterSlideIn();
                    Ext.callback(cb);
                },
                scope: this,
                block: true
            });
        }else{
            this.el.hide();
            this.afterSlideIn();
        }
    }
});
Ext.override(Ext.Container, {
    doLayout: function(shallow, force){
        var rendered = this.rendered,
            forceLayout = force || this.forceLayout,
            cs, i, len, c;
        this.layoutDone = true;
        if(!this.canLayout() || (this.collapsed && !this.isSlid)){
            this.deferLayout = this.deferLayout || !shallow;
            if(!forceLayout){
                return;
            }
            shallow = shallow && !this.deferLayout;
        } else {
            delete this.deferLayout;
        }
        cs = (shallow !== true && this.items) ? this.items.items : [];
        for(i = 0, len = cs.length; i < len; i++){
            if ((c = cs[i]).layout) {
                c.suspendLayoutResize = true;
            }
        }
        if(rendered && this.layout){
            this.layout.layout();
        }
        for(i = 0; i < len; i++){
            if((c = cs[i]).doLayout){
                c.doLayout(false, forceLayout);
            }
        }
        if(rendered){
            this.onLayout(shallow, forceLayout);
        }
        this.hasLayout = true;
        delete this.forceLayout;
        for(i = 0; i < len; i++){
            if ((c = cs[i]).layout) {
                delete c.suspendLayoutResize;
            }
        }
    }
});
Ext.override(Ext.layout.ContainerLayout, {
    onResize: function(){
        var ct = this.container,
            b = ct.bufferResize;
        if (ct.collapsed && !ct.isSlid){
            return;
        }
        if (b && ct.ownerCt) {
            if (!ct.hasLayoutPending()){
                if(!this.resizeTask){
                    this.resizeTask = new Ext.util.DelayedTask(this.runLayout, this);
                    this.resizeBuffer = Ext.isNumber(b) ? b : 50;
                }
                ct.layoutPending = true;
                this.resizeTask.delay(this.resizeBuffer);
            }
        }else{
            ct.doLayout(false, this.forceLayout);
        }
    }
});
Ext.override(Ext.layout.FitLayout, {
    onLayout : function(ct, target){
        Ext.layout.FitLayout.superclass.onLayout.call(this, ct, target);
        if(!this.container.collapsed || this.container.isSlid){
            this.setItemSize(this.activeItem || ct.items.itemAt(0), target.getViewSize(true));
        }
    }
});
Ext.override(Ext.Panel, {
    onResize : function(w, h){
        if(Ext.isDefined(w) || Ext.isDefined(h)){
            if(!this.collapsed || this.isSlid){
                if(Ext.isNumber(w)){
                    this.body.setWidth(w = this.adjustBodyWidth(w - this.getFrameWidth()));
                } else if (w == 'auto') {
                    w = this.body.setWidth('auto').dom.offsetWidth;
                } else {
                    w = this.body.dom.offsetWidth;
                }
                if(this.tbar){
                    this.tbar.setWidth(w);
                    if(this.topToolbar){
                        this.topToolbar.setSize(w);
                    }
                }
                if(this.bbar){
                    this.bbar.setWidth(w);
                    if(this.bottomToolbar){
                        this.bottomToolbar.setSize(w);
                        if (Ext.isIE) {
                            this.bbar.setStyle('position', 'static');
                            this.bbar.setStyle('position', '');
                        }
                    }
                }
                if(this.footer){
                    this.footer.setWidth(w);
                    if(this.fbar){
                        this.fbar.setSize(Ext.isIE ? (w - this.footer.getFrameWidth('lr')) : 'auto');
                    }
                }
                if(Ext.isNumber(h)){
                    h = Math.max(0, this.adjustBodyHeight(h - this.getFrameHeight()));
                    this.body.setHeight(h);
                }else if(h == 'auto'){
                    this.body.setHeight(h);
                }
                if(this.disabled && this.el._mask){
                    this.el._mask.setSize(this.el.dom.clientWidth, this.el.getHeight());
                }
            }else{
                this.queuedBodySize = {width: w, height: h};
                if(!this.queuedExpand && this.allowQueuedExpand !== false){
                    this.queuedExpand = true;
                    this.on('expand', function(){
                        delete this.queuedExpand;
                        this.onResize(this.queuedBodySize.width, this.queuedBodySize.height);
                    }, this, {single:true});
                }
            }
            this.onBodyResize(w, h);
        }
        this.syncShadow();
        Ext.Panel.superclass.onResize.call(this);
    }
});
