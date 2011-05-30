var storedGfx = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'CierreProVta.aspx/GetDistribuidores',
        method: 'GET'
    }),
    reader: new Ext.data.JsonReader({
        root: 'GFX',
        fields: [
                { name: 'cd_distribuidor', mapping: 'cd_distribuidor' },
                { name: 'nb_alias', mapping: 'nb_alias' }
            ]
    }),
    remoteSort: false,
    sortInfo: { field: "nb_alias", direction: "ASC" }
});

var storedProgramaVta = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'CierreProVta.aspx/GetProgramasdeventaxDistribuidor',
        method: 'GET'
    }),
    reader: new Ext.data.JsonReader({
        root: 'ProVta',
        fields: [
            {name: 'idProgramaVta', mapping: 'idProgramaVta'},
            {name: 'nombre', mapping: 'nombre'}
        ]
    }),                    
    remoteSort: false,
    sortInfo: {field: "idProgramaVta", direction: "ASC"}
});


storedProgramaVta.on('beforeload',
	function (ds, options) {
		var p = Ext.apply(ds.baseParams || {},
	            {
	                idgfx: cid_dealers.getValue()
	            });
		ds.baseParams = p;
	}

);

var storedTipoPer = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'CierreProVta.aspx/GetTipoPerxProvtaxDist',
        method: 'GET'
    }),
    reader: new Ext.data.JsonReader({
        root: 'TipoPer',
        fields: [
            {name: 'id_TipoPeriodo', mapping: 'id_TipoPeriodo'},
            {name: 'descipcion', mapping: 'descipcion'}
        ]
    }),                    
    remoteSort: false,
    sortInfo: {field: "id_TipoPeriodo", direction: "ASC"}
});


storedTipoPer.on('beforeload',
	function (ds, options) {
		var p = Ext.apply(ds.baseParams || {},
	            {
	                idGfx: cid_dealers.getValue(),
                    idProVta: cid_provta.getValue()
	            });
		ds.baseParams = p;
	}

);

var storedPeriodos = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'CierreProVta.aspx/GetPerxProVtaxDist',
        method: 'GET'
    }),
    reader: new Ext.data.JsonReader({
        root: 'Periodos',
        fields: [
            {name: 'id_periodo', mapping: 'id_periodo'},
            {name: 'Descripcion', mapping: 'Descripcion'}
        ]
    }),                    
    remoteSort: false,
    sortInfo: {field: "id_periodo", direction: "ASC"}
});


storedPeriodos.on('beforeload',
	function (ds, options) {
		var p = Ext.apply(ds.baseParams || {},
	            {
	                idTipoPeriodo: cid_TipoPeriodos.getValue(),
	            });
		ds.baseParams = p;
	}

);

var storedGrid1 = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
        url: App.utils.constants.URL_BASE_PATH + 'CierreProVta.aspx/GetCuotasCumplidas',
        method: 'GET'
    }),
    reader: new Ext.data.JsonReader({
        root: 'CuotaCumplida',
        fields: [
            {name: 'cveClasCorp', mapping: 'cveClasCorp'},
            {name: 'cuota', mapping: 'cuota'},
            {name: 'UnidadesPedidas', mapping: 'UnidadesPedidas'},
            {name: 'Tipo_cuota', mapping: 'Tipo_cuota'}
        ]
    }),                    
    remoteSort: false,
    sortInfo: {field: "cveClasCorp", direction: "ASC"}
});


storedGrid1.on('beforeload',
	function (ds, options) {
		var p = Ext.apply(ds.baseParams || {},
	            {
                    idgfx:cid_dealers.getValue(),
                    idProVta:cid_provta.getValue(),
                    tipoPeriodo:  cid_TipoPeriodos.getValue(),
                    Periodo:cid_periodos.getValue()
	            });
		ds.baseParams = p;
	}

);


//var storedPeriodos = new Ext.data.SimpleStore({
//fields: ['claPeriodo','descPeriodo'],
//data  : [
//        ['1', ' Febrero - Abril'],
//        ['2', 'Mayo - Julio'],
//        ['3', 'Agosto - Octubre']
//                            
//]
//});

