
Ext.application({
    extend: 'Ext.app.Application',   //extend app.Application class
    requires: ['Ext.container.Viewport',
        'app.view.CardLayoutFormView',
        'app.view.LoginView'],   // Define your requirements thats you call in this file
    name: 'app',
    
    launch: function () {
      
        Ext.create('app.view.CardLayoutFormView');
    }
});