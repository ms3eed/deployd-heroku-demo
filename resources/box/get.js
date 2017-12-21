console.log(query);
if(query.serialNumber &&  query.action== "receive"){
    dpd.box.get({serialNumber: query.serialNumber}).then(function (data){
        console.log(data[0]);
        if(data.legnth > 0  && data[0].owner == query.userId){
            data[0].statusField = "true";
            dpd.box.put( data[0], function(data4, error){
                                console.log(data4);
                                console.log("sdasdasdasdas");
                console.log(error);
            });  
        }else {
            cancel("You are not authorized to do that", 401);
        }
    });
}