Ext.define('BASECAMP.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'float'},
        {name: 'identity_id', type: 'float'},
        {name: 'name', type: 'string'},
        {name: 'updated_at', type: 'date'},
        {name: 'email_address', type: 'string'},
        {name: 'created at', type: 'date'},
        {name: 'avatar_url', type: 'string'},
        {name: 'admin', type: 'bool'},
        {name: 'assigned_todos_count', type: 'float', mapping:'assigned_todos.count'},
        {name: 'events_count', type: 'float', mapping:'events.count'}
    ]

});

