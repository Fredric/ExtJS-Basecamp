Ext.define('BASECAMP.view.panel.Project', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.projectpanel',
    config: {
        project: null
    },
    activeTab: 4,
    plain: true,
    items: [
        {
            title: 'Topics',
            xtype: 'topics'

        },
        {
            title: 'Todos',
            xtype: 'todolists'
        },
        {
            title: 'Files',
            xtype: 'uploads'
        },
        {
            title: 'Documents',
            xtype: 'documents'
        },
        {
            title: 'Dates'
        }
    ]
});