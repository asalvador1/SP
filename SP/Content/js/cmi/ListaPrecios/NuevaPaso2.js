var storeGrid = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/GetDealers'
    }),
    reader: new Ext.data.JsonReader({
        root: 'Rows',
       // totalProperty: 'Total',
        fields: [
                { name: 'Descripcion', mapping: 'Descripcion' },
                { name: 'GFX', mapping: 'GFX' }
            ]
    }),
    remoteSort: false,
    sortInfo: { field: "Descripcion", direction: "ASC" }
});

var sm = new Ext.grid.CheckboxSelectionModel();
var cm = new Ext.grid.ColumnModel([
    sm,
    {
        header: 'GFX',
        sortable: true,
        dataIndex: 'GFX',
        width: 20
    },
    {
        header: 'Dealer',
        sortable: true,
        dataIndex: 'Descripcion'
    }
]);

var grid = new Ext.grid.GridPanel({
    id: "grid",
    title: "Dealers",
    viewConfig: {
        forceFit: true
    },
    ds: storeGrid,
    sm: sm,
    columnLines: true,
    cm: cm,
    frame: true,
    loadMask: true,
    frame: true,
    anchor: '100% -96'
});
var btnNext = new Ext.Button({
    text: 'Siguiente',
    id: "btnNext",
    cls: 'x-btn-text-icon',
    handler: function () {
        location.replace(App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/NuevaPaso3');
    } // function	
});
var btnBack = new Ext.Button({
    text: 'Atras',
    id: "btnBack",
    cls: 'x-btn-text-icon',
    handler: function () {
        location.replace(App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/NuevaPaso1');
    } // function	
});

var btnCancel = new Ext.Button({
    text: 'Cancelar',
    id: "btnCancel",
    cls: 'x-btn-text-icon',
    handler: function () {
        location.replace(App.utils.constants.URL_BASE_PATH + 'Home.aspx/Main');
    } // function	
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
                layout: "fit",
                items: [{
                    xtype: "form",
                    id: "frmmain",
                    buttonAlign: "right",
                    buttons: [btnBack,btnNext, btnCancel],
                    frame: true,
                    autoScroll: true,
                    title: 'Nuevo Programa de Ventas - Selección de dealers',
                    items: [
                            grid
                       ]
                }]// items viewport
            }); //fin viewport
            // trigger the data store load
            //storeGrid.load({ params: { start: _start, limit: _limit} });
            storeGrid.load();
        }
    } // fin del evento principal
} ();

Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);