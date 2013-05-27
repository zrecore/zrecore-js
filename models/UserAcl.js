var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserAclSchema = new Schema({
    "id": ObjectId,
    "user_id": {
        "type": ObjectId,
        "required": true
    },
    "resource_id": {
        "type": ObjectId,
        "required": true
    },
    "permission_id": {
        "type": ObjectId,
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

UserAclSchema.index({
    "user_id": 1,
    "resource_id": 1,
    "permission_id": 1
}, {"unique": true});
UserAclSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("UserAcl", UserAclSchema);
