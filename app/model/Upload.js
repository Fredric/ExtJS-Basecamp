Ext.define('BASECAMP.model.Upload', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'float'},
        {name: 'name', type: 'string'},
        {name: 'created_at', type: 'date'},
        {name: 'updated_at', type: 'date'}

    ]

});

