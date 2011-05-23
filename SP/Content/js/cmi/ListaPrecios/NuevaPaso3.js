var storeGrid = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/GetClasifCorpIncentivos'
    }),
    reader: new Ext.data.JsonReader({
        root: 'rows',
        fields: [
//                { name: 'ModeloDescripcion', mapping: 'ModeloDescripcion' },
//                { name: 'Modelo7', mapping: 'Modelo7' },
//                { name: 'ClasifLocal', mapping: 'ClasifLocal' },
//                { name: 'ClasifUsa', mapping: 'ClasifUsa' },
        //                { name: 'Familia', mapping: 'Familia' },
                { name:'Text', mapping:'Text'},
                { name: 'DescuentoSobreBase', mapping: 'Incentivos.DescuentoSobreBase' },
                { name: 'PlazoComercial', mapping: 'Incentivos.PlazoComercial' },
                { name: 'SPABase', mapping: 'SPABase' },
                { name: 'SPAProgramacionInventario', mapping: 'SPAProgramacionInventario' }
            ]
    }),
    remoteSort: false,
    sortInfo: { field: "Text", direction: "ASC" }
});

var storeDescuento = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/GetDescuentosBase'
    }),
    reader: new Ext.data.JsonReader({
        root: '',      
        fields: [
                { name: 'Text', mapping: 'Text' },
                { name: 'Value', mapping: 'Value' }
            ]
    }),
    remoteSort: false,
    sortInfo: { field: "Text", direction: "ASC" }
});
var storePlazos = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/GetPlazosComerciales',
        method:'GET'
    }),
    reader: new Ext.data.JsonReader({
        root: '',
        fields: [
                { name: 'Text', mapping: 'Text' },
                { name: 'Value', mapping: 'Value' }
            ]
    }),
    remoteSort: false,
    sortInfo: { field: "Text", direction: "ASC" }
});





var sm = new Ext.grid.CheckboxSelectionModel();
var cm = new Ext.grid.ColumnModel([
    sm,
//    {
//        header: 'Clasificación',
//        sortable: true,
//        dataIndex: 'ClasifLocal'
//    },
//    {
//        header: 'Modelo',
//        fixed: true,
//        width: 180,
//        sortable: true,
//        dataIndex: 'ModeloDescripcion'
//    },
//    {
//        header: 'Familia',
//        sortable: true,
//        dataIndex: 'Familia',
//        hidden: true
//    },
    {
        header:'Clasificación <br/>Corporativa',
        dataIndex:'Text',
        sortable:true
    },
    {
        header: 'SPA Base',
        sortable: true,
        dataIndex: 'SPABase',
        css:'background-color: #EEEAEE;border-style:solid',
        renderer: function (data) {
            return "<b>" + data + "</b>";
        }
    },
    {
        header: 'SPA Programación<br/>Inventario',
        sortable: true,
        dataIndex: 'SPAProgramacionInventario'/*,
        css: 'background-color: #EEEAEE;border-style:solid',
        renderer: function (data) {
            return "<b>" + data + "</b>";
        }*/
    },
//    {
//        header: 'Modelo 7',
//        sortable: true,
//        dataIndex: 'Modelo7',
//        hidden: true
//    },
    {
        header: 'Descuento Equivalente <br/>Sobre Precio Base',
        sortable: true,
        fixed: true,
        width: 120,
        dataIndex: 'DescuentoSobreBase'
    }, {
        header: 'Plazo Comercial',
        sortable: true,
        dataIndex: 'PlazoComercial'
    }
]);

var grid = new Ext.grid.GridPanel({
    id: "grid",
    title: "Modelos",
    viewConfig: {
        forceFit: false
    },
    ds: storeGrid,
    sm: sm,
    columnLines: true,
    cm: cm,
    frame: true,
    loadMask: true,   
    frame: true/*,
    anchor: '100% -10'*/
   
});



var btnSeleccionarTodo = new Ext.Button({
    text: 'Seleccionar Todo',
    id: 'btnSelectAll',
     cls: 'x-btn-text-icon'
});

