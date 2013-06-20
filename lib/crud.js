var _ = require('underscore');
var restify = require('restify');

module.exports.list = function (mModel, req, res, next) {
    var searchQuery = !_.isUndefined(req.params.searchQuery) ? req.params.searchQuery : null;
    var limit = !_.isUndefined(req.params.limit) ? req.params.limit : null;
    var sort = !_.isUndefined(req.params.sort) ? req.params.sort : null;

    var query = mModel.find(searchQuery);

    if (!_.isNull(limit)) query.limit(limit);
    if (!_.isNull(sort)) query.sort(sort);

    query.exec(function (err, records) {
        res.send({
            result: 'ok',
            data: records
        });
    });

    return next;
};

module.exports.get = function (mModel, req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;

    mModel.findById(id, function (err, records) {
        res.send({
            result: 'ok',
            data: records
        });
    });

    return next;
};

module.exports.put = function (mModel, req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;

    // Update only.
    if (id) {
        var data = req.params;
        data.id = null;
        data._id = id;

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
    }

    return next;
}

module.exports.post = function (mModel, req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;
    var data = req.params;

    if (id != null) {
        data.id = null;
        data._id = id;
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

module.exports.del = function (mModel, req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;

    if (id) {
        // Delete
        mModel.findByIdAndRemove(id, function (err, record) {

            res.send(200);
        });
    }

    return next;
}

module.exports.setUpServer = function(server, routeURI, route) {
    server.get(routeURI, route.list);
    server.get(routeURI + '/:id', route.get);
    server.put(routeURI + '/:id', route.put);
    server.post(routeURI + '/', route.post);
    server.post(routeURI + '/:id', route.post);
    server.del(routeURI + '/:id', route.del);
}