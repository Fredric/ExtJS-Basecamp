Ext.define('BASECAMP.model.Todo', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'float'},
        {name: 'content', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'archived', type: 'bool'},
        {name: 'created_at', type: 'date'},
        {name: 'updated_at', type: 'date'},
        {name: 'starred', type: 'bool'},
        {name: 'url', type: 'string'},
        {name: 'todolist_id', type: 'float'}

    ]
    /*
     ,
     proxy: {
     type: 'ajax',
     url: 'data/todos.php',
     reader: {
     type: 'json',
     root:'todos.remaining'
     }
     }
     */
});

