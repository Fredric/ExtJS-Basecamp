Ext.define('BASECAMP.view.grid.Uploads', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.uploadsgrid',
    store: 'Uploads',
    selModel: {
        type: 'rowmodel',
        mode: 'MULTI'
    },
    columns: [
        {header: '', dataIndex: 'name', width: 200, renderer: function (v) {
            return '<b>' + v + '</b>'
        }},
        {header: '', dataIndex: 'created_at'},
        {header: '', dataIndex: 'updated_at'}

    ]

});

