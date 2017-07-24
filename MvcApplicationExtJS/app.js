Ext.application({
    extend: 'Ext.app.Application',   //extend app.Application class
    requires: ['Ext.container.Viewport', 'app.view.TabView'],   // Define your requirements thats you call in this file
    name: 'app',
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'anchor',
            items: [{
                xtype: 'TabView'  //Define your type of component,Its define in alias of TabView class
            }]
        });
    }
});