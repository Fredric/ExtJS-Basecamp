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
        this.control({
            'todolistgrid': {
                onSelectTodoList: {
                    fn: this.openTodo,
                    buffer: 300
                }
            }
        });
        this.application.on('onProjectSelect', this.initUI, this);
    },
    initUI: function (project) {
        this.getTodoListUI().setTitle('Todolists (' + project.data.todolists.remaining_count + ')');
        this.getTodoListUI().down('#completed').getStore().removeAll();
        this.getTodoListUI().down('#remaining').getStore().removeAll();
        this.loadTodoLists(project);
    },
    loadTodoLists: function (record) {
        this.getTodoListsStore().load({
            params: {
                project: record.get('id')
            }
        });
    },
    openTodo: function (view, record) {
        var t = Ext.ModelManager.getModel('BASECAMP.model.TodoList');
        t.load(record.get('id'), {
            params: {
                project: view.up('projectpanel').getProject().get('id')
            },
            success: function (todolist) {
                this.getTodoListUI().down('#remaining').reconfigure(todolist.remaining());
                this.getTodoListUI().down('#completed').reconfigure(todolist.completed());
            },
            scope: this
        });
    }
});
