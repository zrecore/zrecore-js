var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MerchantGatewaySchema = new Schema({
    "id": ObjectId,
    "name": {
        "type": String,
        "required": true,
        "unique": true
    },
    "class": {
        "type": String,
        "required": true,
        "unique": true
    }
}, {
    "autoIndex": false
});

MerchantGatewaySchema.index({
    "name": 1,
    "class": 1
});

module.exports = mongoose.model("MerchantGateway", MerchantGatewaySchema);
