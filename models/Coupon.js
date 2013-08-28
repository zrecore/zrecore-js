var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CouponSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "code": {
        "type": String,
        "required": true,
        "unique": true
    },
    "start_date": {
        "type": Date,
        "required": true,
        "index": true
    },
    "end_date": {
        "type": Date,
        "required": false,
        "index": true
    },
    "is_active": {
        "type": Boolean,
        "default": false,
        "index": true
    },
    "item_price": {
        "type": Number,
        "required": true,
        "index": true
    },
    "service_price_per_unit": {
        "type": Number,
        "required": false,
        "index": true
    },
    "subscription_sign_up_fee": {
        "type": Number,
        "required": false,
        "index": true
    },
    "subscription_price_per_unit": {
        "type": Number,
        "required": false,
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

//CouponSchema.index({
//    "code": 1, "start_date": 1, "end_date": 1, "item_price": 1, "service_price_per_unit": 1,
//    "subscription_sign_up_fee": 1, "subscription_price_per_unit": 1, "timestamp_added": 1, "timestamp_modified": 1,
//    "timestamp_deactivated": 1
//});
module.exports = mongoose.model("Coupon", CouponSchema);
