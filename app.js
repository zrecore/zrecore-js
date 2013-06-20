/**
 * ZRECore.js - A REST-ful set of commerce related data models.
 * @author ZRECommerce
 * @license GPL v3 or higher.
 */

/**
 * Module dependencies.
 */
var port = 8080;
var useSSL = false;
var sslCertificatePath = '';
var sslKeyPath = '';
var sslCaPath = '';
var databaseHost = 'localhost';
var databaseName = 'zrecore';
var authorizationRequired = false; // Set to false while you add your first User, then set back to true and restart the app.

var http = require('http')
  , path = require('path')
  , fs = require('fs')
  , restify = require('restify')
  , _ = require('underscore');

var ZRECORE_DIR = __dirname;
var crud = require(ZRECORE_DIR + '/lib/crud.js');


var server;
// ...Do we want to enable SSL support?
if ( useSSL == true) {
    server = restify.createServer({
        certificate: fs.readFileSync(sslCertificatePath),
        key: fs.readFileSync(sslKeyPath),
        ca: fs.readFileSync(sslCaPath),
        requestCert: true,
        rejectUnauthorized: true
    });
} else {
    server = restify.createServer({

    });
}
// ...Set up our connection to the database.
var mongoose = require("mongoose");
mongoose.connect('mongodb://' + databaseHost + '/' + databaseName);

/**
 * Set up our REST controllers.
 */

// ...Enforce API authentication
server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

if (authorizationRequired) {
server.pre(function (req, res, next) {
    var api_user = req.header('API-USER');
    var api_key = req.header('API-KEY');

    if ( _.isUndefined( api_user ) || _.isUndefined(api_key) ) {

        res.send(401, '401 Access Denied');
    } else {

        // ...Attempt to look it up.
        var User = require('./models/User.js');

        var authUser = User.findOne({"handle": api_user}, function (err, user) {
            if (user) {

                user.comparePassword(api_key, function (err, isMatch) {
                    if (err || !isMatch) {
                       res.send(401, '401 Access Denied');
                    } else {
                        // OK! ...Just continue execution.
                        next();
                    }
                });
            } else {
                // User not found
                res.send(401, '401 Access Denied');
            }
        });
    }

});
}

var routeFiles = fs.readdirSync( ZRECORE_DIR + '/routes');
var route = '';
var models = [];

for (var r = 0; r < routeFiles.length; r++) {
    route = path.basename(routeFiles[r], '.js');
    if (route != '') models.push(route);
}
var model = null;
for (var i = 0; i < models.length; i++) {
    console.log('...Routing ' + models[i]);
    model = require('./routes/' + models[i]);
    crud.setUpServer(server, '/' + models[i], model);
}

/**
 * Ok! Let's start the show.
 */

server.listen(port, function () {
    console.log('Server is running on port ' + port);
});
