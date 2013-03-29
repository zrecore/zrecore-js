
/*
 * GET acl-permission listing.
 */
var Rest = require("../lib/Rest");
var extend = require('extend');
var aclPermission = {model: '../models/AclPermission'};

extend(aclPermission, Rest);


module.exports = exports = aclPermission;

//util.inherits(rest, exports);

//exports.list = function(req, res, next){
//    // List request
//    try {
//        var db = mongoose.connection;
//
//        db.on('error', console.error.bind(console, 'connection error:'));
//        db.on('open', function () {
//            var aclPermissionModel = require('../models/AclPermission');
//
//
//        });
//
//
//        mongoose.disconnect();
//        res.setHeader('Content-Type', 'application/json');
//        res.send({
//            "result": "ok",
//            "data": 100
//        });
//    } catch (e) {
//        if ( typeof mongoose.disconnect != 'undefined' ) mongoose.disconnect();
//        throw e;
//    }
//
//    return next;
//};
//
//exports.get = function (req, res, next) {
//    // GET request
//    res.setHeader('Content-Type', 'application/json');
//    res.send( {
//        "result": "ok",
//        "verb": "GET",
//        "data": 100
//    } );
//
//    return next;
//}
//
//exports.put = function (req, res, next) {
//
//    // PUT request
//    res.setHeader('Content-Type', 'application/json');
//    res.send({
//        "result": "ok",
//        "verb": "PUT",
//        "data": 100
//    });
//
//    return next;
//}
//
//exports.post = function (req, res, next) {
//    // POST request
//    res.setHeader('Content-Type', 'application/json');
//    res.send({
//        "result": "ok",
//        "verb": "POST",
//        "data": 100
//    });
//
//    return next;
//}
//
//exports.delete = function (req, res, next) {
//    // DELETE request
//    res.setHeader('Content-Type', 'application/json');
//    res.send({
//        "result": "ok",
//        "verb": "DELETE",
//        "data": 100
//    });
//
//    return next;
//}
