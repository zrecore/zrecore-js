var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SubscriptionSchema = new Schema({
    "id": ObjectId,
    "currency_id": {
        "type": ObjectId,
        "required": true
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
    "signup_fee": {
        "type": Number,
        "required": true
    },
    "is_recurring": {
        "type": Boolean,
        "required": true,
        "default": false
    },
    "recurs_every_amount": {
        "type": Number,
        "required": false
    },
    "recurs_every_unit": {
        "type": String,
        "required": false
    },
    "recurs_max_amount": {
        "type": Number,
        "required": false
    },
    "price_per_unit": {
        "type": Number,
        "required": true
    },
    "is_available": {
        "type": Boolean,
        "required": true,
        "default": false
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


SubscriptionSchema.index({
    "currency_id": 1, "signup_fee": 1, "is_recurring": 1, "recurs_every_amount": 1, "recurs_every_unit": 1,
    "recurs_max_amount": 1, "price_per_unit": 1, "is_available": 1,
    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
});
SubscriptionSchema.index({
    "name": 1
}, {"unique": true});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
