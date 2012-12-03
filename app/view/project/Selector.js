Ext.define('BASECAMP.view.project.Selector', {
    extend: 'Ext.Panel',
    alias: 'widget.projectselector',
    requires: ['Ext.form.field.ComboBox'],
    layout: {
        type: 'hbox'
    },
    items: [
        {
            margins: '10 10 10 10',
            width: 400,
            xtype: 'combo',
            store: 'Projects',
            displayField: 'name',
            valueField: 'id',
            listConfig: {
                itemTpl: '<b>{name}</b><br>{description}'
            }
        }

    ]
});
