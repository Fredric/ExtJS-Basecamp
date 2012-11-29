Ext.define('BASECAMP.view.window.Login',{
    extend:'Ext.Window',
    alias:'widget.login',
    bodyStyle:'padding:10px',
    items:[
        {itemId:'username', xtype:'textfield', fieldLabel:'User name'},
        {itemId:'password', xtype:'textfield', fieldLabel:'Password', inputType:'password'}
    ],
    buttons:[
        {text:'Login'}
    ]
})