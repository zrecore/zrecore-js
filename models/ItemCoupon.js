var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ItemCouponSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "item_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "Item"
    },
    "coupon_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "Coupon"
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

ItemCouponSchema.index({
    "item_id": 1,
    "coupon_id": 1
}, {
    "unique": true
});
//ItemCouponSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("ItemCoupon", ItemCouponSchema);
