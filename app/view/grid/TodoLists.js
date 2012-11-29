Ext.define('BASECAMP.view.grid.TodoLists', {
    extend: 'Ext.view.View',
    alias: 'widget.todolistgrid',
    store: 'TodoLists',
    selModel: {
        type: 'rowmodel',
        mode: 'MULTI'
    },
    autoScroll:true,
    hideHeaders:true,
    iconCls:'todolist_16x16',
    title:'Todo Lists',
    overItemCls:'todolist-over',
    selectedItemCls:'todolist-selected',
    tpl : new Ext.XTemplate(
        '<tpl for=".">',
            '<div class="todolist-wrap">',
            '<div class="todolist-person"><img src="{creatoricon}"><span>{creator}</span></div>',
            '<span class="todolist-name">{name}</span><br>',
            '<span class= "todolist-description">{description}</span>',

            '</div>',

        '</tpl>'
    ),
    itemSelector:'div.todolist-wrap',
    initComponent:function(){

        this.callParent();
        this.on('select',function(view, record){
            this.fireEvent('onSelectTodoList', this, record);
        }, this)
    }


});

