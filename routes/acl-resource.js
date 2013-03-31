
/*
 * GET acl-resource listing.
 */
var Rest = require("../lib/Rest");
var ctrl = new Rest('/acl-resource', '../models/AclResource.js');

console.log(ctrl);

module.exports = ctrl;