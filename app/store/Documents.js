Ext.define('BASECAMP.store.Documents', {
    extend: 'Ext.data.Store',
    model: 'BASECAMP.model.Document',
    sorters: [
        {property: 'position', direction: 'ASC'}
    ],
    proxy: {
        type: 'ajax',
        url: 'data/documents.php',
        reader: {
            type: 'json'
        }
    }
});
