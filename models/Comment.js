var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CommentSchema = new Schema({
    "id": ObjectId,
    "user_id": ObjectId,
    "is_active": {
        "type": Boolean,
        "default": false
    },
    "is_spam": {
        "type": Boolean,
        "default": false
    },
    "text": String,
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
