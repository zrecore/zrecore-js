var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    "id": ObjectId,
    "acl_role_id": {
        "type": ObjectId,
        "required": true
    },
    "first_name": {
        "type": String,
        "required": true
    },
    "last_name": {
        "type": String,
        "required": true
    },
    "email": {
        "type": String,
        "required": true
    },
    "handle": {
        "type": String,
        "required": true
    },
    "is_active": {
        "type": Boolean,
        "default": false
    },

    "password_hash": {
        "type": Buffer,
        "required": true
    },
    "password_is_temporary": {
        "type": Boolean,
        "required": true,
        "default": true
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

UserSchema.index({
    "acl_role_id": 1,
    "first_name": 1,
    "last_name": 1,
    "email": 1,
    "handle": 1,
    "is_active": 1,
    "password_hash": 1,
    "password_is_temporary": 1,
    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
});

UserSchema.index({"email": 1}, {"unique": true});
UserSchema.index({"handle": 1}, {"unique": true});

module.exports = mongoose.model("User", UserSchema);
