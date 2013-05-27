var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderSubscriptionSchema = new Schema({
    "id": ObjectId,
    "order_id": {
        "type": ObjectId,
        "required": true
    },
    "subscription_id": {
        "type": ObjectId,
        "required": true
    },
    "subscription_price": {
        "type": Number,
        "required": true
    },
    "subscription_start_date": {
        "type": Date,
        "required": true
    },
    "subscription_end_date": {
        "type": Date,
        "required": true
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

OrderSubscriptionSchema.index({
    "order_id": 1,
    "subscription_id": 1
}, {
    "unique": true
});
OrderSubscriptionSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("OrderSubscription", OrderSubscriptionSchema);
