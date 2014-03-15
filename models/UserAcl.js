var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserAclSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "user_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "User"
    },
    "resource_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "AclResource"
    },
    "permission_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "AclPermission"
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

UserAclSchema.index({
    "user_id": 1,
    "resource_id": 1,
    "permission_id": 1
}, {"unique": true});
//UserAclSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("UserAcl", UserAclSchema);
