
/**
 * Module dependencies.
 */
var port = 8080;
var useSSL = false;
var sslCertificatePath = '';
var sslKeyPath = '';
var sslCaPath = '';

var routes = require('./routes')
  , user = require('./routes/user')
  , aclPermission = require('./routes/acl-permission')
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
 * ACL models
 */

    /**
     * AclPermission
     */
    server.get('/', routes.index);

    server.get('/acl-permission', aclPermission.listAction);
    server.get('/acl-permission/:id', aclPermission.getAction);
    server.put('/acl-permission/:id', aclPermission.putAction);
    server.post('/acl-permission/:id', aclPermission.postAction);
    server.del('/acl-permission/:id', aclPermission.deleteAction);
    server.head('/acl-permission', aclPermission.headAction);

    /**
     * AclResource
     * @todo Fill in the AclResource end-points
     */

    /**
     * AclRole
     * @todo Fill in the AclRole end-points
     */


server.listen(port, function () {
    console.log('Server is running on port ' + port);
});