Ext.define('BASECAMP.view.window.Login', {
    extend: 'Ext.Window',
    alias: 'widget.login',
    bodyStyle: 'padding:10px',
    initComponent: function () {
        var me = this;

        me.items = [
            {
                itemId: 'username',
                xtype: 'textfield',
                fieldLabel: 'User name'
            },
            {
                itemId: 'password',
                xtype: 'textfield',
                fieldLabel: 'Password',
                inputType: 'password',
                enableKeyEvents: true,
                listeners: {
                    keypress: function (field, e) {
                        if (e.getKey() === 13) {
                            me.fireEvent('enterPressInField', me);
                        }
                    }
                }
            }
        ];

        me.buttons = [
            {
                text: 'Login',
                handler: function () {
                    me.fireEvent('loginButtonClicked', me);
                }
            }
        ];

        me.callParent();
        me.on('show', function(){
            me.down('#username').focus(true, 100);
        });
    }
});