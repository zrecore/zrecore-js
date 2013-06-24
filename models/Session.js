var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SessionSchema = new Schema({
    "id": ObjectId,
    "token": {
        "type": String,
        "required": true
    },
    "ip": {
        "type": String,
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

SessionSchema.index({
    "token": 1,
    "ip": 1
}, {"unique": true});
SessionSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("Session", SessionSchema);
