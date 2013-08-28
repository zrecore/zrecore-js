var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ServicePackageLevelSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "service_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "package_level_id": {
        "type": ObjectId,
        "required": true,
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


ServicePackageLevelSchema.index({"service_id": 1, "package_level_id": 1}, {"unique": true});
//ServicePackageLevelSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("ServicePackageLevel", ServicePackageLevelSchema);
