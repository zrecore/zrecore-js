var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SessionSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "token": {
        "type": String,
        "required": true,
        "index": true
    },
    "user_id": {
        "type": ObjectId,
        "required": false,
        "index": true,
        "ref": "User"
    },
    "ip": {
        "type": String,
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

SessionSchema.index({
    "token": 1,
    "ip": 1
}, {"unique": true});
//SessionSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("Session", SessionSchema);
