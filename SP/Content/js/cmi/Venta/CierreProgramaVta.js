	    //stores
                       var storedGfx = new Ext.data.SimpleStore({
                    fields: ['claGfx','descGfx'],
                    data  : [
                            ['930008', 'A. MERCANTILES'],
                            ['930099', 'AMSA ORIENTE'],
                            ['930248', 'CADUSA'],
                            ['930255', 'CATOSA'],
                            ['930271', 'CACESA'],
                            ['930339', 'CAPASA'],
                            ['930412', 'CADISA'],
                            ['930487', 'C. ESPECIALES'],
                            ['930578', 'CAMINOSA'],
                            ['930636', 'DIEZ CAMIONES'],
                            ['930644', 'DACZA'],
                            ['930727', 'DIEZ MOTORES'],
                            ['931089', 'CAJASA'],
                            ['931196', 'ENER'],
                            ['931774', 'KASA'],
                            ['931881', 'RAFEDHER'],
                            ['932194', 'GEMI'],
                            ['932210', 'GALERIAS'],
                            ['935122', 'INTERNATIONAL B.C.'],
                            ['936153', 'MI CAMION'],
                            ['940001', 'UTM'],
                            ['940002', 'UTP'],
                            ['940003', 'RESALTA'],
                            ['940005', 'IDEALEASE']

                    ]
                });

                 var storedPeriodos = new Ext.data.SimpleStore({
                    fields: ['claPeriodo','descPeriodo'],
                    data  : [
                            ['1', ' Febrero - Abril'],
                            ['2', 'Mayo - Julio'],
                            ['3', 'Agosto - Octubre']
                            
                    ]
                });
                //Agrupados
                var storedProgramaVta = new Ext.data.SimpleStore({
                    fields: ['claPro','descPro'],
                    data  : [
                            ['1', 'Programa de Venta 1'],
                            ['2', 'Programa de Venta 2'],
                            ['3', 'Programa de Venta 3']
                            
                    ]
                });

//                var Cuotacumplida = Ext.data.Record.create([
//                 {name: 'number'},         // "mapping" only needed if an "id" field is present which
//                 {name: 'id_modelo'},    // precludes using the ordinal position as the index.
//                 {name: 'id_cuotaprograma1'},    // precludes using the ordinal position as the index.
//                 {name: 'id_Pedidos'}    // precludes using the ordinal position as the index.
//                ]);


//                var myReader = new Ext.data.ArrayReader(null,Cuotacumplida);

//                 var storedGrid1 = new Ext.data.GroupingStore({
////                 reader: new Ext.data.ArrayReader({
////                    //fields: ['number','id_modelo','id_cuotaprograma','id_Pedidos']
////                    }),
//                    reader:myReader,
//                     data  : [
//                            ['1','3000RE', '2', '3'],
//                            ['1','3300CE', '3', '6'],
//                            ['2','4700FE', '9', '9'],
//                            ['2','4700 SFC', '5', '5'],
//                            ['2','4200', '8', '8'],
//                            ['3','4300', '10', '10'],
//                            ['3','4400 6x2', '2', '2'],
//                            ['3','4400 6x4', '4', '5'],
//                            ['4','4400 4x2', '9', '9']
////                            ['5','7300', '3', '3'],
////                            ['6','7400 6x4', '6', '6'],
////                            ['6','7400 4x2', '7', '7'],
////                            ['6','8600 Transtar', '8', '8'],
////                            ['6','9200', '8', '8'],
////                            ['7','9400', '2', '2'],
////                            ['7','Prostar', '5', '5']

//                    ],
//                    groupField: 'number'
//                });

//                //

//                var CuotaNOcumplida = Ext.data.Record.create([
//                 {name: 'number'},
//                 {name: 'id_modelo'},         // "mapping" only needed if an "id" field is present which
//                 {name: 'id_cuotaprograma'},    // precludes using the ordinal position as the index.
//                 {name: 'id_PedidosH'},    // precludes using the ordinal position as the index.
//                 {name: 'id_PedidosF'},    // precludes using the ordinal position as the index.
//                 {name: 'id_completar'}
//                ]);

//                var myReader2 = new Ext.data.ArrayReader(null,CuotaNOcumplida);

