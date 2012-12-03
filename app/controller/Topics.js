Ext.define('BASECAMP.controller.Topics', {
    extend:'Abstract.controller.Navigation',
    views:['topics.Grid', 'topics.UI', 'topics.Window'],
    models:['Topic'],
    stores:['Topics'],
    refs:[
        {
            ref:'UI',
            selector:'topics'
        }
    ],
    init:function () {
        var me = this;
        me.control({
            'topicsgrid':{
                onSelectTopic:{
                    fn:me.navigateOpenModal,
                    buffer:300
                }
            },
            'topicsmodal':{
                hide:me.navigateCloseModal
            }

        });

        me.application.on('onProjectSelect', this.initUI, this);
    },
    initUI:function (project) {
        this.getUI().setTitle('Topics (' + project.get('topics').count + ')');
        this.loadTopics(project);
    },
    loadTopics:function (project) {
        this.getTopicsStore().load({
            params:{
                project:project.get('id')
            }
        });
    },
    openModal:function (id) {
        var me = this;
        me.getUI().modal.show();

    },
    closeModal:function () {
        var me = this;
        me.getUI().modal.close();

    }
});
