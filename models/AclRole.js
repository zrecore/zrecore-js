var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var AclRoleSchema = new Schema({
	"id": ObjectId,
	"role_name": String,
	"is_active": {
		"type": Boolean,
		"required": true,
		"default": false
	},
	"inherit_role_id": {
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

AclRoleSchema.index({"acl_role_id": 1, "role_name": 1});
module.exports = mongoose.model("AclRole", AclRoleSchema);
