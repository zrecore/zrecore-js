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

module.exports = mongoose.model("OrderSubscription", OrderSubscriptionSchema);
