var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderStatusHistorySchema = new Schema({
    "id": ObjectId,
    "status_id": {
        "type": ObjectId,
        "required": true
    },
    "change_date": {
        "type": Date,
        "required": false
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

module.exports = mongoose.model("OrderStatusHistory", OrderStatusHistorySchema);
