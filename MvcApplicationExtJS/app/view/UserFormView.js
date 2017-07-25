Ext.define('app.view.UserFormView',    //define UserFormView class
{
    extend: 'Ext.form.Panel',   //extend  form.Panel class
    requires: ['app.controller.TabController', 'app.view.UserWindow'], //define requirements
    border: true,
    padding: 10,
    margin: '5 5 5 5',
    id: 'userForm',
    title: 'User Form',
    layout:   //define layout
    {
        type: 'anchor',
        pack: 'center',
    },
    anchor: '250 250',
    controller: 'tabController',
    alias: 'widget.userFormView',//define alias for direct accessing in other form
    items: [
        {
            xtype: 'hiddenfield',  //use hiddenfield for direct accessing of data without display
            name: 'ID',
            itemId: 'ID',
        },
    {
        xtype: 'trigger',  //use trigger for browse user record in grid and also use as a textfield
        fieldLabel: 'Name',
        name: 'UserName',
        itemId: 'txtName',

        triggerCls: 'x-form-search-trigger', //for browse symbol
        onTriggerClick: function () {   //define function on trigger click
            var window = Ext.create('app.view.UserWindow');  //create popup window
            window.show();  //call show mwthod
        }
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Father name',
        name: 'FatherName',
        maskRe: /[^#$%&*0-9^]/,  //validation tool for  write only alphabets in textfield
        itemId: 'txtfatherName',
    },
    {
        xtype: 'datefield',
        fieldLabel: 'D.O.B',
        name: 'DOB',
        flex:1,
        format: 'd-m-Y',
        altFormats: 'dmY|d m Y',
        submitFormat: 'd-m-Y',
        renderer: Ext.util.Format.dateRenderer('d-m-Y'),
        value: new Date(),
        itemId: 'dtfield'
    },
    {
        xtype: 'textarea',
        fieldLabel: 'Address',
        name: 'Address',
        itemId: 'txtAreaAddress',
        reference: 'txtAreaAddress'
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Contact Number',
        name: 'Contact',
        maskRe: /[^a-zA-Z!$%^&*()_+=-~^]/, //validation tool for insert only numeric data in textfield
        itemId: 'nmbrFldContactNo'
    },
    {
        xtype: 'container', // use container for more than one buttons as your requirement.Its not mandetory thats you use container for buttons or other components
        layout: { type: 'hbox', pack: 'center' },
        width: '100%',
        //margin:'5 5 5 5',
        items: [
        {
            xtype: 'button',
            text: 'Submit',
            width: '25%',
            layout: '',
            itemId: 'saveBtnId',
            listeners: //implement listener for call function of controller
                {
                    click: 'saveClick' //call method of controller on button click
                }
        },
        {
            xtype: 'button',
            name: 'delete',
            width: '25%',
            itemId: 'deleteBtnId',
            text: 'Delete',
            listeners: //implement listener for call function of controller
                {
                    click: 'deleteClick' //call method of controller on button click
                }
        },
        {
            xtype: 'button',
            name: 'update',
            width: '25%',
            itemId: 'updateBtnId',
            text: 'Update',
            listeners: //implement listener for call function of controller
                {
                    click: 'updateClick' //call method of controller on button click
                }
        }
        ,
        {
            xtype: 'button',
            name: 'Clear',
            width: '25%',
            itemId: 'ClearBtnId',
            text: 'Clear',
            Handler: {
                click: function () {
                    this.getForm().clearForm();
                    alert();
                }
            }
        }
        ]
    }
    ]
});