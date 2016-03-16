'use strict';

function urlService (db) {
    var urls = db.collection('urlsTesting');    //remove Testing on prod.
    
    this.shorten = function(url){
        console.log(url);
        
        urls.insertOne({"original_url": url}, function(err, result){
           if(err == null){
            console.log("added new url");
            //todo: callback so the api can display the result
           return;
           }
        });
    }
    
    this.getAll = function(){
        var cursor = urls.find( );
        cursor.each(function(err, doc){
            if(err != null){
                console.log(err);
            }
            if(doc != null){
                console.log(doc);
            }
        })
    }
    
}

module.exports = urlService;