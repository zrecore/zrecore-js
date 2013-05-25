var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PropertyTypeSchema = new Schema({
    "id": ObjectId,
    "type": {
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

PropertyTypeSchema.index({ "type": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1 });

module.exports = mongoose.model("PropertyType", PropertyTypeSchema);
