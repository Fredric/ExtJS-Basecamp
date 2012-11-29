Ext.define('BASECAMP.model.Name', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'float'},
        {name: 'name', type: 'string'}

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

