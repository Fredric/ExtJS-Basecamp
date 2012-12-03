Ext.define('BASECAMP.view.topics.Window', {
    extend:'Ext.Window',
    height:300,
    width:800,
    modal:true,
    alias:'widget.topicsmodal',
    closeAction:'hide',
    requires:['Ext.form.Panel'],
    bodyStyle:'padding:10px',
    layout:'fit',
    initComponent:function () {
        var me = this;



        me.buttons = [
            {
                text:'Close',
                handler:function () {
                    me.close();
                }
            }
        ];

        me.callParent();

    }
});