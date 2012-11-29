Ext.define('BASECAMP.store.Topics', {
    extend: 'Ext.data.Store',
    model: 'BASECAMP.model.Topic',
    sorters: [
        {property: 'position', direction: 'ASC'}
    ],
    proxy: {
        type: 'ajax',
        url: 'data/topics.php',
        reader: {
            type: 'json'
        }
    }
});
