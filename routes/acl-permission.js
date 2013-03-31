
/*
 * GET acl-permission listing.
 */
var mModel = require('../models/AclPermission.js');
var _ = require('underscore');

exports.list = function (req, res, next) {
    mModel.find(function (err, records) {

        res.send({
            result: 'ok',
            data: records
        });
    });

    return next;
}

exports.get = function (req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;
    console.log('Looking for id: ' + id);
    mModel.findOneById({id: id}, function (err, records) {
        res.send({
            result: 'ok',
            data: records
        });
    });

    return next;
}

exports.put = function (req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;

    // Update only.
    if (id) {
        var data = req.params;

        mModel.find({_id: id}, function (err, record) {
            data['_id'] = record._id;

            var newModel = new mModel(data);

            if (record) {
                newModel.save(function (err, newModel) {
                    /**
                     * @todo Handle an error.
                     */

                    res.send({
                        result: 'ok',
                        data: newModel
                    });
                });
            }
        });
    }

    return next;
}

exports.post = function (req, res, next) {
    console.log(req.params);
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;
    var data = req.params;

    if (id != null) {
        // Update
        mModel.findByIdAndUpdate(id, {$set: data}, function (err, record) {
            /**
             * @todo Handle an error.
             */
            res.send({
                result: 'ok',
                data: record,
                message: 'Update complete'
            });
        });

    } else {
        // Create
        var newModel = new mModel(data);
        newModel.save(function (err, newModel) {
            /**
             * @todo Handle an error.
             */
            res.send({
                result: 'ok',
                data: newModel,
                message: 'Create'
            });
        });
    }

    return next;
}

exports.del = function (req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;

    if (id) {
        // Delete
        mModel.findByIdAndRemove(id, function (err, record) {

            res.send(200);
        });
    }

    return next;
}