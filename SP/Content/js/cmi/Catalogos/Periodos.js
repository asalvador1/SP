//Store
var storedPeriodos = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'Periodos.aspx/GetPerxProVtaxDist',
        method: 'GET'
    }),
    reader: new Ext.data.JsonReader({
        root: 'Periodos',
        fields: [
            { name: 'id_periodo', mapping: 'id_periodo' },
            { name: 'Descripcion', mapping: 'Descripcion' }
        ]
    }),
    remoteSort: false,
    sortInfo: { field: "id_periodo", direction: "ASC" }
});


storedPeriodos.on('beforeload',
	function (ds, options) {
	    var p = Ext.apply(ds.baseParams || {},
	            {
	                idGfx: cid_dealers.getValue(),
	                idProVta: cid_provta.getValue()
	            });
	    ds.baseParams = p;
	}

);

//FUNCION PRINCIPAL
         MainLayout = function(){

	    return {

		    init : function(){
			    Ext.BLANK_IMAGE_URL = App.utils.constants.BLANK_IMAGE_URL;
			    Ext.QuickTips.init();
			    this.initLayout();
		    },

		    initLayout : function() {

                var viewport = new Ext.Viewport({
                    layout:"border",
                    window:{ layout:"fit" },
                    items:[{
                        region:"north",//north
                        layout:"fit", 
                        id: "north",  
                        title:"Cierre - Programa de Venta",
                        height:200,                        
                        collapsible: true,  //Minimizar el north
                        split:true,         //Minimizar el north                        
                        items:[{
                            xtype:"form",
                            id: "frmmain",
                            frame:true,
                            //autoWidth:true,
                            items:[northFieldset],
                            buttonAlign:"right",
			                buttons:[btnShowComp,btnCerrarPer]                          
                            
                          }]
                      },{    
                        region:"center",
                        layout:"fit",
                        items:[//grid,grid1
                                {
                                xtype: 'panel', 
                                autoScroll: true,
                                border:false,
                                layout:"column", 
                                items:[{
                                columnWidth: .50,
                                items:[{layout:"fit",height: 500, 
                                items:[grid]}]
                                }
                                ,{
                                columnWidth: .50,
                                items:[{layout:"fit",height: 500, 
                                items:[grid1]}]
                                }
                                ],
                                renderTo: Ext.getBody()
                                }
                                ]
                      }]
                 });
//                 storedGfx.load();
		    } 
	    }
	    }();

 Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);
