var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ServiceSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "currency_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "Currency"
    },
    "requires_subscription": {
        "type": Boolean,
        "required": true,
        "default": false,
        "index": true
    },
    "name": {
        "type": String,
        "required": true,
        "index": true
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
        "required": true,
        "index": true
    },
    "unit_of_measure": {
        "type": String,
        "required": true,
        "index": true
    },
    "unit_amount": {
        "type": Number,
        "required": true,
        "index": true
    },
    "is_on_site": {
        "type": Boolean,
        "required": true,
        "default": false,
        "index": true
    },
    "is_available": {
        "type": Boolean,
        "required": true,
        "default": 0,
        "index": true
    },

    "timestamp_added": {
        "type": Date,
        "default": Date.now,
        "required": false,
        "index": true
    },
    "timestamp_modified": {
        "type": Date,
        "default": Date.now,
        "required": false,
        "index": true
    },
    "timestamp_deactivated": {
        "type": Date,
        "required": false,
        "index": true
    }
}, {
    "autoIndex": false
});

//ServiceSchema.index({
//    "currency_id": 1, "requires_subscription": 1, "name": 1, "description": 1, "terms": 1, "price_per_unit": 1,
//    "unit_of_measure": 1, "unit_amount": 1, "is_on_site": 1, "is_available": 1,
//    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
//});
ServiceSchema.index({"name": 1}, {"unique": true});

module.exports = mongoose.model("Service", ServiceSchema);
