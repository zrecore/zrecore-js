var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CategorySchema = new Schema({
    "category_id": ObjectId,
    "name": String,
    "slug": String,
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

Category.index({"category_id": 1, "name": 1, "slug": 1, "parent_id": 1});
module.exports = mongoose.model("Category", CategorySchema);
