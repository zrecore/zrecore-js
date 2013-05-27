var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ServicePackageLevelSchema = new Schema({
    "id": ObjectId,
    "service_id": {
        "type": ObjectId,
        "required": true
    },
    "package_level_id": {
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


ServicePackageLevelSchema.index({"service_id": 1, "package_level_id": 1}, {"unique": true});
ServicePackageLevelSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("ServicePackageLevel", ServicePackageLevelSchema);
