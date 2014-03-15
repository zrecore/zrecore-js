var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ItemPropertySchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "item_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "Item"
    },
    "property_id": {
        "type": ObjectId,
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

ItemPropertySchema.index({
    "item_id": 1,
    "property_id": 1
}, {
    "unique": true
});
//ItemPropertySchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("ItemProperty", ItemPropertySchema);
