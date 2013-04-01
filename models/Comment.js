var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var CommentSchema = new Schema({
    "id": ObjectId,
    "user_id": {
        "type": ObjectId,
        "required": true
    },
    "is_active": {
        "type": Boolean,
        "default": false
    },
    "is_spam": {
        "type": Boolean,
        "default": false
    },
    "text": {
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

CommentSchema.index({"user_id": 1});
module.exports = mongoose.model("Comment", CommentSchema);
