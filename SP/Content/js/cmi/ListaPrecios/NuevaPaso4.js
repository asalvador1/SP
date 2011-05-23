var storeGrid = new Ext.data.GroupingStore({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/GetDealersAndClasifCorp'
    }),
    reader: new Ext.data.JsonReader({
        root: 'Rows',
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
                ,{ name: 'Descripcion', mapping: 'DealerAsociado.Descripcion' },
                { name: 'GFX', mapping: 'DealerAsociado.GFX' }
            ]
    }),
    remoteSort: false,
    sortInfo: { field: "Text", direction: "ASC" },
    groupField: 'GFX'
});

var theData = [['cuota',100,110,120,90]];
var storeGrid2 = new Ext.data.ArrayStore({  
    autoDestroy: true,
    storeId: 'myStore',
    fields:[
      {name: 'cuota', type: 'string'},
      {name: 'uno', type: 'int'},
      {name: 'dos', type: 'int'},
      {name: 'tres', type: 'int'},
      {name: 'cuatro', type: 'int'}
    ],
    data: theData,
    remoteSort: false
});

var sm = new Ext.grid.CheckboxSelectionModel();
var cm = new Ext.grid.ColumnModel([
    sm,
        {
        header: 'GFX',
        sortable: true,
        dataIndex: 'GFX',
        width: 20,
        hidden:true
    },
    {
        header: 'Dealer',
        sortable: true,
        dataIndex: 'Descripcion',
        hidden:true
    },
    {
        header: 'Clasificación <br/> Corporativa',
        sortable: true,
        dataIndex: 'Text',
        hidden:false
    },
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
        header: 'SPA Base',
        sortable: true,
        dataIndex: 'SPABase',
        css: 'background-color: #EEEAEE;border-style:solid',
        renderer: function (data) {
            return "<b>" + data + "</b>";
        }
    },
    {
        header: 'SPA Programación <br/>Inventario',
        sortable: true,
        dataIndex: 'SPAProgramacionInventario'        
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

var editorText = new Ext.form.NumberField({
                allowBlank: true,
                allowNegative: false,
                maxValue: 10000,
                minValue: 0,
                listeners: {
                    change: function () {
                        
                    }
                }
            });

var cmPeriodos = new Ext.grid.ColumnModel([
    {
        header:'Configuración',
        dataIndex:'cuota',
        sortable: false
    },
    {
        header:'Trimestre 1',
        sortable: false,     
        editor: editorText
    },
    {
        header:'Trimestre 2',
        sortable: false,
        editor: editorText
    },
    {
        header:'Trimestre 3',
        sortable: false,
        editor: editorText
    },
    {
        header:'Trimestre 4',
        sortable: false,
        editor: editorText
    }
]);

var grid = new Ext.grid.GridPanel({
    id: "grid",
    title: "Modelos",
    viewConfig: {
        forceFit: true
    },
    ds: storeGrid,
    sm: sm,
    columnLines: true,
    cm: cm,
    frame: true,
    loadMask: true,   
    frame: true/*,
    anchor: '100% -10'*/
    ,view: new Ext.grid.GroupingView({
        forcerFit:true,
//	        forceFit: true,	                                 
              groupTextTpl: '{[values.rs[0].data["Descripcion"]]}'
        }),
   
});

var gridA = new Ext.grid.EditorGridPanel({
    id: "gridA",
    title: "Configuración",
    viewConfig: {
        forceFit: true
    },
    ds: storeGrid2,   
    columnLines: true,
    cm: cmPeriodos,
    frame: true,
    loadMask: true,   
    frame: true 
    ,anchor:'100% 100%'   
});

var btnSeleccionarTodo = new Ext.Button({
    text: 'Cancelar',
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

var gridExcel = new Ext.Button({
	    text: 'Cargar archivo de cuotas',
	    id: "btnExporta",
	    icon: App.utils.constants.ICONS_PATH + 'page_white_excel.png',
	    cls: 'x-btn-text-icon',
	    listeners: {
	        click: function () {
	          
	        }
	    }

	});


var panelConc = {    
    id: 'panelConc',           
    layout : 'form',
    title: 'Conceptos', 
    flex : 5,
    border: true,       
    items : [gridA],
    frame: true,
    buttons: [gridExcel, btnGuardarCfg, btnSeleccionarTodo]
};


/* GENERAL******************************/
var btnNext = new Ext.Button({
    text: 'Terminar',
    id: "btnNext",
    cls: 'x-btn-text-icon',
    handler: function () {
        location.replace(App.utils.constants.URL_BASE_PATH + 'Home.aspx/Main');
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
        location.replace(App.utils.constants.URL_BASE_PATH + 'ListaPrecios.aspx/NuevaPaso3');
    } // function	
});

var overviewPanel = {
    layout: 'vbox',
    layoutConfig: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },
    defaults: {
        //frame : true,
        flex: 5
    },
    items: [grid, panelConc]
};


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
                            buttons: [btnBack, btnNext, btnCancel],
                            frame: true,
                            autoScroll: true,
                            layout: 'fit',
                            title: 'Nuevo Programa de Ventas - Configuración de Cuotas por Dealer',
                            items: [
                                    overviewPanel
                                ]
                        }]// items viewport               
                        }); //fin viewport
                        storeGrid.load();
                    }
                } // fin del evento principal
     } ();

Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);