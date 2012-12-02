Ext.define('BASECAMP.view.panel.TodoLists', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.todolists',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    initComponent: function () {
        var me = this;

        me.modal = Ext.create('BASECAMP.view.window.TodoList');

        me.items = [
            {
                flex: 1,
                xtype: 'todolistgrid'
            }
        ];
        me.callParent();
    }

});