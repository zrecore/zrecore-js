var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ItemCouponSchema = new Schema({
    "id": ObjectId,
    "item_id": {
        "type": ObjectId,
        "required": true
    },
    "coupon_id": {
        "type": ObjectId,
        "required": true
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

module.exports = mongoose.model("ItemCoupon", ItemCouponSchema);
