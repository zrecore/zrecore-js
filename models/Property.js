var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PropertySchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "name": {
        "type": String,
        "required": true,
        "index": true
    },
    "type_id": {
        "type": ObjectId,
        "required": false,
        "index": true
    },
    "is_required": {
        "type": Boolean,
        "required": true,
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

//PropertySchema.index({ "name": 1, "type_id": 1, "is_required": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1 });

module.exports = mongoose.model("Property", PropertySchema);
