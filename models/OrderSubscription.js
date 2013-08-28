var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderSubscriptionSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "order_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "subscription_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "subscription_price": {
        "type": Number,
        "required": true,
        "index": true
    },
    "subscription_start_date": {
        "type": Date,
        "required": true,
        "index": true
    },
    "subscription_end_date": {
        "type": Date,
        "required": true,
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

OrderSubscriptionSchema.index({
    "order_id": 1,
    "subscription_id": 1
}, {
    "unique": true
});
//OrderSubscriptionSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("OrderSubscription", OrderSubscriptionSchema);
