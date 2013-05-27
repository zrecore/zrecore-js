var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderServiceSchema = new Schema({
    "id": ObjectId,
    "service_id": {
        "type": ObjectId,
        "required": true
    },
    "order_id": {
        "type": ObjectId,
        "required": true
    },
    "price": {
        "type": Number,
        "required": true
    },
    "units": {
        "type": Number,
        "required": true
    },

    "start_date": {
        "type": Date,
        "default": Date.now,
        "required": true
    },
    "end_date": {
        "type": Date,
        "default": Date.now,
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

OrderServiceSchema.index({
    "service_id": 1,
    "order_id": 1,
    "price": 1,
    "units": 1,
    "start_date": 1,
    "end_date": 1,
    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
});
OrderServiceSchema.index({
    "service_id": 1, "order_id": 1
}, {"unique": true});

module.exports = mongoose.model("OrderService", OrderServiceSchema);
