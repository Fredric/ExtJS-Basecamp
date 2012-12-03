Ext.define('Abstract.controller.Navigation', {
    extend: 'Ext.app.Controller',

    navigateOpenModal:function(view, record){
        var app = this.application;
        Ext.util.History.add('/' + app.getProject().getId() + "/" + app.getTab() + "/"+this.id+"/" + record.getId(), true, true);
    },
    navigateCloseModal:function(){
        var app = this.application;
        Ext.util.History.add('/' + app.getProject().getId() + "/" + app.getTab() , true, true);
    }

});

