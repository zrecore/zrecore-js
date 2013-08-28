var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderCouponSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "order_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "coupon_id": {
        "type": ObjectId,
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

OrderCouponSchema.index({
    "order_id": 1,
    "coupon_id": 1
}, {
    "unique": true
});

module.exports = mongoose.model("OrderCoupon", OrderCouponSchema);