var btnVisPrevia = new Ext.Button({
    text: 'Vista Previa',
    id: 'bnVisitaPrevia',
    cls: 'x-btn-text-icon'
});

var btnGuardarCfg = new Ext.Button({
    text:'Guardar',
    id:'Guardar',
    cls: 'x-btn-text-icon'
});

var spaProgInv = new Ext.form.TextField({
    fieldLabel: "SPA Prog Inventario",
    labelStyle: "text-align:right",
    id: "spaProgInv",
    name: "spaProgInv",
    anchor: '100%'
});


var descuentoSobreBase = new Ext.form.TextField({
    fieldLabel : "Descuento Equivalente Sobre Precio Base",
    labelStyle: "text-align:right",    
    id: "descuentoSobreBase",    
    name: "descuentoSobreBase",
//    mode: 'remote',
//    emptyText: 'Seleccione...',
//    store:storeDescuento,
//    displayField: 'Text',
//    valueField : 'Value',
//    triggerAction: 'all',
    anchor:'100%'
});

var plazoComercial = new Ext.form.ComboBox({
    fieldLabel : "Plazo Comercial",
    labelStyle: "text-align:right",    
    id: "plazoComercial",    
    name:'plazoComercial',
    mode: 'remote',
    emptyText: 'Seleccione...',
    store:storePlazos,
    displayField: 'Text',
    valueField : 'Value',
    triggerAction: 'all',
    anchor:'100%'
});

var panelConc = {    
    id: 'panelConc',           
    layout : 'form',
    title: 'Conceptos', 
    flex : 2,
    border: true,
    items: [spaProgInv, descuentoSobreBase, plazoComercial],
    frame: true,
    buttons: [btnVisPrevia, btnGuardarCfg]
};






/* GENERAL******************************/
var btnNext = new Ext.Button({
    text: 'Siguiente',
    id: "btnNext",
    cls: 'x-btn-text-icon',
    handler: function () {
        location.replace(App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/NuevaPaso4');
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

var btnBack = new Ext.Button({
    text: 'Atras',
    id: "btnBack",
    cls: 'x-btn-text-icon',
    handler: function () {
        location.replace(App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/NuevaPaso2');
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
//            var viewport = new Ext.Viewport({
//                layout:"border",
//                window:{
//                  layout:"fit"
//                },
//                items:[{
//                    region:"center",
//                    layout:"fit",                  
//                    frame: true,
//                    items:[
//                                {
//                                xtype: "form",
//                                id: "frmmain",
//                                buttonAlign: "right",                                
//                                buttons: [btnNext, btnCancel],
//                                autoScroll: true,                                   
//                                title: 'Nuevo Programa de Ventas - Configuración de Incentivos por Modelos', 
//                                layout:"column", 
//                                defaults: {      
//                                    layout: 'form',
//                                    border: false,
//                                    bodyStyle: 'padding:4px'                            
//                                },
//                                items:[{
//                                                xtype:'fieldset',
//                                                columnWidth:0.5,     
//                                                 defaults: {
//                                                        autoHeight:true
//                                                    },                                                                                                                                                                                        
//                                                items:[grid]
//                                            }]
//                                }
//                    ]//fin items center
//                }] //fin items viewport 

 var overviewPanel = {               
                layout : 'hbox',                
                layoutConfig : {
                    type :'hbox',
                    align : 'stretch',
                    pack : 'start'
                },
                defaults :{
                    //frame : true,
                    flex : 5
                },
                items : [grid,panelConc]
            };


var viewport = new Ext.Viewport({                  
                layout: "fit",                   
                items: [{
                xtype: "form",
                id: "frmmain",
                buttonAlign: "right",
                buttons: [btnBack, btnNext, btnCancel],
                frame: true,
                autoScroll: true,
                layout: 'fit',
                title: 'Nuevo Programa de Ventas - Selección de Modelos',
                items: [
                        overviewPanel
                    ]
            }]// items viewport               
            }); //fin viewport
            storeGrid.load();
//            storeDescuento.load();
//            storePlazos.load();
        }
    } // fin del evento principal
} ();

Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);