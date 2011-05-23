//Ext.MessageBox.show({
//    title: 'Mensaje del sistema',
//    msg: 'La forma contiene errores, favor de verificar',
//    buttons: Ext.MessageBox.OK,
//    icon: Ext.MessageBox.ERROR
//});
var start = 0;
var limit = 25;
var storeGrid = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'Home.aspx/List'
    }),
    reader: new Ext.data.JsonReader({
        root: 'Rows',
        totalProperty: 'Total',
        fields: [
                { name: 'Text', mapping: 'Text' },
                { name: 'Value', mapping: 'Value' }               
            ]
    }),
    remoteSort: true,
    sortInfo: { field: "Value", direction: "ASC" }
});


storeGrid.on('beforeload',
        function (ds, options) {            
            var p = Ext.apply(ds.baseParams || {},
            		{
            		    start: start,
            		    limit: limit            		    
            		});
            ds.baseParams = p;
        }
    );

var sm = new Ext.grid.CheckboxSelectionModel();    
var cm = new Ext.grid.ColumnModel([
    sm,
    {
        header: 'ID',
        dataIndex: 'Value',
        sortable: true
    }, {
        header : 'Elemento',
        dataIndex: 'Text',
        sortable: true
    }
]);

    var gridBbar = new Ext.PagingToolbar({
        id: 'bbar',
        pageSize: 25,
        store: storeGrid,
        displayInfo: true,
        displayMsg: 'Mostrando Unidades {0} - {1} de {2}',
        emptyMsg: "No existen Unidades a mostrar",
        onClick: function (which) {
            switch (which) {
                case "first":
                    start = 0;
                    this.doLoad(this.cursor);
                    break;
                case "prev":
                    start = start - 25;
                    this.doLoad(this.cursor);
                    break;
                case "next":
                    start = start + 25;
                    this.doLoad(this.cursor);
                    break;
                case "last":
                    start = storeGrid.getTotalCount() - 25;
                    this.doLoad(this.cursor);
                    break;
                case "refresh":
                    this.doLoad(this.cursor);
                    break;
            }
        }
       , plugins: new Ext.ux.Andrie.pPageSize({ //Paginación
           comboCfg: {
               listeners: {
                   select: function (combo, rec, index) {
                       var pbar = Ext.getCmp('bbar');
                       var psize = combo.getValue();
                       pbar.store.syncPagingToolbars = function () {
                           syncPagingToolbars(pbar, psize);
                       }
                   }
               }
           }
       })
    });

var grid = new Ext.grid.GridPanel({    
    id: 'grid',
    border:false,
	stripeRows: true,
	viewConfig:{ forceFit:false   },
	ds: storeGrid,
	cm: cm,
	frame:true,
	loadMask:true,
	selModel: sm,
	bbar: gridBbar
});



MainLayout = function () {

    return {

        init: function () {
            Ext.BLANK_IMAGE_URL = App.utils.constants.BLANK_IMAGE_URL;
            Ext.QuickTips.init();
            this.initLayout();
        },

        initLayout: function () {

            var viewport = new Ext.Viewport({
                layout: "border",
                window: { layout: "fit" },
                items: [{
                    region: "center",
                    layout: "fit",
                    items: [grid]
                }, {
                    region: "north", 
                    layout: "fit",
                    id: "north",
                    title: "Acceso Usuarios",
                    height: 200,
                    collapsible: true,  
                    split: true,         
                    items: [{
                        xtype: "form",
                        buttonAlign: "right",
                       // buttons: [btnBuscar, btnClean],
                        frame: true/*,
                        items: [northFieldset]*/
                    }]
                }]
            });
        }
    } // fin del evento principal
} ();
storeGrid.load();
//storeGrid.load({ params: { start: start, limit: limit} });
Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);