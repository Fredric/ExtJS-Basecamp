Ext.define('BASECAMP.model.Document', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'float'},
        {name: 'title', type: 'string'},
        {name: 'updated_at', type: 'date'},
        {name: 'created_at', type: 'date'}

    ]

});

