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
    }
}, {
    "autoIndex": false
});
PackageLevelSchema.index({"is_available": 1});
PackageLevelSchema.index({"name": 1}, {"unique": true});

module.exports = mongoose.model("PackageLevel", PackageLevelSchema);
