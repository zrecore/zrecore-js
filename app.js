
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

var aclPermission = require('./routes/acl-permission');
var aclResource = require('./routes/acl-resource');
var aclRole = require('./routes/acl-role');
var category = require('./routes/category');
var coupon = require('./routes/coupon');
var currency = require('./routes/currency');
var _folder = require('./routes/folder');
var _item = require('./routes/item');

crud.setUpServer(server, '/acl-permission', aclPermission);
crud.setUpServer(server, '/acl-resource', aclResource);
crud.setUpServer(server, '/acl-role', aclRole);
crud.setUpServer(server, '/category', category);
crud.setUpServer(server, '/coupon', coupon);
crud.setUpServer(server, '/currency', currency);
crud.setUpServer(server, '/folder', _folder);
crud.setUpServer(server, '/item', _item);

server.listen(port, function () {
    console.log('Server is running on port ' + port);
});