//                 var storedGrid2 = new Ext.data.GroupingStore({
//                    reader:myReader2,
//                     data  : [
////                            ['1','3000RE', '2', '1', '1', 'Completar'],
////                            ['1','3300CE', '3', '2', '1', 'Completar'],
////                            ['2','4700FE', '9', '5', '4', 'Completar'],
////                            ['2','4700 SFC', '5', '3', '2', 'Completar'],
////                            ['2','4200', '8', '7', '1', 'Completar'],
////                            ['3','4300', '10', '9', '1', 'Completar'],
////                            ['3','4400 6x2', '2', '1', '1', 'Completar'],
////                            ['3','4400 6x4', '4', '3', '1', 'Completar'],
////                            ['4','4400 4x2', '9', '8', '1', 'Completar'],
////                            ['4','7300', '3', '2', '1', 'Completar'],
//                            ['5','7400 6x4', '6', '5', '1', 'Completar'],
//                            ['6','7400 4x2', '7', '6', '1', 'Completar'],
//                            ['7','8600 Transtar', '8', '5', '3', 'Completar'],
//                            ['7','9200', '8', '4', '4', 'Completar'],
//                            ['7','9400', '2', '1', '1', 'Completar'],
//                            ['8','Prostar', '5', '2', '3', 'Completar']

