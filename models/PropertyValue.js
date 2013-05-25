var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PropertyValueSchema = new Schema({
    "id": ObjectId,
    "text": {
        "type": String,
        "required": true
    },
    "type_id": {
        "type": ObjectId,
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

PropertyValueSchema.index({ "type_id": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1 });
PropertyValueSchema.index({"text": 1, "type_id": 1}, {"unique": true});

module.exports = mongoose.model("PropertyValue", PropertyValueSchema);
