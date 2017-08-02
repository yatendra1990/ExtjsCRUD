Ext.define('app.controller.LoginController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.LoginController',
    //requieres: ['app.model.LoginModel'],
    views: ['app.view.LoginView'],

    registerClick: function () {   //define save function on save button click
        alert('Clicked');
    },
    loginClick: function () { 
        var form = Ext.getCmp('loginForm');   //get component of userForm and assign value into form variable
        var values = form.getValues();   //call getValue function by association of form variable and assign into values variable
        Ext.Ajax.request({   //send Ajax request to MVC controller request
            url: './Login/Login',   //give path of method define in MVC controller
            method: 'POST',   //use POST method 
            jsonData: values,   //send values in the form of jsonData
            success: function (response) {   //define success function
                var result = Ext.decode(response.responseText);  //decode responseText return by jsondata assign into result variable
                if (result.success === true) {   //check condition if result.success is true
                    Ext.Msg.show({   //create msg show box
                        title: 'Login',  //define title
                        msg: result.message,  //asign result.message value into msg
                        buttons: Ext.Msg.OK,  //create response Ok button
                        icon: Ext.MessageBox.INFORMATION  //create message box and display information
                    });
                }
                else {
                    Ext.Msg.show({
                        title: 'Login',
                        msg: result.message,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }
            },
            failure: function () {
                Ext.Msg.show({
                    title: 'Login',
                    msg: result.message,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        })
    }

});