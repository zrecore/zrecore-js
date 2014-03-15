var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var SubscriptionPackageLevelSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "subscription_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "Subscription"
    },
    "package_level_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "PackageLevel"
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


SubscriptionPackageLevelSchema.index({"subscription_id": 1, "package_level_id": 1}, {"unique": true});
//SubscriptionPackageLevelSchema.index({"timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1});

module.exports = mongoose.model("SubscriptionPackageLevel", SubscriptionPackageLevelSchema);
