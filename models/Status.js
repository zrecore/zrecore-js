var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var StatusSchema = new Schema({
    "id": ObjectId,
    "value": {
        "type": String,
        "required": true
    }
}, {
    "autoIndex": false
});

StatusSchema.index({
    "value": 1
}, {"unique": true});

module.exports = mongoose.model("Status", StatusSchema);
