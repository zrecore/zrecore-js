var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CurrencySchema = new Schema({
    "id": ObjectId,
    "code": {
        "type": String,
        "required": true,
        "unique": true
    },
    "name": {
        "type": String,
        "required": true,
        "unique": true
    },
    "is_default": {
        "type": Boolean,
        "default": false
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

CurrencySchema.index({"code": 1, "name": 1, "is_default": 1});
module.exports = mongoose.model("Currency", CurrencySchema);
