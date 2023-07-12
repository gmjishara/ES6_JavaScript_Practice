function getData(key,callback){
    if(key===971231){
        const data ="Row data"
        callback(null,data)
    } else{
        callback('invalid key',null);
    }
}

function processedData(data,callback){
    if(data){
        callback(null,data)
    } else {
        callback(error,null)
    }
    
}

function sendData(data,callback){
    if(data){
        callback(null,data)
    } else {
        callback(error,null)
    }
}

function displaydata(){
    getData(971231,(error,result)=>{
        if(error){
            console.log("Something went wrong")
        } else {
            processedData(result,(error,result)=>{
                if(error){
                    console.log("something went wrong")
                } else{
                    sendData(result,(error,data)=>{
                        if(error){
                            console.log("something went wrong")
                        } else{
                            console.log("Final data: " + data)
                        }
                    }
                    )
                }
            });
        }
    })
}

displaydata();