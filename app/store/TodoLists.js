Ext.define('BASECAMP.store.TodoLists', {
    extend: 'Ext.data.Store',
    model: 'BASECAMP.model.TodoList',
    sorters:[{property:'position', direction:'ASC'}],
    proxy: {
        type: 'ajax',
        url: 'data/todolists.php',
        reader: {
            type: 'json'
        }
    }
});
