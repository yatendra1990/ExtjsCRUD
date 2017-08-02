Ext.define('app.view.RegistrationView', {//use class for
    extend: 'Ext.form.Panel',
    xtype: 'form-register',
    width: 500,
    padding: 10,
    scrollable: true,
    id: 'UsrFrm',
    layout: {   //define layout types
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    title: "User Form",
    layout: 'form',

    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 120,
        msgTarget: 'side'
    },

    //renderTo: document.body,//associate with body tag
    bodyPadding: 5,
    items: [{
        xtype: 'fieldset',
        title: 'User Info',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items: [
            { allowBlank: false, fieldLabel: 'User ID', name: 'UserID', emptyText: 'User ID' },
            { allowBlank: false, fieldLabel: 'Password', name: 'Password', emptyText: 'Password', inputType: 'password' },
            { allowBlank: false, fieldLabel: 'Verify', name: 'ConfirmPassword', emptyText: 'Confirm Password', inputType: 'password' }
        ]
    },
    {
        xtype: 'fieldset',
        title: 'Contact Information',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [
            { fieldLabel: 'First Name', emptyText: 'First Name', name: 'FirstName' },
            { fieldLabel: 'Last Name', emptyText: 'Last Name', name: 'LastName' },
            { fieldLabel: 'Company Name', emptyText: 'Company Name', name: 'CompanyName' },
            { fieldLabel: 'Email', emptyText: 'Email', name: 'EmailID', vtype: 'email' },
            { xtype: 'datefield', fieldLabel: 'Date Of Birth', name: 'DateOfBirth', allowBlank: false, maxValue: new Date() }
        ]
    },
    {
        xtype: 'button',
        text: 'SUBMIT',
        width: '40%',
        layout: { type: 'hbox', pack: 'center' },
        disabled: true,
        formBind:true,
        id: 'sbmtBtn',
        listeners: {            //Implement listener
            click: function () {
                var form = Ext.getCmp('UsrFrm');
                var values = form.getValues();//get values from form id
                console.log(values);

                Ext.Ajax.request({
                    url: '/Registration/Create',
                    method: 'POST',
                    jsonData:values,
                    timeout: 10000,
                    //params: form.getForm().getFieldValues(),
                    success: function () {
                        alert('success');
                    },
                    failure: function () {
                        alert('fail');
                    }

                });
            }
        }
    }
    ]
});