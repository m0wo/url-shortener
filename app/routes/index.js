'use strict';

var UrlService = require(process.cwd() + '/app/controllers/urlService.js');

module.exports = function (app, db) {
    var urlService = new UrlService(db);
    
    app.route('/')
        .get(function (req, res) {
            res.send("thank mr skeltal");
        });
        
    app.route('/new/*')
        .get(function(req, res){
           var url = req.params[0];
           urlService.shorten(url, function(result,err){
               if(err == null){
                res.send(result);
               }else{
                res.send(err);
               }
               
           })
    });
        
    app.route('/:key')
        .get(function(req, res){
           var key = req.params.key;
            res.send("i broke this");
        //   urlService.retrieve(key, function(returnUrl, error){
        //       if(error == null){
        //         res.send(returnUrl);
        //       }else if(error != null){
        //           res.send(error);
        //       }
        //   })
           
        });
        
    app.route('/api/all')
        .get(function(req, res){
            res.send(urlService.getAll());
        });
};