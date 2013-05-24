var mModel  = require('../models/MerchantGateway.js'),
    _       = require('underscore'),
    c    = require('../lib/crud.js');


exports.list = function (req, res, next) {
    return c.list(mModel, req, res, next);
}

exports.get = function (req, res, next) {
    return c.get(mModel, req, res, next);
}

exports.put = function (req, res, next) {
    return c.put(mModel, req, res, next);
}

exports.post = function (req, res, next) {
    return c.post(mModel, req, res, next);
}

exports.del = function (req, res, next) {
    return c.del(mModel, req, res, next);
}