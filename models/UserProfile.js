var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserProfileSchema = new Schema({
    "id": ObjectId,
    "user_id": {
        "type": ObjectId,
        "required": true
    },
    "about_me": {
        "type": String,
        "required": false
    },
    "facebook_handle": {
        "type": String,
        "required": false
    },
    "twitter_handle": {
        "type": String,
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

UserProfileSchema.index({
    "user_id": 1
}, {"unique": true});
UserProfileSchema.index({
    "facebook_handle": 1, "twitter_handle": 1,
    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
});

module.exports = mongoose.model("UserProfile", UserProfileSchema);
