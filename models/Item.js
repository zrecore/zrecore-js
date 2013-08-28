var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ItemSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "name": {
        "type": String,
        "required": true,
        "unique": true
    },
    "slug": {
        "type": String,
        "required": true,
        "unique": true
    },
    "sku": {
        "type": String,
        "required": true,
        "unique": true
    },
    "description": {
        "type": String,
        "required": true
    },
    "price": {
        "type": Number,
        "required": true,
        "index": true
    },
    "currency_id": {
        "type": ObjectId,
        "required": true
    },
    "category_id": {
        "type": ObjectId,
        "required": true,
        "index": true
    },
    "availability_date": {
        "type": Date,
        "required": true,
        "index": true
    },
    "finite_amount_available": {
        "type": Number,
        "required": false
    },
    "finite_unit_of_measure": {
        "type": String,
        "required": false,
        "index": true
    },
    "max_purchase_amount": {
        "type": Number,
        "required": false
    },
    "metric_unit_of_measure" : {
        "type": String,
        "required": false,
        "index": true
    },
    "metric_width": {
        "type": Number,
        "required": false,
        "index": true
    },
    "metric_height": {
        "type": Number,
        "required": false,
        "index": true
    },
    "metric_depth": {
        "type": Number,
        "required": false,
        "index": true
    },
    "min_purchase_amount": {
        "type": Number,
        "required": false
    },
    "perishable_date": {
        "type": Date,
        "required": false,
        "index": true
    },
    "weight": {
        "type": Number,
        "required": false,
        "index": true
    },
    "weight_unit_of_measure": {
        "type": String,
        "required": false,
        "index": true
    },
    "is_available": {
        "type": Boolean,
        "default": false,
        "required": true,
        "index": true
    },
    "is_finite": {
        "type": Boolean,
        "default": false,
        "required": true,
        "index": true
    },
    "is_perishable": {
        "type": Boolean,
        "default": false,
        "required": true,
        "index": true
    },
    "is_tangible": {
        "type": Boolean,
        "default": true,
        "required": true,
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

//ItemSchema.index({
//    "name": 1, "slug": 1, "sku": 1, "price": 1, "currency_id": 1, "category_id": 1, "availability_date": 1,
//    "finite_amount_available": 1, "finite_unit_of_measure": 1, "max_purchase_amount": 1, "metric_unit_of_measure": 1,
//    "metric_width": 1, "metric_height": 1, "metric_depth": 1, "min_purchase_amount": 1, "perishable_date": 1,
//    "weight": 1, "weight_unit_of_measure": 1, "is_available": 1, "is_finite": 1, "is_perishable": 1, "is_tangible": 1,
//    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
//});
module.exports = mongoose.model("Item", ItemSchema);
