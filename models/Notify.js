var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var NotifySchema = new Schema({

    "id": {
        "type": ObjectId,
        "index": true
    },
    "name": {
        "type": String,
        "required": false
    },
    "email": {
        "type": String,
        "required": true,
        "index": true
    },
    "item_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "is_active": {
        "type": Boolean,
        "default": true,
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

NotifySchema.index({"email": 1}, {"unique": true});

module.exports = mongoose.model("Notify", NotifySchema);