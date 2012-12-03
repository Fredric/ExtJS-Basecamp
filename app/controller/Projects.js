Ext.define('BASECAMP.controller.Projects', {
    extend:'Ext.app.Controller',
    views:['project.Selector', 'project.UI'],
    models:['Project'],
    stores:['Projects'],
    refs:[
        {
            ref:'projectCombo',
            selector:'projectselector > combo'
        },
        {
            ref:'projectPanel',
            selector:'projectpanel'
        }
    ],
    init:function () {
        var me = this;

        me.control({
            'projectselector > combo':{
                select:{
                    fn:this.selectProjectByCombo
                },
                afterrender:function () {
                    this.getStore('Projects').load();
                }
            }
            /*
             ,
             'projectpanel': {
             tabchange: {
             fn: this.navigateToTab
             }
             }*/,
            'projectpanel tab':{
                click:{
                    fn:this.navigateToTab
                }
            }
        });
        me.getProjectsStore().on('load', function () {
            if (me.application.getProject() !== null) {
                me.getProjectCombo().setValue(me.application.getProject().getId());
            }
        });

    },
    navigateToTab:function (tabcard) {
        var me = this;
        Ext.util.History.add('/' + me.application.getProject().getId() + "/" + me.getProjectPanel().items.indexOf(tabcard.card), true, true);
    },
    /**
     * Sets Project by its id string. Returns the project object.
     * If project with this id already is set, it just returns the project object.
     * @param id
     * @param callBack
     * @param scope
     */
    setProjectById:function (id, callBack, scope) {
        var me = this,
            app = me.application;

        if (app.getProject() === null || app.getProject().getId() !== id) {
            Ext.ModelManager.getModel('BASECAMP.model.Project').load(id, {
                success:function (project) {
                    app.setProject(project);
                    callBack.call(scope, app.getProject());
                }
            });
        } else {
            callBack.call(scope, app.getProject());
        }
    },
    setTab:function (tab) {
        this.application.setTab(tab);
        this.getProjectPanel().layout.setActiveItem(tab);

    },
    selectProjectByCombo:function (combo, records) {
        var p = this.getProjectPanel();
        var s = p.items.indexOf(p.getLayout().getActiveItem());
        Ext.util.History.add('/' + records[0].get('id') + "/" + s, true, true);
    }
});
