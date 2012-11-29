Ext.define('BASECAMP.controller.Projects', {
    extend: 'Ext.app.Controller',
    views: ['panel.ProjectSelector', 'panel.Project'],
    models: ['Project'],
    stores: ['Projects'],
    refs: [
        {
            ref: 'projectCombo',
            selector: 'projectselector > combo'
        },
        {
            ref: 'projectPanel',
            selector: 'projectpanel'
        }
    ],
    init: function () {
        this.control({
            'projectselector > combo': {
                select: {
                    fn: this.selectProject
                },
                afterrender:function(){
                   this.getStore('Projects').load();
                }
            },
            'projectpanel': {
                tabchange: {
                    fn: this.navigateToTab
                }
            }
        });
        this.getProjectsStore().on('load', function () {
            if (this.getProjectPanel() && this.getProjectPanel().getProject()) {
                this.getProjectCombo().setValue(this.getProjectPanel().getProject().get('id'))
            }
        }, this)
    },
    navigateToTab: function (tabcard, newItem) {
        var p = this.getProjectPanel();
        Ext.util.History.add('/' + p.getProject().get('id') + "/" + p.items.indexOf(newItem), true, true);
    },
    setProjectById: function (id, callBack, scope) {
        if (!this.getProjectPanel() || !this.getProjectPanel().getProject() || this.getProjectPanel().getProject().get('id') != id) {
            var p = Ext.ModelManager.getModel('BASECAMP.model.Project');
            p.load(id, {
                success: function (project) {
                    this.getProjectPanel().setProject(project)
                    this.application.fireEvent('onProjectSelect', project)
                    callBack.call(scope, project);
                },
                scope: this
            });
        } else {
            callBack.call(scope, this.getProjectPanel().getProject());
        }
    },
    setTab: function (tab) {
        this.getProjectPanel().layout.setActiveItem(tab)
    },
    selectProject: function (combo, records) {
        var p = this.getProjectPanel();
        var s = p.items.indexOf(p.getLayout().getActiveItem())
        Ext.util.History.add('/' + records[0].get('id') + "/" + s, true, true);
    }
});
