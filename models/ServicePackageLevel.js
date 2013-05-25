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
    }
}, {
    "autoIndex": false
});


ServicePackageLevelSchema.index({"service_id": 1, "package_level_id": 1}, {"unique": true});

module.exports = mongoose.model("ServicePackageLevel", ServicePackageLevelSchema);
