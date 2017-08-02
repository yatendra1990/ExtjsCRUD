Ext.define('app.view.Home', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    //requires: [
    //    'App.view.main.MainController',
    //    'App.view.main.MainModel'
    //],
    width: 'auto',
    bodyPadding: 10,
    xtype: 'app-main',

    //controller: 'main',
    //viewModel: {
    //    type: 'main'
    //},

    layout: {
        type: 'column'
    },

    items: [{
        xtype: 'panel',
        
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 200,
        height: 600,
        split: true,
        tbar: [{
            text: 'Button',
            //handler: 'onClickButton'
        }]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        height: 600,
        items: [{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }],
    autoShow:true
});