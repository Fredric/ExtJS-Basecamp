Ext.define('BASECAMP.view.panel.TodoLists', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.todolists',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'todolistgrid'
        },
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {flex: 1, xtype: 'todogrid', itemId: 'remaining'},
                {flex: 1, xtype: 'todogrid', itemId: 'completed'}
            ]
        }

    ]
})