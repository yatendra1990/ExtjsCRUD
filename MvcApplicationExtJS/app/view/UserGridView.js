Ext.define('app.view.UserGridView', {  //define UserGridView class
    extend: 'Ext.grid.Panel',   //extend grid.Panel class
    alias: 'widget.userGridView',  //define alias for direct access
    controller: 'tabController',  //use controller
    
    height: '100%',
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
    autoScroll: true,
    initComponent: function () {  //define initComponent function
        Ext.apply(this, {    //
            store: Ext.create('app.store.TabStore'),  //use store by given its path
            columns: [
                {
                    text: 'ID',
                    dataIndex: 'ID',
                    itemId: 'ID',
                    width:'20px'
                },
            {
                text: 'Name',
                dataIndex: 'UserName',
                itemId: 'name',
                //flex: 1,
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
                editor: {
                    xtype: 'datefield',
                    allowBlank: false,
                    format: 'd-m-Y',
                    
                }
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
                itemdblclick: 'gridItemSelected',
                canceledit: function (editor, e, eOpts) {//Cancel the delete add the line
                    e.store.reset(e.record);
                },
                edit: function (editor, e, eOpts) {//Click the update event, AJAX submitted to dynamic pages saved
            Ext.Ajax.request({
                url: './Home/Update', //Dynamic page address
                method:'POST',
                params: e.record.getData(),////////
                requestcomplete: function (conn, response, options, eOpts) {
                    //Dynamic page successfully saved output 1 on the line, not the output of other content
                    var result=Ext.decode(response.responseText);
                    if (result.success === true) {
                        e.record.commit();
                        alert(result.message);//Commit changes, or modified value cell will display a red tips
                    }
                    else alert('Failed to save the \n' + response.responseText);
                },
                requestexception: function (conn, response, options, eOpts) { alert('Dynamic pages have a problem！\n' + response.responseText); }
            });
        }
            }
        });
        this.callParent(arguments);
    }
});