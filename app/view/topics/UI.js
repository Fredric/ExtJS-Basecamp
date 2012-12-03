Ext.define('BASECAMP.view.topics.UI', {
    extend:'Ext.panel.Panel',
    alias:'widget.topics',
    layout:{
        type:'hbox',
        align:'stretch'
    },
    initComponent:function () {
        var me = this;

        me.modal = Ext.create('BASECAMP.view.topics.Window');

        me.items = [
            {
                flex:1,
                xtype:'topicsgrid'
            }
        ];

        me.callParent();
    }

});