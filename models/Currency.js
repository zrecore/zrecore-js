var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CurrencySchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
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
        "default": false,
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

//CurrencySchema.index({"code": 1, "name": 1, "is_default": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});
module.exports = mongoose.model("Currency", CurrencySchema);
