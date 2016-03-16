'use strict';

function urlService (db) {
    var urls = db.collection('urlsTesting');    //remove Testing on prod.
    
    function generateKey(){
        return Math.random().toString(36).substring(7);
    }
    
    function validateUrl(url){
        return url.match('(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})');
    }
    

    this.shorten = function(url, callback){
        if(validateUrl(url) != null){
            urls.insertOne({"original_url": url, "short_url": generateKey()}, function(err, result){
               if(err != null){
                var obj = {"original_url": result.ops[0].original_url, "short_url": result.ops[0].short_url};
                callback(obj);
               }
            });
        }
        
        callback(url, "invalid url");
    }
    
    this.retrieve = function(shortUrl, callback){
        var cursor = urls.find({"short_url": shortUrl});
        
        cursor.each(function(err, result){
            if(err != null){
                console.log(err);
            }
            if(result != null){
                console.log(result);
                var returnUrl = result.original_url;
                callback(returnUrl);
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