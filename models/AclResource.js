var mongoose = require("mongoose");
        Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId,
        Boolean = Schema.Boolean,
        String = Schema.String,
        Date = Schema.Date;

var AclResourceSchema = new Schema({
	"acl_resource_id": ObjectId,
	"resource_name": {
		"type": String,
		"required": true
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

AclResourceSchema.index({"acl_resource_id": 1, "resource_name": 1);
module.exports = mongoose.model("AclResource", AclResourceSchema);
