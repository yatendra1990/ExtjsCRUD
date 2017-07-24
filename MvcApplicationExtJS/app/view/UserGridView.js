Ext.define('app.view.UserGridView', {  //define UserGridView class
    extend: 'Ext.grid.Panel',   //extend grid.Panel class
    alias: 'widget.userGridView',  //define alias for direct access
    controller: 'tabController',  //use controller
    
    height: 600,
    id: 'userGrid',
    itemId: 'userGrid',
    columnLines: true,
    selModel: 'rowmodel',
    viewConfig:
    {
        stripeRows: true
    },
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 1
    }, 
    //autoScroll: true,
    initComponent: function () {  //define initComponent function
        Ext.apply(this, {    //
            store: Ext.create('app.store.TabStore'),  //use store by given its path
            columns: [
                {
                    text: 'ID',
                    dataIndex: 'ID',
                    itemId:'ID'
                },
            {
                text: 'Name',
                dataIndex: 'UserName',
                itemId: 'name',
                flex: 1,
                editor: 'textfield'
            },
            {
                text: 'Father Name',
                dataIndex: 'FatherName',
                itemId: 'fatherName',
                editor: 'textfield'
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