//                    ],
//                    groupField: 'number'
//                });

               //
                 var storedGrid1 = new Ext.data.SimpleStore({
                    fields: ['id_classCorp','id_cuotaprograma','id_Unidad'],
                    data  : [
                            ['Buses','10','10'],
//                            ['Heavy','13','9'],
                            ['Light','6','6'],
//                            ['Medium','9','7'],
                            ['Severe Service','4','4']
                    ]
                });


                var storedGrid2 = new Ext.data.SimpleStore({
                    fields: ['id_classCorp','id_cuotaprogramaNc','id_UniPedH', 'id_UniPedF', 'id_completar'],
                    data  : [
//                            ['Buses','10','10','0','completar'],
                            ['Heavy','13','9','4','completar'],
//                            ['Light','6','6','0','completar'],
                            ['Medium','9','7','2','completar'],
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
        id:"cargaPedido",
        //width:80	
	});

	    var id_dealers=new Ext.form.ComboBox({
        fieldLabel: 'Distribuidores',
        labelStyle:"text-align:right",
        name: 'cmbDealers',
        id:"cmbDealers",
        disabled: false,
        width:200,
        store: storedGfx,
        mode:'local',
        forceSelection: true,
        displayField:'descGfx',
        valueField:'claGfx',
        triggerAction:'all',
        emptyText:'Seleccione...',
        resizable: true,
        editable:false	
	    });

        var id_periodo=new Ext.form.ComboBox({
        fieldLabel: 'Periodo',
        labelStyle:"text-align:right",
        name: 'cmbPeriodo',
        id:"cmbPeriodo",
        disabled: false,
        width:200,
        store: storedPeriodos,
        mode:'local',
        forceSelection: true,
        displayField:'descPeriodo',
        valueField:'claPeriodo',
        triggerAction:'all',
        emptyText:'Seleccione...',
        resizable: true,
        editable:false	
	    });
	
	    var tPedidos= new Ext.form.TextField({ 
        fieldLabel:"Total de Pedidos",
        labelStyle:"text-align:right",
        name:"tPedidos",
        id:"tPedidos",
        disabled: true,
        value:'25',
        width:80	
	    });
	    
	     var id_provta=new Ext.form.ComboBox({
        fieldLabel: 'Programa de Venta',
        labelStyle:"text-align:right",
        name: 'cmbProVta',
        id:"cmbProVta",
        disabled: false,
        width:200,
        store: storedProgramaVta,
        mode:'local',
        forceSelection: true,
        displayField:'descPro',
        valueField:'claPro',
        triggerAction:'all',
        emptyText:'Seleccione...',
        resizable: true,
        editable:false	
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
                items:[id_dealers, id_periodo, tPedidos]
            },{
                //autoWidth:true,
                layout:"form",
                border:false,
                items:[id_provta]
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
    
        var btnClose = new Ext.Button({
        text: 'Cerrar',
        id: 'btnClose',
        icon: App.utils.constants.ICONS_PATH + 'tras_cancelado.png',
        cls: 'x-btn-text-icon',
        //tabIndex: 9,
//        handler: function () {
//            //limpiar busqueda
//            gfx.setValue('');
//            id_entidadf.setValue('');
//            id_municipio.setValue('');
//            rfc.setValue('');
//            proveedor.setValue('');
//            storeGrid.removeAll();
//        } // function
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


	   //grids

       Ext.ux.grid.GroupSummary.Calculations['totalCuota'] = function(v, record, field){
        return parseInt(v) + parseInt(record.data.id_cuotaprograma1);
        };

         Ext.ux.grid.GroupSummary.Calculations['totalUnidades'] = function(v, record, field){
        return parseInt(v) + parseInt(record.data.id_Unidad);
        };
        // utilize custom extension for Group Summary
        var summary = new Ext.ux.grid.GroupSummary();
        var summary2 = new Ext.ux.grid.GroupSummary();


	    var grid = new Ext.grid.GridPanel({
	    id:"grid",
	    border:false,
	    stripeRows: true,
	    viewConfig:{ forceFit:true},
//        autoHeight: true,
        height: 500,
        width:638,
        //autoWidth:true,
//        region: 'west',
        //width: 640,
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
                        dataIndex: 'number',
                        header: '#',
                        sortable: true,
                        hidden:true,
//                        collapsed:true
                        //width: 5
                    },
                    {
                        xtype: 'gridcolumn',
                        align: "center",
                        header: 'Clasificacion Corporativa',
                        sortable: true,
                        //width: 15,
                        dataIndex: 'id_classCorp'
//                        align: 'right'
                    },
                    {
                        xtype: 'gridcolumn',
                        align: "right",
                        header: 'Cuota de Programa',
                        sortable: true,
                        //width: 15,
                        dataIndex: 'id_cuotaprograma',
                        //renderer: 'usMoney',
                        summaryType: 'totalCuota'
                        //,                        summaryRenderer: Ext.util.Format.usMoney

                    },
                    {
                        xtype: 'gridcolumn',
                        align: "right",
                        header: 'Pedidos Hechos',
                        sortable: true,
                        //width: 15,
                         dataIndex: 'id_Unidad',
                         summaryType: 'totalUnidades'
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
        //anchor:"100% - 98",
//        region: 'west',
        height: 500,
        width:638,
//        autoHeight:true,
       // width: 640,
	    ds: storedGrid2,
	    //cm: cm,
	    frame:true,
	    loadMask:true,
//        anchor:'50% -40', 
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
                        //width: 15,
                        dataIndex: 'id_classCorp'
//                        align: 'right'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Cuota de Programa',
                        sortable: true,
                        //width: 15,
                        dataIndex: 'id_cuotaprogramaNc',
                        summaryType: 'totalCuota1'

                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Pedidos Hechos',
                        sortable: true,
                       // width: 15,
                        dataIndex: 'id_UniPedH',
                        summaryType: 'totalPedidos1'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Pedidos Faltantes',
                        sortable: true,
                        //width: 15,
                        dataIndex: 'id_UniPedF',
                        summaryType: 'totalPedidosF'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Completar',
                        sortable: true,
                        //width: 10,
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
         title: 'Programa de venta :' + id_provta.getValue().toString(),
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
                            frame:true,
                            //autoWidth:true,
                            items:[northFieldset],
                            buttonAlign:"right",
			                buttons:[btnCerrarPer,btnClose]                          
                            
                          }]
                      },{    
//                        xtype:"container",
                        //autoScroll: true,
                        region:"center",
                        layout:"fit",
//                        autoHeight:true,
//                        autoWidth:true,
                            //split:true,
                        items:[//grid,grid1
                                {
                                xtype: 'container', 
                                autoScroll: true,
//                                margins:(5,0,0,5),                   
                                //region:"west",
                                border:false,
                                layout:"column",  
                                //height:500,
                                //autoheight:true,  
                                //autoWidth:true,
                                items:[{
                                xtype: 'panel',                    
                                //region:"east",
                                border:false,
                                layout:"fit",  
                                //anchor:'100% -96', 
                                //height:500,
//                                autoHeight:true,  
                                //autoWidth:true,
                                items:[grid]
                                }
                                ,{
                                xtype: 'panel',                    
                                //region:"weast",
                                border:false,
                                layout:"fit",  
                                //anchor:'100% -96', 
                                //height:500,
//                                autoHeight:true,  
                                //autoWidth:true,
                                items:[grid1]
                                }
                                ]
                                }
//                                ,{
//                                xtype: 'panel',                    
//                                //region:"weast",
//                                border:false,
//                                layout:"fit",  
//                                //anchor:'100% -96', 
//                                //height:500,
////                                autoHeight:true,  
//                                //autoWidth:true,
//                                items:[grid1]
//                                }
                                ]
                        //items:[grid,grid1] //poner contenedor(panel) en la region center
                      }]
                 });

		    } 
	    }
	    }();






 Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);
