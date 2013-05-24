var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CategorySchema = new Schema({
    "id": ObjectId,
    "name": {
        "type": String,
        "required": true,
        "unique": true,
        "trim": true
    },
    "slug": {
        "type": String,
        "required": true,
        "unique": true
    },
    "is_active": {
        "type": Boolean,
        "default": false
    },
    "parent_id": {
        "type": ObjectId,
        "required": false
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

CategorySchema.index({"name": 1, "slug": 1, "parent_id": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});
module.exports = mongoose.model("Category", CategorySchema);
