Ext.define('BASECAMP.view.todolists.UI', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.todolists',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    initComponent: function () {
        var me = this;

        me.modal = Ext.create('BASECAMP.view.todolists.Window');

        me.items = [
            {
                flex: 1,
                xtype: 'todolistgrid'
            }
        ];
        me.callParent();
    }

});