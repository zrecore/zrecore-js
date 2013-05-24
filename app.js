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

var routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , restify = require('restify')
  , crud = require('./lib/crud.js');


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

server.use(restify.bodyParser());

/**
 * Define our model and associated end-point.
 * @type {Array}
 */
var models = [
    'acl-permission',
    'acl-resource',
    'acl-role',

    'category',
    'coupon',
    'currency',

    'folder',

    'item',
    'item-coupon',
    'item-property',

    'merchant-gateway',

    'order'
];


var model = null;
for (var i = 0; i < models.length; i++) {
    model = require('./routes/' + models[i]);
    crud.setUpServer(server, '/' + models[i], model);
}

/**
 * Ok! Let's start the show.
 */

server.listen(port, function () {
    console.log('Server is running on port ' + port);
});