//var storedGrid1 = new Ext.data.SimpleStore({
//    fields: ['id_classCorp','id_cuotaprograma','id_Unidad'],
//    data  : [
//            ['Buses','10','10'],
//    //                            ['Heavy','13','9'],
//            ['Light','6','6'],
//    //                            ['Medium','9','7'],
//            ['Severe Service','4','4']
//    ]
//});


var storedGrid2 = new Ext.data.SimpleStore({
fields: ['id_classCorp','id_cuotaprogramaNc','id_UniPedH', 'id_UniPedF', 'id_completar'],
    data  : [
    //                            ['Buses','10','10','0','completar'],
    ['Heavy','13','9','4','completar'],
    //                            ['Light','6','6','0','completar'],
    ['Medium','9','7','2','completar']
    //                            ['Severe Service','4','4','0','completar'],



    ]
});

var storePrograma = new Ext.data.SimpleStore({
    fields: ['id_modelo','id_cuotaprograma','id_Porcentaje'],
    data  : [
            ['3000RE', '2', '1'],
            ['3300CE', '3', '2'],
            ['4700FE', '9', '5'],
            ['4700 SFC', '5', '3'],
            ['4200', '8', '7',],
            ['4300', '10', '9'],
            ['4400 6x2', '2', '1'],
            ['4400 6x4', '4', '3'],
            ['4400 4x2', '9', '8'],
            ['7300', '3', '2'],
            ['7400 6x4', '6', '5'],
            ['7400 4x2', '7', '6'],
            ['8600 Transtar', '8', '8'],
            ['9200', '8', '4'],
            ['9400', '2', '1'],
            ['Prostar', '5', '2']


    ]
});
//FUNCIONES
var CargaPedidorender = function(data) {
        if (data=="")
                    return "";
        else      {
                    caddatos='<img  ext:qtip="Click para cargar pedido" src="'
        + App.utils.constants.ICONS_PATH  + 'doc.png' + '" /></a>'
                    return caddatos;
        } //
}

                 
//controles

var cargaPedido= new Ext.form.TextField({ 
    fieldLabel:"Numero de Pedido",
    labelStyle:"text-align:right",
    name:"cargaPedido",
    id:"cargaPedido"
    //width:80	
});

var cid_dealers=new Ext.form.ComboBox({
    fieldLabel: 'Distribuidores',
    labelStyle:"text-align:right",
    name: 'cmbDealers',
    id:"cmbDealers",
    mode: 'remote',    
    displayField: 'nb_alias',
    valueField: 'cd_distribuidor',
    triggerAction: 'all',
    //width:200,
    store: storedGfx,
    forceSelection: true,
    emptyText:'Seleccione...',
    resizable: true,
    editable:false,
     listeners: {
            select: function (combo, record, index) {
                //id_trasladista.setValue(cid_trasladista.getValue());
                var selected = this.getValue()
                cid_provta.setValue('');
                if (selected != "") //
                {
                    cid_provta.setDisabled(false);
                    storedProgramaVta.load();
                }
                
                
            }
        }	
});

var cid_provta=new Ext.form.ComboBox({
    fieldLabel: 'Programa de Venta',
    labelStyle:"text-align:right",
    name: 'cmbProVta',
    id:"cmbProVta",
    disabled: true,
    //width:200,
    store: storedProgramaVta,
    mode:'remote',
    forceSelection: true,
    displayField:'nombre',
    valueField:'idProgramaVta',
    triggerAction:'all',
    emptyText:'Seleccione...',
    resizable: true,
    editable:false,
    listeners: {
            select: function (combo, record, index) {
                //id_trasladista.setValue(cid_trasladista.getValue());
                var selected = this.getValue()
                cid_TipoPeriodos.setValue('');
                if (selected != "") //
                {
                    cid_TipoPeriodos.setDisabled(false);
                    storedTipoPer.load();
                }
                
                
            }
        }
    	
	});

var cid_TipoPeriodos=new Ext.form.ComboBox({
    fieldLabel: 'Tipo de Periodo',
    labelStyle:"text-align:right",
    name: 'cmbTipoPer',
    id:"cmbTipoPer",
    disabled: true,
    //width:200,
    store: storedTipoPer,
    mode:'remote',
    forceSelection: true,
    displayField:'descipcion',
    valueField:'id_TipoPeriodo',
    triggerAction:'all',
    emptyText:'Seleccione...',
    resizable: true,
    editable:false,
    listeners: {
            select: function (combo, record, index) {
                //id_trasladista.setValue(cid_trasladista.getValue());
                var selected = this.getValue()
                cid_periodos.setValue('');
                if (selected != "") //
                {
                    cid_periodos.setDisabled(false);
                    storedPeriodos.load();
                }
                
                
            }
        }
    	
	});


