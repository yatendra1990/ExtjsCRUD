Ext.define('app.view.UserGridView', {  //define UserGridView class
    extend: 'Ext.grid.Panel',   //extend grid.Panel class
    alias: 'widget.userGridView',  //define alias for direct access
    controller: 'tabController',  //use controller
    width: 700,
    height: 600,
    id: 'userGrid',
    itemId: 'userGrid',
    //autoScroll: true,
    initComponent: function () {  //define initComponent function
        Ext.apply(this, {    //
            store: Ext.create('app.store.TabStore'),  //use store by given its path
            columns: [            
            {
                text: 'Name',
                dataIndex: 'UserName',
                itemId: 'name'
            },
            {
                text: 'Father Name',
                dataIndex: 'FatherName',
                itemId: 'fatherName'
            },
            {
                text: 'DOB',
                dataIndex: 'DOB',
                itemId: 'dob',
            },
            {
                text: 'Address',
                dataIndex: 'Address',
                itemId: 'address'
            },
            {
                text: 'Contact No',
                dataIndex: 'Contact',
                itemId: 'contactNo'
            }
            ],
            listeners: {   //define listener amd call gridItemSelected function on item double click of user record in grid
                itemdblclick: 'gridItemSelected'
            }
        });
        this.callParent(arguments);
    }
});