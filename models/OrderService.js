var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderServiceSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "service_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "order_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "price": {
        "type": Number,
        "required": true,
        "index": true
    },
    "units": {
        "type": Number,
        "required": true,
        "index": true
    },

    "start_date": {
        "type": Date,
        "default": Date.now,
        "required": true,
        "index": true
    },
    "end_date": {
        "type": Date,
        "default": Date.now,
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

//OrderServiceSchema.index({
//    "service_id": 1,
//    "order_id": 1,
//    "price": 1,
//    "units": 1,
//    "start_date": 1,
//    "end_date": 1,
//    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
//});
OrderServiceSchema.index({
    "service_id": 1, "order_id": 1
}, {"unique": true});

module.exports = mongoose.model("OrderService", OrderServiceSchema);
