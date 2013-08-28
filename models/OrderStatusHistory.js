var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderStatusHistorySchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "status_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "change_date": {
        "type": Date,
        "required": false,
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

OrderStatusHistorySchema.index({
    "status_id": 1,
    "change_date": 1
}, {
    "unique": true
});

//OrderStatusHistorySchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("OrderStatusHistory", OrderStatusHistorySchema);
