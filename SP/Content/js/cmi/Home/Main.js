 var btnListaPrecios=new Ext.Button({
	    text:'Lista de Precios',
	    id: "btnListaPrecios",
        height:50,
        width:300,
	    icon: App.utils.constants.ICONS_PATH + 'add.png',
	    cls: 'x-btn-text-icon',
	    handler:function(){
	        location.href= App.utils.constants.URL_BASE_PATH + 'StockingProgram.aspx/panelProgramaVtaHeader';
	    } // function

      });
    
        var btnProVta = new Ext.Button({
        text: 'Programa de Venta',
        id: 'btnProVta',
        height:50,
        width:300,
        icon: App.utils.constants.ICONS_PATH  + 'add.png',
        cls: 'x-btn-text-icon',
        //tabIndex: 9,
        handler: function () {
            location.href=App.utils.constants.URL_BASE_PATH + 'Venta.aspx/CierreProgramaVta';
        } // function
        });

         var btnPedidoElectronico = new Ext.Button({
        text: 'Pedido Electronico',
        id: 'btnPedidoElectronico',
        height:50,
        width:300,
        icon: App.utils.constants.ICONS_PATH  + 'add.png',
        cls: 'x-btn-text-icon',
        //tabIndex: 9,
        handler: function () {
            location.href=App.utils.constants.URL_BASE_PATH + 'Content/js/cmi/Home/Pedido de Unidades.htm';
        } // function
        });

         var btnCapturaPedido = new Ext.Button({
        text: 'Captura Pedido',
        id: 'btnCapturaPedido',
        height:50,
        width:300,
        icon: App.utils.constants.ICONS_PATH  + 'add.png',
        cls: 'x-btn-text-icon',
        //tabIndex: 9,
        handler: function () {
            location.href=App.utils.constants.URL_BASE_PATH + 'Content/js/cmi/Home/CapturaPedido.htm';
        } // function
        });

         var btnSolicitudSustitucion = new Ext.Button({
        text: 'Solicitud de Sustitucion',
        id: 'btnSolicitudSustitucion',
        height:50,
        width:300,
        icon: App.utils.constants.ICONS_PATH  + 'add.png',
        cls: 'x-btn-text-icon',
        //tabIndex: 9,
        handler: function () {
            location.href=App.utils.constants.URL_BASE_PATH + 'Content/js/cmi/Home/SolicituSustitucion.htm';
        } // function
        });

         var btnSustitucionPedido = new Ext.Button({
        text: 'Sustitucion de Pedido',
        id: 'btnSustitucionPedido',
        height:50,
        width:300,
        icon: App.utils.constants.ICONS_PATH  + 'add.png',
        cls: 'x-btn-text-icon',
        //tabIndex: 9,
        handler: function () {
            location.href=App.utils.constants.URL_BASE_PATH + 'Content/js/cmi/Home/SustituirPedido.htm';
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
                   // region:"center",
                    //buttonAlign: "center",
                    //buttons: [btnListaPrecios, btnProVta],
                    items: [btnListaPrecios, btnProVta, btnPedidoElectronico, btnCapturaPedido, btnSolicitudSustitucion, btnSustitucionPedido],
                    frame: true,
                    autoScroll: true,
                    title: 'Demo Lista de precios y Programa de Venta',
//                    items: [
//                            northFieldset
//                       ]
                }]// items viewport
            });

        }
    }
} ();






Ext.EventManager.onDocumentReady(MainLayout.init, MainLayout, true);
