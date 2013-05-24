var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CouponSchema = new Schema({
    "id": ObjectId,
    "code": {
        "type": String,
        "required": true,
        "unique": true
    },
    "start_date": {
        "type": Date,
        "required": true
    },
    "end_date": {
        "type": Date,
        "required": false
    },
    "is_active": {
        "type": Boolean,
        "default": false
    },
    "item_price": {
        "type": Number,
        "required": true
    },
    "service_price_per_unit": {
        "type": Number,
        "required": false
    },
    "subscription_sign_up_fee": {
        "type": Number,
        "required": false
    },
    "subscription_price_per_unit": {
        "type": Number,
        "required": false
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

CouponSchema.index({
    "code": 1, "start_date": 1, "end_date": 1, "item_price": 1, "service_price_per_unit": 1,
    "subscription_sign_up_fee": 1, "subscription_price_per_unit": 1, "timestamp_added": 1, "timestamp_modified": 1,
    "timestamp_deactivated": 1
});
module.exports = mongoose.model("Coupon", CouponSchema);
