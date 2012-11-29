Ext.define('BASECAMP.controller.Topics', {
    extend: 'Ext.app.Controller',
    views: ['grid.Topics', 'panel.Topics'],
    models: ['Topic'],
    stores: ['Topics'],
    refs: [
        {
            ref: 'topicsUI',
            selector: 'topics'
        }
    ],
    init: function () {
        this.application.on('onProjectSelect', this.initUI, this);
    },
    initUI: function (project) {
        this.getTopicsUI().setTitle('Topics (' + project.data.topics.count + ')')
        this.loadTopics(project)
    },
    loadTopics: function (project) {
        this.getTopicsStore().load({
            params: {
                project: project.get('id')
            }
        })
    }
});
