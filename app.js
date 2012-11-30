
//Ext
Ext.Loader.setPath('Ext', 'lib/ext/src');
Ext.require('Ext.util.History');
Ext.require('Ext.data.*.Json');
Ext.require('Ext.layout.container.Border');

//Ext overrides
Ext.Loader.setPath('Overrides', 'lib/overrides');
Ext.require('Overrides.data.reader.Reader');


Ext.application({
    name: 'BASECAMP',
    autoCreateViewport: false,

    controllers: [
        'Login',
        'Navigation',
        'Projects',
        'TodoLists',
        'Topics',
        'Uploads',
        'Documents'
    ],

    launch: function () {
        Ext.util.History.init();
        this.getController('Login').checkLogin();
    }
});