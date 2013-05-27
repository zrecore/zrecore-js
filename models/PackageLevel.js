var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PackageLevelSchema = new Schema({
    "id": ObjectId,
    "name": {
        "type": String,
        "required": true
    },
    "is_available": {
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
PackageLevelSchema.index({"is_available": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});
PackageLevelSchema.index({"name": 1}, {"unique": true});

module.exports = mongoose.model("PackageLevel", PackageLevelSchema);
