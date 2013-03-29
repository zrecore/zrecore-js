var mongoose = require("mongoose");
var Rest = {

    listAction:  function (req, res, next) {
        // List request
        try {
            var db = mongoose.connection;

            db.on('error', console.error.bind(console, 'connection error:'));
            db.on('open', function () {
                var m = require(this.model);


            });


            mongoose.disconnect();
            res.setHeader('Content-Type', 'application/json');
            res.send({
                "result": "ok",
                "verb": req.verb,
                "data": 100
            });
        } catch (e) {
            if (typeof mongoose.disconnect != 'undefined') mongoose.disconnect();
            throw e;
        }

        return next;
    },
    getAction:  function (req, res, next) {
        // GET request
        res.setHeader('Content-Type', 'application/json');
        res.send({
            "result": "ok",
            "verb": "GET",
            "data": 100
        });

        return next;
    },
    putAction:  function (req, res, next) {

        // PUT request
        res.setHeader('Content-Type', 'application/json');
        res.send({
            "result": "ok",
            "verb": "PUT",
            "data": 100
        });

        return next;
    },
    postAction:  function (req, res, next) {
        // POST request
        res.setHeader('Content-Type', 'application/json');
        res.send({
            "result": "ok",
            "verb": "POST",
            "data": 100
        });

        return next;
    },
    deleteAction:  function (req, res, next) {
        // DELETE request
        res.setHeader('Content-Type', 'application/json');
        res.send({
            "result": "ok",
            "verb": "DELETE",
            "data": 100
        });

        return next;
    },
    headAction:  function (req, res, next) {
        // HEAD action.
        return next;
    }
}

module.exports = exports = Rest;