Ext.define('app.view.TabView', {
    extend: 'Ext.tab.Panel',  //extend tab.Panel class
    requires: ['app.controller.TabController', 'app.view.UserGridView', 'app.view.UserFormView'],  //define requirement of classes
    alias: 'widget.TabView',
    width: 500,
    height: 400,
    //layout: { type: 'absolute', align: 'middle', pack: 'center' },
    bodyPadding: 15,
    controller: 'tabController',  //use controller
    initComponent: function () {
        Ext.apply(this, {
            items: [   //Items of tabview
            {
                title: 'Testing Tab 1',
                width: '100%',
                height: 300,
                margin: '5 5 5 5',
                items: [
                {
                    xtype: 'userFormView'  //use userFormView by define alias in userFormView
                }
                ]
            },
            //{
            //    title: 'Testing Tab 2',
            //    items: [
            //    {
            //        xtype: 'userGridView'
            //    }
            //    ],
            //},
            {
                title: 'Testing Tab 2',    //Third tab display details
                html: 'Its a example of card view with tabs,thats provide multiple task at one place using multiple page accessed by tabs',
            }
            ]
        });
        this.callParent(arguments);
    }
});