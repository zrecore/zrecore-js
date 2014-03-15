var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PropertyValueSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "text": {
        "type": String,
        "required": true,
        "index": true
    },
    "type_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "PropertyType"
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

//PropertyValueSchema.index({ "type_id": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1 });
PropertyValueSchema.index({"text": 1, "type_id": 1}, {"unique": true});

module.exports = mongoose.model("PropertyValue", PropertyValueSchema);
