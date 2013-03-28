var mongoose = require("mongoose");
        Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId,
        Boolean = Schema.Boolean,
        String = Schema.String,
        Date = Schema.Date;

var AclRoleSchema = new Schema({
	"acl_role_id": ObjectId,
	"role_name": {
		"type": String,
		"required": true
	},
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

AclRoleSchema.index({"acl_role_id": 1, "role_name": 1);
module.exports = mongoose.model("AclRole", AclRoleSchema);
