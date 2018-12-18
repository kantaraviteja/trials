import express = require("express");
const app = express();
const router = express.Router();
const stripe = require("./utilities/paymentGateways/stripe");
const paymentGateway = require("./utilities/paymentGateways/paymentGatewayInterface");
let paymentGatewayMap;

router.post("/createTransaction",(req, res) => {
    let paymentGateway = getPaymentGateway(req.params.name);

});

function getPaymentGateway(name: string) {
    switch (name) {
        
        case "stripe": 
            return stripe;
        default:
            throw Error("Gateway Not Found");
    }
}

