var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserProfileSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
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
        "required": false,
        "index": true
    },
    "twitter_handle": {
        "type": String,
        "required": false,
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

UserProfileSchema.index({
    "user_id": 1
}, {"unique": true});
//UserProfileSchema.index({
//    "facebook_handle": 1, "twitter_handle": 1,
//    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
//});

module.exports = mongoose.model("UserProfile", UserProfileSchema);
