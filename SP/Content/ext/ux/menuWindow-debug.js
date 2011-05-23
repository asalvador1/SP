Ext.override(Ext.lib.Region, {
    /**
     * Returns the shortest distance between this Region and another Region.
     * Either or both Regions may be Points.
     * @param {Region} r The other Region
     * @return {Number} The shortest distance in pixels between the two Regions.
     */
    getDistanceBetween: function(r) {

//      We may need to mutate r, so make a copy.
        r = Ext.apply({}, r);
        
//      Translate r to the left of this
        if (r.left > this.right) {
            var rWidth = r.right - r.left;
            r.left = this.left - (r.left - this.right) - rWidth;
            r.right = r.left + rWidth;
        }

//      Translate r above this
        if (r.top > this.bottom) {
            var rHeight = r.bottom - r.top;
            r.top = this.top - (r.top - this.bottom) - rHeight;
            r.bottom = r.top + rHeight;
        }

//      If r is directly above
        if (r.right > this.left) {
            return this.top - r.bottom;
        }

//      If r is directly to the left
        if (r.bottom > this.top) {
            return this.left - r.right;
        }

//      r is on a diagonal path
        return Math.round(Math.sqrt(Math.pow(this.top - r.bottom, 2) + Math.pow(this.left - r.right, 2)));
    }
});

/**
 * @class Ext.ux.GhostBar
 * @extends Ext.Toolbar
 * A Toolbar class which attaches as a plugin to any BoxComponent, and fades in at the configured
 * position whenever the mouse is brought within a configurable threshold. eg: <code><pre>
new Ext.Panel({
    renderTo: document.body,
    title: 'Test',
    width: 600,
    height: 400,
    plugins: [ new Ext.ux.GhostBar([{ text: 'Click Me' }]) ]
});
</pre></code>
 */

Ext.ux.MenuWindow = function(config){
    var _config = config || {};
    var defaultConfig = {
			title:"Menu Window",
			height:400,
			width:300,
			border: false,
			plain: false,
			shim: false,
			resizable: false,
			animCollapse: true,
			constrainHeader: true,
			collapsible: true,
			titleCollapse: true,
			layout: 'fit',
			closable: false,
			draggable: false,
			shadow: false,
			x:3,
			y:5
    };
    Ext.applyIf(_config, defaultConfig);
    Ext.ux.MenuWindow.superclass.constructor.call(this, _config);
    
}

Ext.extend(Ext.ux.MenuWindow, Ext.Window, {
	autoCollapsed: false,

	initComponent: function() {
		//Ext.getDoc().on('mousemove', Ext.ux.MenuWindow.prototype.onDocMouseMove, this);
		Ext.applyIf(this, {
		});
		Ext.ux.MenuWindow.superclass.initComponent.call(this);
	},

    onRender: function() {
        Ext.ux.MenuWindow.superclass.onRender.apply(this, arguments);
		this.collapse();
    },

	onExpand: function() {
		Ext.ux.MenuWindow.superclass.onExpand.apply(this, arguments);
		this.autoCollapsed = false;
	}

});