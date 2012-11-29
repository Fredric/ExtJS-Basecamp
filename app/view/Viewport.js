Ext.define('BASECAMP.view.Viewport', {
    extend: 'Ext.Viewport',
    layout: {
        type: 'border'
    },
    config: {
        items: [
            {
                region: 'north',
                xtype: 'projectselector'
            },
            {
                xtype: 'panel',
                region: 'center',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'projectpanel',
                        margins: '10 10 10 10',
                        flex: 1
                    }

                ]
            }

        ]
    }


})
;