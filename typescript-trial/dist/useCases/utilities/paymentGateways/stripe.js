"use strict";
const async = require("async");
class stripe {
    constructor() {
        this.name = "stripe";
    }
    createTransaction(id, finalCallback) {
        async.waterfall([
            function (callback) {
                callback(null);
            }
        ], function (err, data) {
            console.log(id);
            finalCallback(null, id);
        });
    }
}
module.exports = stripe;
