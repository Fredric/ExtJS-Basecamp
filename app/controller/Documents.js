Ext.define('BASECAMP.controller.Documents', {
    extend: 'Ext.app.Controller',
    views: ['grid.Documents', 'panel.Documents'],
    models: ['Document'],
    stores: ['Documents'],
    refs: [
        {
            ref: 'documentsUI',
            selector: 'documents'
        }
    ],
    init: function () {
        this.application.on('onProjectSelect', this.initUI, this);
    },
    initUI: function (project) {
        this.getDocumentsUI().setTitle('Documents (' + project.get('documents').count + ')');
        this.loadDocuments(project);
    },
    loadDocuments: function (project) {
        this.getDocumentsStore().load({
            params: {
                project: project.get('id')
            }
        });
    }
});
