var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderCouponSchema = new Schema({
    "id": ObjectId,
    "order_id": {
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

OrderCouponSchema.index({
    "item_id": 1,
    "coupon_id": 1
}, {
    "unique": true
});

module.exports = mongoose.model("OrderCoupon", OrderCouponSchema);
