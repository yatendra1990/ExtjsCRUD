var navigate = function (panel, direction) {
    // This routine could contain business logic required to manage the navigation steps.
    // It would call setActiveItem as needed, manage navigation button state, handle any
    // branching logic that might be required, handle alternate actions like cancellation
    // or finalization, etc.  A complete wizard implementation could get pretty
    // sophisticated depending on the complexity required, and should probably be
    // done as a subclass of CardLayout in a real-world implementation.
    var layout = panel.getLayout();
    layout[direction]();
    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
    Ext.getCmp('move-next').setDisabled(!layout.getNext());
};

Ext.define('app.view.CardLayoutFormView', {
    extend: 'Ext.panel.Panel',
    title: 'Card Layout Example',
    requires: ['app.view.RegistrationView',
        'Ext.container.Viewport',
        'app.view.LoginView','app.view.Home'],
    width: 'auto',
    height: 600,
    scrollable: true,
    //controller: 'LoginController',
    layout: 'card',
    bodyPadding: '15px',
    defaults: { border: false },
    bbar: [{
        id: 'move-prev',
        text: 'Login',
        handler: function (btn) {
            navigate(btn.up("panel"), "prev");
        },
        disabled: true
    },
        {
            id: 'move-next',
            text: 'Register',
            handler: function (btn) {
                navigate(btn.up("panel"), "next");
            }
        }],
    items: [{
        id: 'card1',
        layout: 'anchor',
        items: [{
            xtype: 'form-login'  //Define your type of component,Its define in alias of TabView class
        }]

    },
    {
        id: 'card2',
        layout: 'anchor',
        items: [{
            xtype: 'form-register'  //Define your type of component,Its define in alias of TabView class
        }],
        hidden: true
    }
    ],
    renderTo: Ext.getBody()
})