Ext.define('Overrides.data.reader.Reader', {
    override: 'Ext.data.reader.Reader',

    getAssociatedDataRoot: function (data, associationName) {
        Ext.each(associationName.split('.'), function (p) {
            data = data[p] || data;
        });
        return data;
    }


});
