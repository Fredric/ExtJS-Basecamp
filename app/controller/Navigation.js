Ext.define('BASECAMP.controller.Navigation', {
    extend: 'Ext.app.Controller',

    initPaths: function () {
        var me = this;
        Path.map("#/:project/:tab").to(function () {

            me.getController('Projects').setProjectById(this.params.project, function () {
                me.getController('Projects').setTab(parseFloat(this.params.tab));
            }, this);
        });

        Path.root('#');
        Path.rescue(function () {

        });
        Path.listen();
    }



});