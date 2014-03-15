var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CategorySchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "name": {
        "type": String,
        "required": true,
        "unique": true,
        "trim": true
    },
    "slug": {
        "type": String,
        "required": true,
        "unique": true ,
        "index": true
    },
    "is_active": {
        "type": Boolean,
        "default": false,
        "index": true
    },
    "parent_id": {
        "type": ObjectId,
        "required": false,
        "index": true,
        "ref": "Category"
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

//CategorySchema.index({"name": 1, "slug": 1, "parent_id": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});
module.exports = mongoose.model("Category", CategorySchema);
