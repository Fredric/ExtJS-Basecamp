Ext.define('BASECAMP.view.panel.Topics', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.topics',
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            flex:1,
            xtype: 'topicsgrid'
        }


    ]
});