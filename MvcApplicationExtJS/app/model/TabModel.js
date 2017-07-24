Ext.define('app.model.TabModel', {   //define model TabModel class
    extend: 'Ext.data.Model',  //extend data.Model class
    fields: [      //define properties of textfields thats use in the user form
        {name:'ID',type:'int'},
        { name: 'UserName', type: 'string' },
        { name: 'FatherName', type: 'string' },
        { name: 'DOB', type: 'date', dateFormat: 'MS' },
        { name: 'Address', type: 'string' },
        { name: 'Contact', type: 'int' }
    ]
});