Ext.define('BASECAMP.store.Uploads', {
    extend: 'Ext.data.Store',
    model: 'BASECAMP.model.Upload',
    sorters: [
        {property: 'position', direction: 'ASC'}
    ],
    proxy: {
        type: 'ajax',
        url: 'data/uploads.php',
        reader: {
            type: 'json'
        }
    }
});
