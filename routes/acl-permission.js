
/*
 * GET acl-permission listing.
 */
var mongoose = require("mongoose");

exports.list = function(req, res){
    // List request
    try {
        var db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error:'));
        db.on('open', function () {
            var aclPermissionModel = require('../models/AclPermission');


        });


        mongoose.disconnect();
        res.setHeader('Content-Type', 'application/json');
        res.send( JSON.stringify({
            "result": "ok",
            "data": 100
        }) );
    } catch (e) {
        if ( typeof mongoose.disconnect != 'undefined' ) mongoose.disconnect();
        throw e;
    }
};

exports.get = function (req, res) {
    // GET request
    res.setHeader('Content-Type', 'application/json');
    res.send( JSON.stringify({
        "result": "ok",
        "verb": "GET",
        "data": 100
    }) );
}

exports.put = function (req, res) {

    // PUT request
    res.setHeader('Content-Type', 'application/json');
    res.send( JSON.stringify({
        "result": "ok",
        "verb": "PUT",
        "data": 100
    }) );
}

exports.post = function (req, res) {
    // POST request
    res.setHeader('Content-Type', 'application/json');
    res.send( JSON.stringify({
        "result": "ok",
        "verb": "POST",
        "data": 100
    }) );
}

exports.delete = function (req, res) {
    // DELETE request
    res.setHeader('Content-Type', 'application/json');
    res.send( JSON.stringify({
        "result": "ok",
        "verb": "DELETE",
        "data": 100
    }) );
}
