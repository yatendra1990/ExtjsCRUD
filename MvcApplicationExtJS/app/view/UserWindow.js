Ext.define('app.view.UserWindow', {  //define UserWindow
    extend: 'Ext.window.Window',  //extend wimdow class
    requires: ['app.controller.TabController', 'app.view.UserGridView'],//requirement of class that use in this page
    controller: 'tabController',//use controller
    title: 'User Details',
    autoScroll: true,
    alias: 'widget.userWindow',//define alias
    height: 400,
    width: 600,
    id: 'popWindow',
    itemID: 'popWindow',
    items: [
    {
        xtype: 'userGridView',  //use grid view
    }
    ]
});
