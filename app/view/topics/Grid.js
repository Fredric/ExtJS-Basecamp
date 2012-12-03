Ext.define('BASECAMP.view.topics.Grid', {
    extend:'Ext.grid.Panel',
    alias:'widget.topicsgrid',
    store:'Topics',
    selModel:{
        type:'rowmodel',
        mode:'MULTI'
    },
    columns:[
        {header:'', dataIndex:'title', width:200, renderer:function (v) {
            return '<b>' + v + '</b>';
        }},
        {header:'', dataIndex:'excerpt', flex:1},
        {header:'', dataIndex:'created_at'},
        {header:'', dataIndex:'updated_at'}

    ],
    initComponent:function () {

        this.callParent();
        this.on('itemclick', function (view, record) {
            this.fireEvent('onSelectTopic', this, record);
        }, this);
    }

});

