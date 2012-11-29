Ext.define('BASECAMP.view.grid.Topics', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.topicsgrid',
    store: 'Topics',
    selModel: {
        type: 'rowmodel',
        mode: 'MULTI'
    },
    columns: [
        {header: '', dataIndex: 'title', width: 200, renderer: function (v) {
            return '<b>' + v + '</b>'
        }},
        {header: '', dataIndex: 'excerpt', flex: 1},
        {header: '', dataIndex: 'created_at'},
        {header: '', dataIndex: 'updated_at'}

    ]

});