var cid_periodos=new Ext.form.ComboBox({
    fieldLabel: 'Periodo',
    labelStyle:"text-align:right",
    name: 'cmbPeriodo',
    id:"cmbPeriodo",
    disabled: true,
    //width:200,
    store: storedPeriodos,
    mode:'remote',
    forceSelection: true,
    displayField:'Descripcion',
    valueField:'id_periodo',
    triggerAction:'all',
    emptyText:'Seleccione...',
    resizable: true,
    editable:false	
});
	
	    var tPedidos= new Ext.form.TextField({ 
        fieldLabel:"Total de Unidades Pedidas",
        labelStyle:"text-align:right",
        name:"tPedidos",
        id:"tPedidos",
        disabled: true,
        value:'25',
        width:80	
	    });
	    
	    
	    
	    var btnShowPro=new Ext.Button({
	    text:'Mostrar Programa',
	    id:"btnMostrarProgram",
	    handler:function(){ 
//	    		                         Ext.MessageBox.show({
//                                        title:'Atención',
//                                        msg: '<b><font color= #cc3300>No esta disponible en este momento</font></b><br>',
//                                        buttons: Ext.MessageBox.OK,
//                                        icon: Ext.MessageBox.INFO,
//                                        modal:true
//                                         }); 
            wdShowPrograma.show();
	    } // function

         });
	    	    

//        var id_lblCuote = new Ext.form.Label({

//         text: 'CUOTA CUMPLIDA',
//         id: 'lblCuota',
//        });        
//	    
	   //demas campos region norte
	   var northFieldset = new Ext.form.FieldSet({
		collapsible:false,
        collapsed:false, 
        autoHeight:true,
        frame: false,
        title: "Criterios de cierre",
        items:[{
            layout:"column",
            autoWidth:true,
            border:false,
            items:[{
                //autoWidth:true,
                layout:"form",
                border:false,
                items:[cid_dealers, cid_TipoPeriodos, tPedidos]
            },{
                //autoWidth:true,
                layout:"form",
                border:false,
                items:[cid_provta, cid_periodos]
            },{
                //autoWidth:true,
                layout:"fit",
                border:false,
                items:[btnShowPro]
            }]
        }] // items
	    });
	   
	   //botones
	   var btnCerrarPer=new Ext.Button({
	    text:'Cerrar Periodo',
	    id:"btnCerrarPer",
	    handler:function(){ 
	    		 Ext.MessageBox.show({
                                        title:'Atención',
                                        msg: '<b><font color= #cc3300>Esta seguro de cerrar el periodo de este programa de Venta de este Distribuidor?</font></b><br>',
                                        buttons: Ext.MessageBox.OK,
                                        icon: Ext.MessageBox.INFO,
                                        modal:true
                                         }); 
	    } // function

      });
    
        var btnShowComp = new Ext.Button({
        text: 'Mostrar Informacion',
        id: 'btnShowComp',
        icon: App.utils.constants.ICONS_PATH + 'add.png',
        cls: 'x-btn-text-icon',
        handler: function () {
            //limpiar busqueda
            storedGrid1.load();
//            storedGrid2.load();
            } // function
        });
	   
       //grid y sus componentes

       var gridAgregar = new Ext.Toolbar.Button({
		text:'Cuota Cumplida',
        id:"btnAgregar",
        icon: App.utils.constants.ICONS_PATH  + 'add.png',
        cls: 'x-btn-text-icon'//,
//        hidden: !_showAdd,
//       	listeners: {
//           	click: function(xgrid, rowindex, e){
//                xurl='../Proveedores/Manto.castle?id_proveedor=0';
//                _theTop.showdialogo(800,400,'Agregar Proveedor',xurl)
//       		}
//       	}
    });


       var gridTbar = new Ext.Toolbar({
	    items:[gridAgregar]
	});	


