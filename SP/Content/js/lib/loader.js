App = {};
App.utils = {};


App.utils.constants = function () {
    var VIRTUAL_DIRECTORY = "/nmxeservices/eservices/PruebaMvcExt/";
    if (window.location.hostname == 'evaluet.internationaldelivers.com')
        VIRTUAL_DIRECTORY = "/nmxeservices/eservices/PruebaMvcExt/";
    else
        VIRTUAL_DIRECTORY = "/PruebaMvcExt/";

    //server developer
    VIRTUAL_DIRECTORY = "/";
    return {
        BLANK_IMAGE_URL: VIRTUAL_DIRECTORY + 'Content/ext/resources/images/default/s.gif',
        ICONS_PATH: VIRTUAL_DIRECTORY + 'Content/images/silk/icons/',
        URL_BASE_PATH: VIRTUAL_DIRECTORY,
        APP_NAME: 'Camiones y Motores International'
    };
} ();

Ext.util.Format1 = function () {
    var trimRe = /^\s+|\s+$/g;
    return {
        htmlEncode: function (value) {
            return !value ? value : String(value).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
        },
        htmlDecode : function(value){
            return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
        }
    };
} ();


Ext.override(Ext.form.Field, {
    setReadOnly: function (readOnly) {
        if (readOnly == this.readOnly) {
            return;
        }
        this.readOnly = readOnly;

//        if (readOnly) {
//            this.getEl().dom.setAttribute('readOnly', true);
//        } else {
//            this.getEl().dom.removeAttribute('readOnly');
//        }
    }
})