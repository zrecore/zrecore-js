
/**
 * Module dependencies.
 */
var port = 8080;
var useSSL = false;
var sslCertificatePath = '';
var sslKeyPath = '';
var sslCaPath = '';

var routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , restify = require('restify');


var server;

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

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/zrecore');

/**
 * Set up our REST controllers.
 */

server.use(restify.bodyParser());

var aclPermission = require('./routes/acl-permission');


server.get('/acl-permission', aclPermission.list);
server.get('/acl-permission', aclPermission.get);
server.put('/acl-permission/:id', aclPermission.put);
server.post('/acl-permission/', aclPermission.post);
server.post('/acl-permission/:id', aclPermission.post);
server.del('/acl-permission/:id', aclPermission.del);

//var ctrlAclResource = new Rest('./acl-resource', '../models/AclResource.js');
//ctrlAclResource.setUp(server);


server.listen(port, function () {
    console.log('Server is running on port ' + port);
});