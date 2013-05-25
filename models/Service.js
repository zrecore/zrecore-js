var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ServiceSchema = new Schema({
    "id": ObjectId,
    "currency_id": {
        "type": ObjectId,
        "required": true
    },
    "requires_subscription": {
        "type": Boolean,
        "required": true,
        "default": false
    },
    "name": {
        "type": String,
        "required": true
    },
    "description": {
        "type": String,
        "required": true
    },
    "terms": {
        "type": String,
        "required": true
    },
    "price_per_unit": {
        "type": Number,
        "required": true
    },
    "unit_of_measure": {
        "type": String,
        "required": true
    },
    "unit_amount": {
        "type": Number,
        "required": true
    },
    "is_on_site": {
        "type": Boolean,
        "required": true,
        "default": false
    },
    "is_available": {
        "type": Boolean,
        "required": true,
        "default": 0
    },

    "timestamp_added": {
        "type": Date,
        "default": Date.now,
        "required": false
    },
    "timestamp_modified": {
        "type": Date,
        "default": Date.now,
        "required": false
    },
    "timestamp_deactivated": {
        "type": Date,
        "required": false
    }
}, {
    "autoIndex": false
});

ServiceSchema.index({
    "currency_id": 1, "requires_subscription": 1, "name": 1, "description": 1, "terms": 1, "price_per_unit": 1,
    "unit_of_measure": 1, "unit_amount": 1, "is_on_site": 1, "is_available": 1,
    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
});
ServiceSchema.index({"name": 1}, {"unique": true});

module.exports = mongoose.model("Service", ServiceSchema);
