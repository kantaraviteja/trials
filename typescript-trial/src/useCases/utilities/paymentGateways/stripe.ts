import paymentGateway = require("./paymentGatewayInterface");
import async = require("async");
import _ = require("lodash")
class stripe implements paymentGateway {
    name: string;
    constructor() {
        this.name = "stripe";
    }
    createTransaction(id: string, finalCallback: Function): void{
        async.waterfall([
            function(callback: Function){
                callback(null);
            }
        ], function(err, data) {
            console.log(id);
            finalCallback(null, id);
        });
    }
}

export = stripe;