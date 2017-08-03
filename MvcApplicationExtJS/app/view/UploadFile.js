Ext.define('app.view.UploadFile', {
    extend: 'Ext.form.Panel',
    title: 'Upload Demo',
    xtype:'fileupload',
    width: 400,
    bodyPadding: 10,

    items: [{
        xtype: 'filefield',
        name: 'file',
        fieldLabel: 'File',
        labelWidth: 50,
        anchor: '100%',
        buttonText:'Select File...'
    }],
    buttons: [{
        text: 'Upload',
        handler: function () {
            var form = this.up('form').getForm();
            if (form.isValid()) {
                form.submit({
                    url: '/FileUpload/Upload',
                    waitMsg: 'Uploading Your File...',
                    success: function (f,a) {
                        var result = a.result,
                            data = result.data,
                            size = data.size,
                            name=data.name,
                            message = Ext.String.format('<b>Message:</b> {0}<br>' + '<b>FileName:</b> {1}<br>' + '<b>FileSize:</b> {2} bytes', result.msg, name, size);
                        Ext.Msg.alert('File Upload Success',message);
                    },
                    failure: function (f,a) {
                        Ext.Msg.alert('File Upload Failure', a.result.msg);
                    }
                })
            }
        }
    }],
    renderTo:Ext.getBody()
});