// bbar
	var gridBbar= new Ext.PagingToolbar({
    	id:'bbar',
        pageSize: 25,
        store: storedGrid1,
        displayInfo: true,
        displayMsg: 'Mostrando {0} - {1} de ',//+ addCommas('{2}')	,
        emptyMsg: "No hay nada por mostrar",
        onClick: function(which){
        	switch(which){
        		case "first":
        			start=0;
        			this.doLoad(this.cursor);
        		break;
        		case "prev":
        			start=start-25;
        			this.doLoad(this.cursor);
        		break;
        		case "next":
        			start=start+25;
        			this.doLoad(this.cursor);
        		break;
        		case "last":
//        			start=storeGrid.getTotalCount()-25;
        			this.doLoad(this.cursor);
        		break;
        		case "refresh":
                    this.doLoad(this.cursor);
                break;
        	}
       }
//       ,plugins: new Ext.ux.Andrie.pPageSize({ //Paginación
//                comboCfg: {
//                    listeners: {
//                        select: function (combo, rec, index) {
//                            var pbar = Ext.getCmp('bbar');
//                            var psize = combo.getValue();
//                            pbar.store.syncPagingToolbars = function () {
//                                syncPagingToolbars(pbar, psize);
//                            }
//                        }
//                    }
//                }
//            })
    });


	   //grids

       Ext.ux.grid.GroupSummary.Calculations['totalCuota'] = function(v, record, field){
        return parseInt(v) + parseInt(record.data.cuota);
        };

         Ext.ux.grid.GroupSummary.Calculations['totalUnidades'] = function(v, record, field){
        return parseInt(v) + parseInt(record.data.UnidadesPedidas);
        };
        // utilize custom extension for Group Summary
        var summary = new Ext.ux.grid.GroupSummary();
        var summary2 = new Ext.ux.grid.GroupSummary();


	    var grid = new Ext.grid.GridPanel({
	    id:"grid",
	    border:false,
	    stripeRows: true,
	    viewConfig:{ forceFit:true},
	    ds: storedGrid1,
	    //cm: cm,
	    frame:true,
	    loadMask:true,
	    //selModel: sm,
	    tbar: gridTbar,
	    bbar: gridBbar,
	    //listeners: {
	     //   rowclick: function(grid, rowindex, e) {			                        
	     //       xurl='../Proveedores/Manto.castle?id_proveedor=' + grid.getSelectionModel().getSelected().data.id_proveedor;
         //       _theTop.showdialogo(800,400,'Editar Proveedor',xurl)
	     //  }
	    //} 
        plugins: summary,
//        view: new Ext.grid.GroupingView({
//        //collapsed:false,//revisar para que grid aparezca colapsado
//        //startCollapsed : true,
//        forcerFit:true,
//        groupTextTpl: '{[values.rs[0].data["number"]]}'
//        }),
//        collapsible: true,
//        animCollapse: false,
        
	    columns: [
                    {
                        xtype: 'gridcolumn',
                        //align: "center",
                        header: 'Clasificacion Corporativa',
                        sortable: true,
//                        width: 15,
                        dataIndex: 'cveClasCorp'
//                        align: 'right'
                    },
                    {
                        xtype: 'gridcolumn',
                        align: "right",
                        header: 'Cuota de Programa',
                        sortable: true,
//                        width: 15,
                        dataIndex: 'cuota',
                        //renderer: 'usMoney',
                        summaryType: 'totalCuota'
                        //,                        summaryRenderer: Ext.util.Format.usMoney

                    },
                    {
                        xtype: 'gridcolumn',
                        align: "right",
                        header: 'Unidades Pedidas',
                        sortable: true,
//                        width: 15,
                         dataIndex: 'UnidadesPedidas',
                         summaryType: 'totalUnidades'
                    },
                    {
                        xtype: 'gridcolumn',
                        align: "right",
                        header: 'Tipo de Cuota',
                        sortable: true,
//                        width: 15,
                         dataIndex: 'Tipo_cuota',
                         //summaryType: 'totalUnidades'
                    }
                ]              
	    });
 

       var gridAgregar1 = new Ext.Toolbar.Button({
		text:'Cuota NO Cumplida',
        id:"btnAgregar1",
        icon: App.utils.constants.ICONS_PATH  + 'add.png',
        cls: 'x-btn-text-icon'//,
//        hidden: !_showAdd,
//       	listeners: {
//           	click: function(xgrid, rowindex, e){
//                xurl='../Proveedores/Manto.castle?id_proveedor=0';
//                _theTop.showdialogo(800,400,'Agregar Proveedor',xurl)
//       		}
//       	}
    });


       var gridT1bar = new Ext.Toolbar({
	    items:[gridAgregar1]
	});	


