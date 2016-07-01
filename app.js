
/**
 * Module dependencies.
 */

//var express = require('express')
//  , routes = require('./routes');
//
//var app = module.exports = express.createServer();
//
//// Configuration
//
//app.configure(function(){
//  app.set('views', __dirname + '/views');
//  app.set('view engine', 'jade');
//  app.use(express.bodyParser());
//  app.use(express.methodOverride());
//  app.use(app.router);
//  app.use(express.static(__dirname + '/public'));
//});
//
//app.configure('development', function(){
//  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
//});
//
//app.configure('production', function(){
//  app.use(express.errorHandler());
//});
//
//// Routes
//
//app.get('/', routes.index);
//
//app.listen(3000, function(){
//  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
//});


var express = require('express'),
    errorHandler = require('errorhandler'),
    app = express(),
    proxy = require('http-proxy-middleware');

var HOSTNAME = 'localhost',
    PORT = 9000,
    PUBLIC_DIR = __dirname + '/public';

app
    .use('/clients/', proxy('http://localhost:5984/'))
    //.use('/', proxy('http://localhost:8000/', {ws: true}))
    .use('/', express.static(PUBLIC_DIR))
    .use(errorHandler());

app.listen(PORT, function () {
  console.log("Simple static server showing %s listening at http://%s:%s", PUBLIC_DIR, HOSTNAME, PORT);
});