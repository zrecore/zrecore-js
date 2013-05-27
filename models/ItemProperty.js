var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ItemPropertySchema = new Schema({
    "id": ObjectId,
    "item_id": {
        "type": ObjectId,
        "required": true
    },
    "property_id": {
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

ItemPropertySchema.index({
    "item_id": 1,
    "property_id": 1
}, {
    "unique": true
});
ItemPropertySchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("ItemProperty", ItemPropertySchema);
