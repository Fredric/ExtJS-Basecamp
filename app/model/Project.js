Ext.define('BASECAMP.model.Project', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'float'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'archived', type: 'bool'},
        {name: 'created_at', type: 'date'},
        {name: 'updated_at', type: 'date'},
        {name: 'starred', type: 'bool'},
        {name: 'todolists', type: 'auto'},
        {name: 'accesses', type: 'auto'},
        {name: 'attachments', type: 'auto'},
        {name: 'calendar_events', type: 'auto'},
        {name: 'documents', type: 'auto'},
        {name: 'forwards', type: 'auto'},
        {name: 'topics', type: 'auto'}

    ],
    proxy: {
        type: 'ajax',
        url: 'data/project.php',
        reader: {
            type: 'json'
        }
    },
    isOpen:function(){
        debugger

    }

});