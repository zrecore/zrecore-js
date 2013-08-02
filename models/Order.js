var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var OrderSchema = new Schema({
    "id": ObjectId,
    "amount_total": {
        "type": Number,
        "required": true
    },
    "order_date": {
        "type": Date,
        "required": false
    },
    "ip": {
        "type": String,
        "required": true
    },
    "email": {
        "type": String,
        "required": true
    },
    "address1": {
        "type": String,
        "required": true
    },
    "address2": {
        "type": String,
        "required": false
    },
    "city": {
        "type": String,
        "required": true
    },
    "state": {
        "type": String,
        "required": true
    },
    "postal_code": {
        "type": String,
        "required": true
    },
    "country": {
        "type": String,
        "required": true
    },
    "phone1": {
        "type": String,
        "required": false
    },
    "phone2": {
        "type": String,
        "required": false
    },

    "notes": {
        "type": String,
        "required": false
    },
    "creation_user_id": {
        "type": ObjectId,
        "required": false
    },
    "modification_user_id": {
        "type": ObjectId,
        "required": false
    },

    "currency_id": {
        "type": ObjectId,
        "required": true
    },
    "status_history_id": {
        "type": ObjectId,
        "required": false
    },
    "merchant_gateway_id": {
        "type": ObjectId,
        "required": false
    },

    "merchant_key": {
        "type": String,
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

OrderSchema.index({
    "amount_total": 1,
    "order_date": 1,
    "ip": 1,
    "email": 1,
    "address1": 1,
    "address2": 1,
    "city": 1,
    "state": 1,
    "postal_code": 1,
    "phone1": 1,
    "phone2": 1,
    "creation_user_id": 1,
    "modification_user_id": 1,
    "currency_id": 1,
    "status_history_id": 1,
    "merchant_gateway_id": 1,
    "merchant_key": 1,
    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
});

module.exports = mongoose.model("Order", OrderSchema);
