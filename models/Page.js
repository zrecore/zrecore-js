var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PageSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "folder_id": {
        "type": ObjectId,
        "required": false,
        "index": true
    },
    "user_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "title": {
        "type": String,
        "required": true,
        "index": true
    },
    "slug": {
        "type": String,
        "required": true,
        "index": true
    },
    "is_active": {
        "type": Boolean,
        "required": true,
        "default": false,
        "index": true
    },
    "excerpt": {
        "type": String,
        "required": true,
        "index": true
    },
    "content": {
        "type": String,
        "required": true
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

//PageSchema.index({ "folder_id": 1, "user_id": 1, "is_active": 1, "excerpt": 1, "content": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1 });
PageSchema.index({ "title": 1 }, { "unique": true });
PageSchema.index({ "slug": 1 }, { "unique": true });

module.exports = mongoose.model("Page", PageSchema);
