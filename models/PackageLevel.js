var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PackageLevelSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "name": {
        "type": String,
        "required": true,
        "index": true
    },
    "is_available": {
        "type": Boolean,
        "required": true,
        "default": false,
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
//PackageLevelSchema.index({"is_available": 1, "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});
PackageLevelSchema.index({"name": 1}, {"unique": true});

module.exports = mongoose.model("PackageLevel", PackageLevelSchema);
