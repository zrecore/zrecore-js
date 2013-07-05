var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MerchantGatewaySchema = new Schema({
    "id": ObjectId,
    "name": {
        "type": String,
        "required": true,
        "unique": true
    },
    "class": {
        "type": String,
        "required": true,
        "unique": true
    },
    "is_default": {
        "type": Boolean,
        "default": 0,
        "required": false
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

MerchantGatewaySchema.index({
    "name": 1,
    "class": 1,
    "is_default": 1,
    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
});

module.exports = mongoose.model("MerchantGateway", MerchantGatewaySchema);
