// variables locales
	var start=_start;
    var limit=_limit;
    var bolExporta;
//funciones locales

// stores

    var storeTrasladistas = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({
            url: App.utils.constants.URL_BASE_PATH + 'Home/List'
        }),
        reader: new Ext.data.JsonReader({
            root: 'Trasladistas',
            fields: [
                {name: 'id_trasladista', mapping: 'id_trasladista'},
                {name: 'nb_alias', mapping: 'nb_alias'}
            ]
        }),                    
        remoteSort: true,
        sortInfo: {field: "nb_alias", direction: "ASC"}
    });            

	var storeGrid = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({
            url: App.utils.constants.URL_BASE_PATH + 'Acceso/ListUser.castle'
        }),
        reader: new Ext.data.JsonReader({
            root: 'users',
            totalProperty: 'totalCount',
            fields: [
                {name: 'id_trasladistau', mapping: 'id_trasladistau'},       
                {name: 'userid', mapping: 'userid'},                           
                {name: 'nb_alias', mapping: 'nb_alias'}, 
                {name: 'username', mapping: 'username'}, 
                {name: 'st_activo', mapping: 'st_activo'},
                { name: 'st_administrador', mapping: 'st_administrador' },
                { name: 'user_role_description', mapping: 'user_role_description' },
            ]
        }),
        remoteSort: true,
        sortInfo: {field: "username", direction: "ASC"}
    });
    
    storeGrid.on('beforeload',
            function(ds, options){                            
                var p = Ext.apply(ds.baseParams || {}, 
                	{	userid:userid.getValue(), 
	                    username:username.getValue(), 
	                    id_trasladista:id_trasladista.getValue(), 
	                    start:start, 
	                    limit:limit}); 
                ds.baseParams = p;                            
            }
    );  
// grid

            var cm = new Ext.grid.ColumnModel([{
                header: 'User ID',
                width: 15,
                sortable: true,
                dataIndex: 'userid',
                hidden: false
            }, {
                header: 'Nombre',
                width: 25,
                sortable: true,
                dataIndex: 'username'
            }, {
                header: 'Trasladista',
                width: 15,
                sortable: true,
                dataIndex: 'nb_alias'
            }, {
                header: 'Activo',
                width: 25,
                sortable: true,
                dataIndex: 'st_activo',
                renderer: activorender,
                align: "center"
            }
            /*,{
            header: 'Administrador', 
            width: 20, 
            sortable: true, 
            dataIndex: 'st_administrador',
            renderer : activorender,
            align: "center"
            }*/
        , {
            header: 'Perfil',
            width: 25,
            sortable:true,
            dataIndex:'user_role_description',
            align:'left'
        }
        ]
    );
    
    var sm = new Ext.grid.RowSelectionModel({ singleSelect : true });

	var gridAgregar = new Ext.Toolbar.Button({
		text:'Agregar',
        id:"btnAgregar",
        icon: App.utils.constants.ICONS_PATH  + 'add.png',
        cls: 'x-btn-text-icon',
       	listeners: {
           	click: function(xgrid, rowindex, e){
                xurl='../Acceso/Manto.castle?id_trasladistau=0';
                _theTop.showdialogo(800,400,'Agregar Acceso',xurl)
       		}
       	}
    });

	var gridTbar = new Ext.Toolbar({
	    items:[gridAgregar]
	});	


// bbar
	var gridBbar= new Ext.PagingToolbar({
    	id:'bbar',
        pageSize: 25,
        store: storeGrid,
        displayInfo: true,
        displayMsg: 'Mostrando Usuarios {0} - {1} de '+ addCommas('{2}')	,
        emptyMsg: "No hay Usuarios por mostrar",
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
        			start=storeGrid.getTotalCount()-25;
        			this.doLoad(this.cursor);
        		break;
        		case "refresh":
                    this.doLoad(this.cursor);
                break;
        	}
       }
       ,plugins: new Ext.ux.Andrie.pPageSize({ //Paginación
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
	    id:"grid",
	    border:false,
	    stripeRows: true,
	    viewConfig:{ forceFit:true   },
	    ds: storeGrid,
	    cm: cm,
	    frame:true,
	    loadMask:true,
	    selModel: sm,
	    tbar: gridTbar,
	    bbar: gridBbar,
	    listeners: {
	        rowclick: function(grid, rowindex, e) {			                        
	            xurl='../Acceso/Manto.castle?id_trasladistau=' + grid.getSelectionModel().getSelected().data.id_trasladistau;
                _theTop.showdialogo(800,250,'Editar Acceso',xurl)
	        }
	    }                
	});
        //paginación de grid
        var syncPagingToolbars = function (pbar, newPageSize) {
            if (pbar.pageSizeCombo.combo) {
                pbar.pageSizeCombo.combo.setValue(newPageSize);
            }
            pbar.pageSize = newPageSize;
            pbar.onLoad(pbar.store, pbar.store.getRange(), pbar.store.lastOptions);
            pbar.updateInfo();
        };

        //***
// elementos del formulario

	var id_trasladista=new Ext.form.ComboBox({
        fieldLabel:"Trasladista",
        labelStyle:"text-align:right",
        name:"id_trasladista",
        id:"id_trasladista",
        disabled: false,
        width:200,
        store: storeTrasladistas,
        mode:'remote',
        forceSelection: true,
        displayField:'nb_alias',
        valueField:'id_trasladista',
        triggerAction:'all',
        emptyText:'Seleccione...',
        resizable: true,
        editable:false	
	});	


	var userid= new Ext.form.TextField({ 
        fieldLabel:"User ID",
        labelStyle:"text-align:right",
        name:"userid",
        id:"userid",
        width:80	
	});

	var username= new Ext.form.TextField({ 
	    fieldLabel:"Nombre",
	    labelStyle:"text-align:right",
	    name:"username",
	    id:"username",
	    width:200,
	    maxLength:255
	});

	var btnBuscar=new Ext.Button({
	    text:'Buscar',
	    id:"btnBuscar",
	    handler:function(){ 
	    		start=0;
	    		storeGrid.load();
	    } // function
});
var btnClean = new Ext.Button({
    text: 'Limpiar',
    id: 'btnClean',
    icon: App.utils.constants.ICONS_PATH + 'tras_cancelado.png',
    cls: 'x-btn-text-icon',
    handler: function () {
        //limpiar busqueda
        userid.setValue('');
        username.setValue('');
        id_trasladista.setValue('');
        storeGrid.removeAll();
    } // function
});

	var northFieldset = new Ext.form.FieldSet({
		collapsible:false,
        collapsed:false, 
        autoHeight:true,
        frame: true,
        title: "Criterios de búsqueda",
        items:[{
            layout:"column",
            border:false,
            items:[{
                width:350,
                layout:"form",
                border:false,
                items:[userid, id_trasladista]
            },{
                width:350,
                layout:"form",
                border:false,
                items:[username]
            }]
        }] // items
	});
    
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
                        region:"center",
                        layout:"fit",    
                        items:[ grid ]
                      },{
                        region:"north",//north
                        layout:"fit", 
                        id: "north",  
                        title:"Acceso Usuarios",
                        height:200,                        
                        collapsible: true,  //Minimizar el north
                        split:true,         //Minimizar el north                        
                        items:[{
                            xtype:"form",
                            buttonAlign:"right",
			                buttons:[btnBuscar, btnClean],                          
                            frame:true,
                            items:[northFieldset]
                          }]
                      }]
                 });
		    } 
	    } // fin del evento principal
    }();

    Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);