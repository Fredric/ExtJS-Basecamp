Ext.define('BASECAMP.controller.Navigation', {
    extend: 'Ext.app.Controller',

    initPaths: function () {
        var me = this;

         //Navigation opening a project
        Path.map("#/:project/:tab").to(function () {
            me.getController('Projects').setProjectById(parseFloat(this.params.project), function () {
                me.getController('Projects').setTab(parseFloat(this.params.tab));
            }, this);
        });

        //Navigation opening a modal Window
        Path.map("#/:project/:tab/:controller/:id").to(function () {
            me.getController('Projects').setProjectById(parseFloat(this.params.project), function () {
                me.getController('Projects').setTab(parseFloat(this.params.tab));
                me.getController(this.params.controller).openModal(this.params.id);
            }, this);
        }).exit(function(){
                me.getController(this.params.controller).closeModal();
            });


        Path.root('#');
        Path.rescue(function () {

        });
        Path.listen();
    }



});