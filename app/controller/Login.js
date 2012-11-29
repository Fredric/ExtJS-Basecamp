Ext.define('BASECAMP.controller.Login', {
    extend: 'Ext.app.Controller',
    views: ['window.Login'],
    refs: [
        {
            ref: 'login',
            selector: 'login',
            xtype:'login',
            autoCreate: true
        }
    ],

    init: function () {
        this.control({
            'login button': {
                click: {
                    fn: this.doLogin,
                    buffer: 300
                }
            }
        });


    },
    checkLogin: function () {
        Ext.Ajax.request({
            url: 'data/isloggedin.php',
            success: function (response) {
                var responseObject = Ext.JSON.decode(response.responseText);
                if (responseObject.success === false) {
                    this.getLogin().show();
                }else{
                    this.isLoggedIn(responseObject.user);
                }
            },
            scope:this
        });
    },
    isLoggedIn:function(){

        this.getController('Navigation').initPaths();
        Ext.create('BASECAMP.view.Viewport');

    },

    doLogin: function (btn) {
        var username = btn.up('login').down('#username').getValue();
        var password = btn.up('login').down('#password').getValue();

        Ext.Ajax.request({
            url: 'data/login.php',
            params: {
                user: username,
                pass: password
            },
            success: function (response) {
                var user = Ext.JSON.decode(response.responseText, true);
                if (user !== null) {

                    btn.up('window').close();
                    this.isLoggedIn(user);

                }
            },
            failure: function () {

            },
            scope:this
        });


    }
});