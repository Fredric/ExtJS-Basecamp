Ext.define('BASECAMP.view.panel.Topics', {
    extend:'Ext.panel.Panel',
    alias:'widget.topics',
    layout:{
        type:'hbox',
        align:'stretch'
    },
    initComponent:function () {
        var me = this;

        me.modal = Ext.create('BASECAMP.view.window.Topics');

        me.items = [
            {
                flex:1,
                xtype:'topicsgrid'
            }
        ];

        me.callParent();
    }

});