Ext.define('BASECAMP.view.grid.Todos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.todogrid',
    store: 'Todos',
    selModel: {
        type: 'rowmodel',
        mode: 'MULTI'
    },
    columns: [
        {header: '', dataIndex: 'content', width: 200, renderer: function (v) {
            return '<b>' + v + '</b>'
        }},
        {header: '', dataIndex: 'description', flex: 1},
        {header: '', dataIndex: 'created_at'},
        {header: '', dataIndex: 'updated_at'},
        {header: '', dataIndex: 'starred'},
        {header: '', dataIndex: 'url'}
    ]

});

