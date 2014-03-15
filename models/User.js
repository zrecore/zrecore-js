var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    "id": {
        "type": ObjectId,
        "index": true
    },
    "acl_role_id": {
        "type": ObjectId,
        "required": true,
        "index": true,
        "ref": "AclRole"
    },
    "first_name": {
        "type": String,
        "required": true,
        "index": true
    },
    "last_name": {
        "type": String,
        "required": true,
        "index": true
    },
    "email": {
        "type": String,
        "required": true,
        "index": true
    },
    "handle": {
        "type": String,
        "required": true,
        "index": true
    },
    "is_active": {
        "type": Boolean,
        "default": false,
        "index": true
    },

    "password_hash": {
        "type": String,
        "required": true
    },
    "password_is_temporary": {
        "type": Boolean,
        "required": true,
        "default": true,
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

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password_hash')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password_hash, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password_hash = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password_hash, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

//UserSchema.index({
//    "acl_role_id": 1,
//    "first_name": 1,
//    "last_name": 1,
//    "email": 1,
//    "handle": 1,
//    "is_active": 1,
//    "password_hash": 1,
//    "password_is_temporary": 1,
//    "timestamp_added": 1, "timestamp_modified": 1, "timestamp_deactivated": 1
//});

UserSchema.index({"email": 1}, {"unique": true});
UserSchema.index({"handle": 1}, {"unique": true});

module.exports = mongoose.model("User", UserSchema);
