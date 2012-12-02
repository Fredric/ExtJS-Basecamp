Ext.define('BASECAMP.controller.TodoLists', {
    extend: 'Ext.app.Controller',
    views: ['grid.TodoLists', 'grid.Todos', 'panel.TodoLists'],
    models: ['TodoList', 'Todo', 'Name'],
    stores: ['TodoLists', 'Todos'],
    refs: [
        {
            ref: 'todoListUI',
            selector: 'todolists'
        }
    ],
    init: function () {
        var me = this;
        me.control({
            'todolistgrid': {
                onSelectTodoList: {
                    fn: me.navigateToModal,
                    buffer: 300
                }
            }
        });
        me.application.on('onProjectSelect', me.initUI, me);
    },
    initUI: function (project) {
        var me = this;
        me.getTodoListUI().setTitle('Todolists (' + project.get('todolists').remaining_count + ')');
        //me.getTodoListUI().down('#completed').getStore().removeAll();
        //me.getTodoListUI().down('#remaining').getStore().removeAll();
        me.getTodoListsStore().load({
            params: {
                project: project.getId()
            }
        });
    },
    navigateToModal:function(view, record){
        var app = this.application;
        Ext.util.History.add('/' + app.getProject().getId() + "/" + app.getTab() + "/todolist/" + record.getId(), true, true);

    },
    openTodo: function (todolist_id) {
        var me = this;
        me.getTodoListUI().modal.show();
        Ext.ModelManager.getModel('BASECAMP.model.TodoList').load(todolist_id, {
            params: {
                project: me.application.getProject().getId()
            },
            success: function (todolist) {
                me.getTodoListUI().modal.remaining.reconfigure(todolist.remaining());
                me.getTodoListUI().modal.completed.reconfigure(todolist.completed());

            }
        });
    },

    closeTodo:function(){
        me.getTodoListUI().modal.close();

    }
});
