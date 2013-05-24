var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ItemPropertySchema = new Schema({
    "id": ObjectId,
    "item_id": {
        "type": ObjectId,
        "required": true
    },
    "property_id": {
        "type": ObjectId,
        "required": true
    }
}, {
    "autoIndex": false
});

ItemPropertySchema.index({
    "item_id": 1,
    "property_id": 1
}, {
    "unique": true
});

module.exports = mongoose.model("ItemProperty", ItemPropertySchema);
