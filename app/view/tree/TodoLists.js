Ext.define('BASECAMP.view.tree.TodoLists', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.todolisttree',

    initComponent:function(){
        this.store = Ext.create('Ext.data.TreeStore',{
            fields:[
                {name:'name', type:'string'},
                {name:'text', type:'string', convert:function(v, record){
                    return record.get('name')
                }}


            ],
            defaultRootProperty:'assigned_todos',
            proxy: {
                    type: 'ajax',
                    url: 'data/todolists.php',
                    reader: {
                        type: 'json'
                    }
                }
        })

        this.callParent()
    }

});


