var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderItemSchema = new Schema({
    "id": ObjectId,
    "order_id": {
        "type": ObjectId,
        "required": true
    },
    "item_id": {
        "type": ObjectId,
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

OrderItemSchema.index({
    "item_id": 1,
    "order_id": 1
}, {"unique": 1});
OrderItemSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1}, {"unique": 1});

module.exports = mongoose.model("OrderItem", OrderItemSchema);
