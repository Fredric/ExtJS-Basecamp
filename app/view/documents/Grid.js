Ext.define('BASECAMP.view.documents.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.documentsgrid',
    store: 'Documents',
    selModel: {
        type: 'rowmodel',
        mode: 'MULTI'
    },
    columns: [
        {header: '', dataIndex: 'title', width: 200, renderer: function (v) {
            return '<b>' + v + '</b>';
        }},
        {header: '', dataIndex: 'created_at'},
        {header: '', dataIndex: 'updated_at'}

    ]

});

