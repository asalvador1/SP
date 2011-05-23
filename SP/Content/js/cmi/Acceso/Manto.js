// variables

// funciones
    function Regshot(){
        var cadoriginal = "";
        cadoriginal="id_trasladistau:" + _id_trasladistau  
        		+ ",userid:" + userid.getValue()
         		+ ",id_trasladista:" + id_trasladista.getValue()
                +",user_role: " + _user_role;
        return cadoriginal;
    }    
    
// stores
    var boldata = [
		['1', 'Sí'],
		['0', 'No']
	];

    var storebol = new Ext.data.SimpleStore({
        fields: ['value', 'text'],
        data: boldata
    });	

    var storeTrasladistas = new Ext.data.Store({
        proxy: new Ext.data.HttpProxy({
            url: App.utils.constants.URL_BASE_PATH + 'Traslados/ListTrasladista.castle'
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

    var st_administrador = _st_administrador;
    var tst_activo = _tst_activo;
    storeTrasladistas.on('beforeload',
		function (ds, options) {
		    var p = Ext.apply(ds.baseParams || {},
	                {
	                    st_activo: tst_activo,
	                    st_administrador: st_administrador
	                });
		    ds.baseParams = p;
		}

	);

      
	storeTrasladistas.on('load',
		function(ds, options){
			if(id_trasladista.getValue()!=0)
			cid_trasladista.setValue(id_trasladista.getValue());			
		}

	);

var storeRoles = new Ext.data.Store({
    proxy: new Ext.data.HttpProxy({
            url: App.utils.constants.URL_BASE_PATH + 'Acceso/ListUserRoles.castle'
        }),
        reader: new Ext.data.JsonReader({
            root: 'catalogo',
            fields: [
                { name: 'nb_codigo', mapping: 'nb_codigo' },
                { name: 'tx_descripcion', mapping: 'tx_descripcion' }
            ]
        })
    });

    storeRoles.on('load',
        function (ds, options) {
            if (user_role.getValue() != "")
                rolUsuario.setValue(user_role.getValue());
        });

	var nb_tipo=new Ext.form.Hidden({
        name:"Logevento.nb_tipo",
        id:"Logevento.nb_tipo",
        value:"Actualizar catalogo"	
	});

	var ts_fevento=new Ext.form.Hidden({
        name:"Logevento.ts_fevento",
        id:"Logevento.ts_fevento"
	});
	
	var nb_tabla=new Ext.form.Hidden({
        name:"Logevento.nb_tabla",
        id:"Logevento.nb_tabla",
        value: "TCTRA_PatioTraslado"
	});

	var nu_ievento=new Ext.form.Hidden({
        name:"Logevento.nu_ievento",
        id:"Logevento.nu_ievento",
        value:_id_trasladistau
	});

	var nb_uevento= new Ext.form.Hidden({ 
        name:"Logevento.nb_uevento",
        id:"Logevento.nb_uevento",
        value: _nb_uevento
	});

	var tx_regoriginal= new Ext.form.Hidden({ 
        name:"Logevento.tx_regoriginal",
        id:"Logevento.tx_regoriginal",
        value: _regoriginal
	});

	var tx_regmodificado= new Ext.form.Hidden({ 
        name:"Logevento.tx_regmodificado",
        id:"Logevento.tx_regmodificado"
	});

	var id_trasladistau= new Ext.form.Hidden({ 
        name:"Usuario.id_trasladistau",
        id:"Usuario.id_trasladistau",
        value:_id_trasladistau
		
	});

	var id_trasladista= new Ext.form.Hidden({ 
        name:"Usuario.id_trasladista",
        id:"Usuario.id_trasladista",
        value:_id_trasladista

    });

    var user_role = new Ext.form.Hidden({
        name: "Usuario.user_role",
        id: "Usuario.user_role",
        value: _user_role
    });

    var st_activo = new Ext.form.Hidden({
        name: "Usuario.st_activo",
        id: "Usuario.st_activo",
        value: _st_activo
    });
    
	var cid_trasladista = new Ext.form.ComboBox({    
        fieldLabel:"Trasladista",
        labelStyle:"text-align:right",
        name:"cid_trasladista",
        id:"cid_trasladista",
        width:200,
        store: storeTrasladistas,
        mode:'remote',
        forceSelection: false,
        displayField:'nb_alias',
        valueField:'id_trasladista',
        triggerAction:'all',
        emptyText:'Seleccione...',
        resizable: true,
        editable:false,
        allowBlank:false,
        tabIndex: 0,
        disabled: _enabled_combo_trasl,
        listeners: {
            select: function(combo, record, index) { 
                id_trasladista.setValue(cid_trasladista.getValue());
            }
        }  	
	});
    
    var userid= new Ext.form.TextField({ 
        fieldLabel:"User ID",
        labelStyle:"text-align:right",
        name:"Usuario.userid",
        id:"userid",
        width:200,
        allowBlank:false,
        tabIndex : 2,
        maxLength:150,
        value: _userid
    });

    var rolUsuario = new Ext.form.ComboBox({
        fieldLabel: "Perfil Usuario",
        labelStyle: "text-align:right",
        name: "rolUsuario",
        id: "rolUsuario",
        width: 200,
        store: storeRoles,
        mode: 'remote',
        forceSelection: true,
        displayField: 'tx_descripcion',
        valueField: 'nb_codigo',
        triggerAction: 'all',
        emptyText: 'Seleccione...',
        resizable: true,
        editable: false,
        allowBlank: false,
        tabIndex: 0,        
        listeners: {
            select: function (combo, record, index) {
                //id_trasladista.setValue(cid_trasladista.getValue());
                var selected = this.getValue()
                user_role.setValue(selected);
                id_trasladista.setValue(null);
                cid_trasladista.setValue('');
                if (selected == "TA") //si es trasladista administrador solo mostrar trasladistas administradores
                {
                    cid_trasladista.setDisabled(false);
                    st_administrador = 1; tst_activo = 1;                    
                }
                else if (selected == "T") {
                    cid_trasladista.setDisabled(false);
                    st_administrador = 99;tst_activo = 99;}                
                else {
                    cid_trasladista.setDisabled(true);
                    st_administrador = 99;tst_activo = 99;
                }
                storeTrasladistas.load();
            }
        }

    });
    var cst_activo = new Ext.form.ComboBox({
        fieldLabel: "¿Está activo?",
        labelStyle: "text-align:right",
        name: "cst_activo",
        id: "cst_activo",
        disabled: false,
        width: 50,
        store: storebol,
        mode: 'local',
        forceSelection: true,
        displayField: 'text',
        valueField: 'value',
        triggerAction: 'all',
        emptyText: 'Seleccione...',
        resizable: false,
        editable: false,
        allowBlank: false,
        tabIndex: 15,
        listeners: {
            select: function (combo, record, index) {
                st_activo.setValue(cst_activo.getValue());
            }
        }
    });


	var formFieldset = new Ext.form.FieldSet({
		collapsible:false,
        collapsed:false, 
        autoHeight:true,
        frame: true,
        title: "Permisos de acceso al usuario",
        items:[{
            layout:"column",
            border:false,
            items:[{
                width:350,
                layout:"form",
                border:false,
                items: [rolUsuario,cid_trasladista]
            },{
                width:350,
                layout:"form",
                border:false,
                items: [userid, cst_activo]
            }]
        }] // items
	});

    
	var btnSave= new Ext.Button({
        text:'Guardar',
        tabIndex : 18,
        scope: this,
        handler: function() {  
	        var form = Ext.getCmp('frmmain');
	        if (form.getForm().isValid())
	        {
	
	            form.getForm().submit({
	                url:App.utils.constants.URL_BASE_PATH + 'Acceso/Save.castle', 
	                waitMsg:'Registrando datos...',
	                success:function(form, action) { 
	                        if(action.type == 'submit') {  
	                            parent.Ext.MessageBox.show({
	                            title:'Mensaje del sistema',
	                            msg: 'Operación realizada con éxito.',
	                            buttons: Ext.MessageBox.OK,
	                            icon: Ext.MessageBox.INFO,
	                            modal:true
	                            
	                        });
	                        /*
	                        // registro del evento al log 
	                        var datesend=new Date().getFullYear( )+'/'+new Date().getMonth( )+'/'+new Date().getDay( )+' '+new Date().getHours( )+':'+new Date().getMinutes( )
	                        ts_fevento.setValue(datesend);
	                        tx_regmodificado.setValue(Regshot());
	                        
	                        var form2 = Ext.getCmp('frmlog');
	                        form2.getForm().submit();*/
	                        _theTop.hidedialogo();
	                        _theTop.frmmain.storeGrid.load();
	                        } // action.type == 'submit
	                
	               }, // function success
	               failure: function(form, action) {
	                    var msg = "";
	                    if(action.type == 'submit') {
	                        if (action.result.message) { //Mensaje de negocio
	                            msg = action.result.error;
	                            //msg="error"
	                        } else { //Unknow error
	                            msg =  action.result.error;
	                        }
	                    }
	                    Ext.MessageBox.show({
	                        title:'Mensaje del sistema',
	                        msg: msg,
	                        buttons: Ext.MessageBox.OK,
	                        icon: Ext.MessageBox.ERROR,
	                        modal:true
	                    });   
	               
	                        } // function faliure
	            
	            }); // submit
	        } 
	        else
	        {
	                Ext.MessageBox.show({
	                title:'Mensaje del sistema',
	                msg: 'La forma contiene errores, favor de verificar',
	                buttons: Ext.MessageBox.OK,
	                icon: Ext.MessageBox.ERROR
	            });  			                            
	        }
	        // if de validación			                    
        } // handler de la funcion
    });

	var btnCerrar= new Ext.Button({
		text:'Cerrar Ventana',
        id:"btnCerrar",
        handler:function(){
                _theTop.hidedialogo();     
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
	                layout: "border",
	                window: {
	                    layout: "fit"
	                },
	                items: [{
	                    region: "north",
	                    layout: "border",
	                    className: 'x-hidden',
	                    height: 0,
	                    frame: false,
	                    items: [{ // formulario para log
	                        xtype: "form",
	                        id: "frmlog",
	                        className: 'x-hidden',
	                        url: App.utils.constants.URL_BASE_PATH + 'Traslados/SaveLog.castle',
	                        items: [nb_tipo, ts_fevento, nb_tabla, nu_ievento, nb_uevento, tx_regoriginal, tx_regmodificado] // items frmlog
	                    }] // items north
	                }, {
	                    region: "center",
	                    layout: "fit",
	                    frame: false,
	                    items: [{
	                        xtype: "form",
	                        id: "frmmain",
	                        buttonAlign: "right",
	                        frame: true,
	                        buttons: [btnSave, btnCerrar], // buttons
	                        items: [id_trasladista, id_trasladistau, formFieldset, user_role, st_activo] // items de form principal
	                    }] // items center

	                }]// items viewport
	            });
	            //End ViewPort 

	            if (_id_trasladistau != 0) {
	                storeTrasladistas.load();
	                storeRoles.load();
	                cst_activo.setValue(st_activo.getValue());	                
	            }
	        }
	    } // fin del evento principal
	} ();
    
    Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);