Ext.define('BASECAMP.controller.Login', {
    extend: 'Ext.app.Controller',
    views: ['window.Login', 'Viewport'],
    models:['User'],
    refs: [
        {
            ref: 'login',
            selector: 'login',
            xtype: 'login',
            autoCreate: true
        }
    ],

    init: function () {
        this.control({
            'login': {
                loginButtonClicked: this.doLogin,
                enterPressInField: this.doLogin
            }
        });


    },
    checkLogin: function () {
        var me = this;

        Ext.Ajax.request({
            url: 'data/isloggedin.php',
            success: function (resp) {
                var responseObject = Ext.JSON.decode(resp.responseText);
                if (responseObject.success === false) {
                    me.getLogin().show();
                } else {
                    me.isLoggedIn(responseObject.user);
                }
            }
        });
    },
    isLoggedIn: function (user) {

        BASECAMP.currentUser = Ext.create('BASECAMP.model.User',user);


        this.getController('Navigation').initPaths();
        Ext.create('BASECAMP.view.Viewport');

    },

    doLogin: function (loginWindow) {

        var loginMask = new Ext.LoadMask(loginWindow, {msg: "Login..."});
        loginMask.show();

        var username = loginWindow.down('#username').getValue();
        var password = loginWindow.down('#password').getValue();

        Ext.Ajax.request({
            url: 'data/login.php',
            params: {
                user: username,
                pass: password
            },
            success: function (response) {
                loginMask.hide();
                var user = Ext.JSON.decode(response.responseText, true);
                if (user !== null) {
                    loginWindow.close();
                    this.isLoggedIn(user);
                }
            },
            failure: function () {
                loginMask.hide();
            },
            scope: this
        });
    }
});