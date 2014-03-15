var _ = require('underscore');
var restify = require('restify');

module.exports.list = function (mModel, req, res, next) {

    var searchQuery = !_.isUndefined(req.header('API-QUERY')) ? JSON.parse(req.header('API-QUERY')) : null;
    var populate = !_.isUndefined(req.header('API-POPULATE')) ? req.header('API-POPULATE') : null;
    var limit = !_.isUndefined(req.header('API-LIMIT')) && req.header('API-LIMIT') ? req.header('API-LIMIT') : null;
    var skip = !_.isUndefined(req.header('API-SKIP')) && req.header('API-SKIP') ? req.header('API-SKIP') : null;
    var sort = !_.isUndefined(req.header('API-SORT')) ? req.header('API-SORT') : null;
    var query;

    try {
        populate = JSON.parse(populate);
    } catch (e) {
        // Nope, not JSON.
    }

    if (!_.isNull(searchQuery) && searchQuery != '') {
        if (_.isObject(searchQuery)) {
            if (_.has(searchQuery, 'query') && _.has(searchQuery, 'fields')) {
                query = mModel.find(searchQuery.query, searchQuery.fields);
            } else if(_.has(searchQuery, 'query')) {
                query = mModel.find(searchQuery.query);
            } else {
                query = mModel.find(searchQuery);
            }

            if (_.has(searchQuery, 'sort')) {
                query = query.sort(searchQuery.sort);
            }
        } else {
            query = mModel.find(searchQuery);
        }
    } else {
        query = mModel.find();
    }


    if (!_.isNull(populate)) {
        if (_.isObject(populate)) {
            if (_.has(populate, 'document') && _.has(populate, 'fields')) {
                query.populate(populate.document, populate.fields);
            } else if (_.has(populate, 'document')) {
                query.populate(populate.document);
            } else if (Array.isArray(populate)) {
                for(var i = 0; i < populate.length; i++) {
                    query.populate(populate[i]);
                }
            } else {
                query.populate(populate);
            }
        } else {
            query.populate(populate);
        }
    }
    if (!_.isNull(skip)) query.skip(skip);
    if (!_.isNull(limit) && limit != '') query.limit(limit);
    if (!_.isNull(sort)) query.sort(sort);

    query.exec(function (err, records) {
        if (err) {
            res.send({
                result: 'error',
                message: err.toString()
            });
        } else {
            query.count(function (err, cnt) {
                res.send({
                    result: 'ok',
                    pagination: {
                        count: cnt,
                        limit: limit,
                        skip: skip,
                        sort: sort,
                        query: searchQuery,
                        populate: populate
                    },
                    data: records
                });
            });
        }
    });

    return next;
};

module.exports.get = function (mModel, req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;

    mModel.findById(id, function (err, records) {

        if (err) {
            res.send({
                result: 'error',
                message: err.toString()
            });
        } else {
            res.send({
                result: 'ok',
                data: records
            });
        }
    });

    return next;
};

/**
 * Do not provide the _id property in the data. Only supply the id value at the end of the URL.
 *
 * @param mModel
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports.put = function (mModel, req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;

    // Update only.
    if (id) {
        var data = req.params;
        delete data.id;

        mModel.findByIdAndUpdate(id, {$set: data}, function (err, record) {
            if (err) {
                res.send({
                    result: 'error',
                    message: err.toString()
                });
            } else {
                res.send({
                    result: 'ok',
                    data: record,
                    message: 'Update complete'
                });
            }
        });
    }

    return next;
}
/**
 * Do not provide the _id property in the data. Only supply the id value at the end of the URL.
 * @param mModel
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports.post = function (mModel, req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : null;
    var data = req.params;

    if (id) {
        delete data.id;

        // Update
        mModel.findByIdAndUpdate(id, {$set: data}, function (err, record) {

            if (err) {
                res.send({
                    result: 'error',
                    message: err.toString()
                });
            } else {
                res.send({
                    result: 'ok',
                    data: record,
                    message: 'Update complete'
                });
            }
        });

    } else {
        // Create
        var newModel = new mModel(data);
        newModel.save(function (err, m) {

            if (err) {
                res.send({
                    result: 'error',
                    message: err.toString()
                });
            } else {
                res.send({
                    result: 'ok',
                    data: m,
                    message: 'Create',
                    err: err
                });
            }
        });
    }

    return next;
}

module.exports.del = function (mModel, req, res, next) {
    var id = !_.isUndefined(req.params.id) ? req.params.id : (!_.isUndefined(req.params._id) ? req.params._id : null);

    if (id) {
        // Delete
        mModel.findByIdAndRemove(id, function (err, record) {

            res.send({
                result: 'ok',
                message: 'Deleted.'
            });
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