// bbar
	var gridB1bar= new Ext.PagingToolbar({
    	id:'bbar1',
        pageSize: 25,
        store: storedGrid2,
        displayInfo: true,
        displayMsg: 'Mostrando {0} - {1} de ',//+ addCommas('{2}')	,
        emptyMsg: "No hay Modelos por mostrar",
        onClick: function(which){
        	switch(which){
        		case "first":
        			start=0;
        			this.doLoad(this.cursor);
        		break;
        		case "prev":
        			start=start-25;
        			this.doLoad(this.cursor);
        		break;
        		case "next":
        			start=start+25;
        			this.doLoad(this.cursor);
        		break;
        		case "last":
//        			start=storeGrid.getTotalCount()-25;
        			this.doLoad(this.cursor);
        		break;
        		case "refresh":
                    this.doLoad(this.cursor);
                break;
        	}
       }
//       ,plugins: new Ext.ux.Andrie.pPageSize({ //Paginación
//                comboCfg: {
//                    listeners: {
//                        select: function (combo, rec, index) {
//                            var pbar = Ext.getCmp('bbar');
//                            var psize = combo.getValue();
//                            pbar.store.syncPagingToolbars = function () {
//                                syncPagingToolbars(pbar, psize);
//                            }
//                        }
//                    }
//                }
//            })
    });

    //grid2
        Ext.ux.grid.GroupSummary.Calculations['totalCuota1'] = function(v, record, field){
        return parseInt(v) + parseInt(record.data.id_cuotaprograma);
        };

         Ext.ux.grid.GroupSummary.Calculations['totalPedidos1'] = function(v, record, field){
        return parseInt(v) + parseInt(record.data.id_PedidosH);
        };

         Ext.ux.grid.GroupSummary.Calculations['totalPedidosF'] = function(v, record, field){
        return parseInt(v) + parseInt(record.data.id_PedidosF);
        };

        

        var grid1 = new Ext.grid.GridPanel({
        id:"grid1",
	    border:false,
	    stripeRows: true,
	    viewConfig:{ forceFit:true},
	    ds: storedGrid2,
	    //cm: cm,
	    frame:true,
	    loadMask:true,
	    //selModel: sm,
	    tbar: gridT1bar,
	    bbar: gridB1bar,
//        view: new Ext.grid.GroupingView({
//        //collapsed:false,//revisar para que grid aparezca colapsado
//        //startCollapsed : true,
//        forcerFit:true,
//        groupTextTpl: '{[values.rs[0].data["number"]]}'
//        }),
        plugins: summary2,
	    listeners: {
	        cellclick: function (grid, xri, xci, e) {			                        
	            if (xci == "4") {
                    wdCargaPedido.show();
                    //return;
                }
	       }
	    },  
            columns: [
                    {
                        xtype: 'gridcolumn',
                        header: 'Clasificacion Corporativa',
                        sortable: true,
//                        width: 15,
                        dataIndex: 'id_classCorp'
//                        align: 'right'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Cuota de Programa',
                        sortable: true,
//                        width: 15,
                        dataIndex: 'id_cuotaprogramaNc',
                        summaryType: 'totalCuota1'

                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Unidades Pedidas',
                        sortable: true,
//                        width: 15,
                        dataIndex: 'id_UniPedH',
                        summaryType: 'totalPedidos1'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Unidades Faltantes',
                        sortable: true,
//                        width: 15,
                        dataIndex: 'id_UniPedF',
                        summaryType: 'totalPedidosF'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Completar',
                        sortable: true,
//                        width: 10,
                        dataIndex: 'id_completar',
                        renderer: CargaPedidorender
                    }
                ]
        });
        

        var cmPrograma = new Ext.grid.ColumnModel([   
                                        //smModelos,
                                    {        
                                        header: "#", 
                                        width: 30, 
                                        sortable: true, 
                                        dataIndex: 'Numero'
                                    },{        
                                        header: "Modelo", 
                                        width: 30, 
                                        sortable: true, 
                                        dataIndex: 'id_modelo'
                                    },{        
                                        header: "Cuota del Programa", 
                                        width: 30, 
                                        sortable: true, 
                                        dataIndex: 'id_cuotaprograma'
                                    },{    
                                        header: "Porcentaje", 
                                        width: 100, 
                                        sortable: true, 
                                        dataIndex: 'id_Porcentaje'
                                    }]
                                );                  



        //VENTANAS
            //ventanas
        var wdCargaPedido = new Ext.Window({
         title: 'Carga Pedido',
       closable:false,
        width:360,
        height:110,
        modal:true,
        maximizable:false,
        border:false,                                    
        layout: 'fit',
        resizable:false,
        items: [{	
			xtype:"form",
            id: 'form_conceptoGen',                                            
            frame:true,			                             
            items: [{
                                                xtype:"numberfield",
                                                fieldLabel:"Numero de Pedido",                                                
                                                id:'txtPedido',
//                                                allowBlank:false,
                                                width:200
                                            }]}],
                            buttons:[{
                                    text:'Agregar Pedido',
                                    scope: this,
                                    handler:function()
                                    { 
	    		                    Ext.MessageBox.show({
                                        title:'Atención',
                                        msg: '<b><font color= #cc3300>Esta seguro de agregar este pedido al Programa actual?</font></b><br>',
                                        buttons: Ext.Msg.YESNO,
                                        fn: function (b) {
                                        if (b == 'yes') {
                                            Ext.getCmp('txtPedido').setValue('');
                                           wdCargaPedido.hide();
                                        }
                                        else {
//                                        Ext.getCmp('txtPedido').setValue('');
//                                            wdCargaPedido.hide();
                                        }

                                    },
                                        icon: Ext.MessageBox.INFO,
                                        modal:true
                                         }); 
	                                 } // function
                                    },{
                                    text:'Cerrar',
                                    scope: this,
                                    handler: function() {
                                        Ext.getCmp('txtPedido').setValue('');
                                        wdCargaPedido.hide();
                                    }    
                                }]
        });



         var wdShowPrograma = new Ext.Window({
         title: 'Programa de venta :' + cid_provta.getValue().toString(),
       closable:false,
        width:800,
        height:320,
        modal:true,
        maximizable:false,
        border:false,                                    
        layout: 'fit',
        resizable:false,
        items: [{	
			xtype:"form",
            id: 'form_ProgVta',                                            
            frame:true,			                             
            items: [{
                                            xtype:"grid",
                                            id:"gridPrograma",
                                            title: "Programa de Venta",                                            
                                            viewConfig:{
                                                forceFit:true
                                            },
                                            ds: storePrograma,
                                            //sm: smModelos,
                                            columnLines: true,
                                            cm: cmPrograma,
                                            loadMask:true,
                                            frame:true,	                        
	                                        //anchor:'100% -98'                                            
                                            height:250
                                            }]
                                            }],
                            buttons:[
//                                    {
//                                    text:'Agregar Pedido',
//                                    scope: this,
//                                    handler:function()
//                                    { 
//	    		                    Ext.MessageBox.show({
//                                        title:'Atención',
//                                        msg: '<b><font color= #cc3300>Esta seguro de agregar este pedido al Programa actual?</font></b><br>',
//                                        buttons: Ext.Msg.YESNO,
//                                        fn: function (b) {
//                                        if (b == 'yes') {
//                                            Ext.getCmp('txtPedido').setValue('');
//                                           wdCargaPedido.hide();
//                                        }
//                                        else {
////                                        Ext.getCmp('txtPedido').setValue('');
////                                            wdCargaPedido.hide();
//                                        }

//                                    },
//                                        icon: Ext.MessageBox.INFO,
//                                        modal:true
//                                         }); 
//	                                 } // function
//                                    },
                                    {
                                    text:'Cerrar',
                                    scope: this,
                                    handler: function() {
                                        //Ext.getCmp('txtPedido').setValue('');
                                        wdShowPrograma.hide();
                                    }    
                                }]
        });



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
