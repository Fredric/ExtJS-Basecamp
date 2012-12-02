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
                    fn: me.openTodo,
                    buffer: 300
                }
            }
        });
        me.application.on('onProjectSelect', me.initUI, me);
    },
    initUI: function (project) {
        var me = this;
        me.getTodoListUI().setTitle('Todolists (' + project.get('todolists').remaining_count + ')');
        me.getTodoListUI().down('#completed').getStore().removeAll();
        me.getTodoListUI().down('#remaining').getStore().removeAll();
        me.getTodoListsStore().load({
            params: {
                project: project.getId()
            }
        });
    },
    openTodo: function (view, record) {
        var me = this;
        Ext.ModelManager.getModel('BASECAMP.model.TodoList').load(record.getId(), {
            params: {
                project: me.application.getProject().getId()
            },
            success: function (todolist) {
                me.getTodoListUI().down('#remaining').reconfigure(todolist.remaining());
                me.getTodoListUI().down('#completed').reconfigure(todolist.completed());
            }
        });
    }
});
