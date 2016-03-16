'use strict';

var UrlService = require(process.cwd() + '/app/controllers/urlService.js');

module.exports = function (app, db) {
    var urlService = new UrlService(db);
    
    app.route('/')
        .get(function (req, res) {
            res.send("thank mr skeltal");
        });
        
    app.route('/new/:url')
        .get(function(req, res){
           var url = req.params.url;
           urlService.shorten(url);
        });
        
    app.route('/all')
        .get(function(req, res){
            urlService.getAll();
        });
};