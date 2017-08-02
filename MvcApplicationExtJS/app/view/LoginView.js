Ext.define('app.view.LoginView', {
    extend: 'Ext.form.Panel',

    xtype: 'form-login',
    //requires: ['app.controller.LoginController'],
    title: 'Login',
    margin: '5 5 5 5',
    id: 'loginForm',
    frame: true,
    width: 320,
    bodyPadding: 10,
   controller: 'LoginController',
    //renderTo: Ext.getBody(),
    defaultType: 'textfield',

    items: [{
        allowBlank: false,
        fieldLabel: 'User ID',
        name: 'UserID',
        id: 'UserID',
        emptyText: 'User ID'
    }, {
        allowBlank: false,
        fieldLabel: 'Password',
        name: 'password',
        id: 'password',
        emptyText: 'Password',
        inputType: 'password'
    },
    {
        xtype: 'container', // use container for more than one buttons as your requirement.Its not mandetory thats you use container for buttons or other components
        layout: { type: 'hbox', pack: 'center' },
        width: '100%',
        margin: '5 5 5 5',
        items: [
        {
            xtype: 'button',
            text: 'Clear',
            margin: '5 5 5 5',
            name: 'clear',
            width: '25%',
            itemId: 'regBtnId',
            listeners: //implement listener for call function of controller
                {
                    click: function () {   //define save function on save button click
                        var userID = Ext.ComponentQuery.query("#UserID")[0];   //get component by its itemId and assign into address variable
                        userID.setValue('');

                        var pwd = Ext.ComponentQuery.query("#password")[0];   //get component by its itemId and assign into address variable
                        pwd.setValue('');
                    } //call method of controller on button click
                }
        },
        {
            xtype: 'button',
            name: 'login',
            margin: '5 5 5 5',
            width: '25%',
            itemId: 'loginBtnId',
            text: 'Login',
            listeners: //implement listener for call function of controller
                {
                    click: function () {
                        var form = Ext.getCmp('loginForm');
                        var values = form.getValues();//get values from form id
                        console.log(values);

                        Ext.Ajax.request({
                            url: '/Login/LoginUser',
                            method: 'POST',
                            timeout: 10000,
                            params: form.getForm().getFieldValues(),
                            success: function (response) {   //define success function
                                var result = Ext.decode(response.responseText);  //decode responseText return by jsondata assign into result variable
                                if (result.success === true) {   //check condition if result.success is true
                                    Ext.Msg.show({   //create msg show box
                                        title: 'User Login',  //define title
                                        msg: result.message,  //asign result.message value into msg
                                        buttons: Ext.Msg.OK,  //create response Ok button
                                        icon: Ext.MessageBox.INFORMATION  //create message box and display information
                                    });
                                    //this.getView().destroy();
                                    //Ext.widget('app-main');
                                }
                                else {
                                    Ext.Msg.show({
                                        title: 'User Login',
                                        msg: result.message,
                                        buttons: Ext.Msg.OK,
                                        icon: Ext.MessageBox.ERROR
                                    });
                                }
                            },
                            failure: function () {
                                alert('Login Fail.');
                            }

                        });
                    }
                }
        }]
    }

    ]
});