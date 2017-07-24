Ext.define('app.controller.TabController', {  //define TabController class
    extend: 'Ext.app.ViewController',  //extend app.ViewController class
    alias: 'controller.tabController',   //define alias
    requires: ['app.model.TabModel'],   //define requirement of TabModel class
    views: ['TabView', 'userGridView', 'userFormView', 'app.view.UserWindow'],  //define views that use in this form

    saveClick: function () {   //define save function on save button click
        var form = Ext.getCmp('userForm');   //get component of userForm and assign value into form variable
        var values = form.getValues();   //call getValue function by association of form variable and assign into values variable
        Ext.Ajax.request({   //send Ajax request to MVC controller request
            url: './Home/Save',   //give path of method define in MVC controller
            method: 'POST',   //use POST method 
            jsonData: values,   //send values in the form of jsonData
            success: function (response) {   //define success function
                var result = Ext.decode(response.responseText);  //decode responseText return by jsondata assign into result variable
                if (result.success === true) {   //check condition if result.success is true
                    Ext.Msg.show({   //create msg show box
                        title: 'User',  //define title
                        msg: result.message,  //asign result.message value into msg
                        buttons: Ext.Msg.OK,  //create response Ok button
                        icon: Ext.MessageBox.INFORMATION  //create message box and display information
                    });
                }
                else {
                    Ext.Msg.show({
                        title: 'User',
                        msg: result.message,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }
            },
            failure: function () {
                Ext.Msg.show({
                    title: 'Record not inserted',
                    msg: result.message,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    },
    gridItemSelected: function (record, model, div, e) {  //define method of gridItemSelected function thats call on double click of grid row
        var address = Ext.ComponentQuery.query("#txtAreaAddress")[0];   //get component by its itemId and assign into address variable
        address.setValue(model.data.Address);   //get value by grid view model variable associate with data and dataIndex(Address) and set value into textfield
        var name = Ext.ComponentQuery.query("#txtName")[0];  //get component by its itemId and assign into name variable
        name.setValue(model.data.UserName);  //get value by grid view model variable associate with data and dataIndex and set value into textfield
        var fatherName = Ext.ComponentQuery.query("#txtfatherName")[0];  //get component by its itemId and assign into fatherName variable
        fatherName.setValue(model.data.FatherName);  //get value by grid view model variable associate with data and dataIndex and set value into textfield
        var dob = Ext.ComponentQuery.query("#dtfield")[0];  //get component by its itemId and assign into dob variable
        dob.setValue(model.data.DOB);  //get value by grid view model variable associate with data and dataIndex and set value into textfield
        alert(model.data.DOB);
        var contactNo = Ext.ComponentQuery.query("#nmbrFldContactNo")[0];  //get component by its itemId and assign into contactNo variable
        contactNo.setValue(model.data.Contact);  //get value by grid view model variable associate with data and dataIndex and set value into textfield
        var id = Ext.ComponentQuery.query("#ID")[0];  //get component by its itemId and assign into id variable
        id.setValue(model.data.ID);  //get value by grid view model variable associate with data and dataIndex and set value into textfield
        //var grid = Ext.ComponentQuery.query("#userGrid")[0];
        //grid.setVisible(false);
        //var popWindow = Ext.ComponentQuery.query('#popWindow')[0];
        //popWindow.hide();
        Ext.getCmp('popWindow').destroy();  //get popup window by its id and destroy window when record selected
    },
    updateClick: function () {  //updateClick function call on update button click
        var form = Ext.getCmp('userForm');   //get component of userForm and assign value into form variable
        var values = form.getValues();  //call getValue function by association of form variable and assign into values variable
        Ext.Ajax.request({     //send Ajax request to MVC controller request
            url: './Home/Update',   //give path of method define in MVC controller
            method: 'POST',     //use POST method 
            jsonData: values,   //send values in the form of jsonData
            success: function (response) {      //define success function
                var result = Ext.decode(response.responseText);
                if (result.success === true) {
                    Ext.Msg.show({
                        title: 'User',
                        msg: result.message,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.INFORMATION
                    });
                }
                else {
                    Ext.Msg.show({
                        title: 'User',
                        msg: result.message,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }
            },
            failure: function () {    //define failure function on response of mvc controller
                Ext.Msg.show({
                    title: 'Record not Updated',
                    msg: result.message,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    },
    deleteClick: function () {    //define deleteClick function on delete button click
        var form = Ext.getCmp('userForm');
        var values = form.getValues();
        Ext.Ajax.request({
            url: './Home/Delete',
            method: 'Delete',
            jsonData: values,
            success: function (response) {
                var result = Ext.decode(response.responseText);
                if (result.success === true) {
                    Ext.Msg.show({
                        title: 'User',
                        msg: result.message,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.INFORMATION
                    });
                }
                else {
                    Ext.Msg.show({
                        title: 'User',
                        msg: result.message,
                        buttons: Ext.Msg.OK,
                        icon: Ext.MessageBox.ERROR
                    });
                }
            },
            failure: function () {
                Ext.Msg.show({
                    title: 'Record not deleted',
                    msg: result.message,
                    buttons: Ext.Msg.OK,
                    icon: Ext.MessageBox.ERROR
                });
            }
        });
    }

});