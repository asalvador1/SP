var storePeriodo = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'StockingProgram.aspx/ListPeriodosPrueba',
        method: 'GET'
    }),
    reader: new Ext.data.JsonReader({
        root: 'Rows',
        fields: [
                { name: 'Text', mapping: 'Descripcion' },
                { name: 'Value', mapping: 'Descripcion' }
            ]
    }),
    remoteSort: false,
    sortInfo: { field: "Text", direction: "ASC" }
});



var nombrePrograma = new Ext.form.TextField({
    id: 'nombrePrograma',    
    fieldLabel: "Nombre del Programa",
    labelStyle: "text-align:right",    
    //width: 200,
    disabled: false,
    tabIndex: 1,
    enableKeyEvents: true   ,
    anchor:'100%'
});

var descripcionPrograma = new Ext.form.TextArea({
    fieldLabel: "Descripción del Programa",
    labelStyle: "text-align:right",    
    id: "descripcion",   
    tabIndex: 2,
    enableKeyEvents: true,
    anchor: '100%'
});

var periodo = new Ext.form.ComboBox({
    fieldLabel: "Periodo",
    labelStyle: "text-align:right",
    id: "periodo",    
    name:'periodo',
    mode: 'remote',    
    displayField: 'Text',
    valueField: 'Value',
    triggerAction: 'all',
    store:storePeriodo,
    emptyText: 'Seleccione...',
    resizable: true,
    editable: false,
    allowBlank: false,
    tabIndex: 3,
    enableKeyEvents: true,
    anchor: '100%'    
});

var northFieldset = new Ext.form.FieldSet({
    autoHeight: true,
    frame: false,
    collapsible: false,
    collapsed: false,
    title: "Información General",    
    items: [{
        layout: "column",
        border: false,
        items: [{
            //width: 350,
            columnWidth: 1,            
            layout: "form",
            border: false,
            items: [nombrePrograma, descripcionPrograma, periodo]
        }]
    }] // items fieldset Información
});

var btnNext = new Ext.Button({
    text: 'Siguiente',
    id: "btnNext",
    cls: 'x-btn-text-icon',
    handler: function () {
        location.replace(App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/NuevaPaso2');
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
                    buttons: [btnNext, btnCancel],
                    frame: true,
                    autoScroll: true,
                    title: 'Nuevo Programa de Ventas - Información General',
                    items: [
                            northFieldset
                       ]
                }]// items viewport
            }); //fin viewport
            // trigger the data store load
            //storeGrid.load({ params: { start: _start, limit: _limit} });
           // storePeriodo.load();
        }
    } // fin del evento principal
} ();

Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);