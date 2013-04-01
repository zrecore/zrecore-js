var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var AclPermissionSchema = new Schema({
	"id": ObjectId,
	"permission_name": {
        "type": String,
        "required": true,
        "unique": true,
        "lowercase": true,
        "trim": true
    },
	"is_active": {
		"type": Boolean,
		"required": true,
		"default": false
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

AclPermissionSchema.index({"permission_name": 1});
module.exports = mongoose.model("AclPermission", AclPermissionSchema);
