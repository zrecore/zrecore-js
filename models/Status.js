var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var StatusSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "value": {
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

StatusSchema.index({
    "value": 1
}, {"unique": true});
//StatusSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("Status", StatusSchema);
