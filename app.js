
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , aclPermission = require('./routes/acl-permission')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/zrecore');

app.get('/', routes.index);

/**
 * ACL models
 */

    /**
     * AclPermission
     */
    app.get('/acl-permission', aclPermission.list);
    app.get('/acl-permission/:id', aclPermission.get);
    app.put('/acl-permission/:id', aclPermission.put);
    app.post('/acl-permission/:id', aclPermission.post);
    app.delete('/acl-permission/:id', aclPermission.delete);

    /**
     * AclResource
     * @todo Fill in the AclResource end-points
     */

    /**
     * AclRole
     * @todo Fill in the AclRole end-points
     */

app.get('/user', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
