var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderItemSchema = new Schema({
    "id": ObjectId,
    "item_id": {
        "type": ObjectId,
        "required": true
    },
    "order_id": {
        "type": ObjectId,
        "required": true
    }
}, {
    "autoIndex": false
});

OrderItemSchema.index({
    "item_id": 1,
    "order_id": 1
});

module.exports = mongoose.model("OrderItem", OrderItemSchema);
