Ext.define('BASECAMP.controller.TodoLists', {
    extend: 'Abstract.controller.Navigation',
    views: ['todolists.Grid', 'todos.Grid', 'todolists.UI','todolists.Window'],
    models: ['TodoList', 'Todo', 'Name'],
    stores: ['TodoLists', 'Todos'],
    refs: [
        {
            ref: 'UI',
            selector: 'todolists'
        }
    ],
    init: function () {
        var me = this;
        me.control({
            'todolistgrid': {
                onSelectTodoList: {
                    fn: me.navigateOpenModal,
                    buffer: 300
                }
            },
            'todolistmodal':{
                hide:me.navigateCloseModal
            }

        });

        me.application.on('onProjectSelect', me.initUI, me);

    },
    initUI: function (project) {
        var me = this;
        me.getUI().setTitle('Todolists (' + project.get('todolists').remaining_count + ')');
        me.getTodoListsStore().load({
            params: {
                project: project.getId()
            }
        });
    },

    openModal: function (id) {
        var me = this;
        me.getUI().modal.show();
        Ext.ModelManager.getModel('BASECAMP.model.TodoList').load(id, {
            params: {
                project: me.application.getProject().getId()
            },
            success: function (todolist) {
                me.getUI().modal.remaining.reconfigure(todolist.remaining());
                me.getUI().modal.completed.reconfigure(todolist.completed());
            }
        });
    },
    closeModal:function(){
        var me = this;
        me.getUI().modal.close();

    }
});
