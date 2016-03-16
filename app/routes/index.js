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
           //res.send(urlService.shorten(url));
           urlService.shorten(url, function(result){
               res.send(result);
           })
    });
        
    app.route('/:key')
        .get(function(req, res){
           var key = req.params.key;
           res.send(urlService.retrieve(key));
        });
        
    app.route('/api/all')
        .get(function(req, res){
            res.send(urlService.getAll());
        });
};