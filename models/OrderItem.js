var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderItemSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "order_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "Order"
    },
    "item_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "Item"
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

OrderItemSchema.index({
    "item_id": 1,
    "order_id": 1
}, {"unique": 1});

module.exports = mongoose.model("OrderItem", OrderItemSchema);
