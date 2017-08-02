Ext.define('app.store.TabStore',  //define TabStore class
    {
        extend: 'Ext.data.Store',   //extend data.Store
        model: 'app.model.TabModel',   //use model and give its path
        storeId: 'tabStore',
        autoLoad: true,
        //autoSync:true,
        proxy: {
            type: 'ajax',
            url: './Home/Show',   //give path of Show method in MVC controller
            reader: {
                type: 'json',
                root: 'userList'
            }
        }
    });