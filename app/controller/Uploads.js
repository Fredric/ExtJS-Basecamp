Ext.define('BASECAMP.controller.Uploads', {
    extend: 'Ext.app.Controller',
    views: ['grid.Uploads', 'panel.Uploads'],
    models: ['Upload'],
    stores: ['Uploads'],
    refs: [
        {
            ref: 'uploadsUI',
            selector: 'uploads'
        }
    ],
    init: function () {
        this.application.on('onProjectSelect', this.initUI, this);
    },
    initUI: function (project) {
        this.getUploadsUI().setTitle('Files (' + project.data.attachments.count + ')');
        this.loadUploads(project);
    },
    loadUploads: function (project) {
        this.getUploadsStore().load({
            params: {
                project: project.get('id')
            }
        });
    }
});
