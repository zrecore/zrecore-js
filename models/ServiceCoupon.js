var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ServiceCouponSchema = new Schema({
    "id": ObjectId,
    "service_id": {
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


ServiceCouponSchema.index({"service_id": 1, "coupon_id": 1}, {"unique": true});

module.exports = mongoose.model("ServiceCoupon", ServiceCouponSchema);
