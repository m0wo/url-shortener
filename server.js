'use strict';

require('dotenv').load();
var express = require('express');
var routes = require(process.cwd() + '/app/routes/index.js');
var mongo = require('mongodb').MongoClient;

var app = express();
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

var port = process.env.PORT || 8080;
var mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/urlshorten';

mongo.connect(mongoUrl, function (err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    routes(app, db);

    
    app.listen(port,  function () {
    	console.log('Node.js listening on port ' + port + '...');
    });

});

