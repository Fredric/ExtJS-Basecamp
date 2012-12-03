Ext.define('BASECAMP.view.window.TodoList', {
    extend: 'Ext.Window',
    height:300,
    width:800,
    modal:true,
    alias: 'widget.todolistmodal',
    closeAction:'hide',
    requires:['Ext.form.Panel'],
    bodyStyle: 'padding:10px',
    layout:'fit',
    initComponent: function () {
        var me = this;

        me.remaining = Ext.create('BASECAMP.view.grid.Todos',{title:'Remaining'});
        me.completed = Ext.create('BASECAMP.view.grid.Todos', {title:'Completed'});


        me.items = [

            {

                xtype:'tabpanel',
                items:[
                    me.remaining,
                    me.completed
                ]

            }
        ];

        me.buttons = [
            {
                text: 'Close',
                handler: function () {
                    me.close();
                }
            }
        ];

        me.callParent();

    }
});