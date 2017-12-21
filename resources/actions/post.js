var self = this;
dpd.box.get({id:this.boxId}).then(function (data){
    data.owner = self.receiverId;
    var date =new Date();
    data.updatedAt = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " +
    date.getHours() + ":" + date.getMinutes() +":" + date.getMinutes() ;
    data. statusField = 'false';
    dpd.box.put( data, function(data4, error){
        console.log(error);
    });  
    
});
