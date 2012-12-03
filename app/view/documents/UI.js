Ext.define('BASECAMP.view.documents.UI', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.documents',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            flex: 1,
            xtype: 'documentsgrid'
        }


    ]
});