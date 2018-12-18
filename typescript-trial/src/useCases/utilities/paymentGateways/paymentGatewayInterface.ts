interface paymentGateway {
    name: string,
    createTransaction(id: string, callback: Function): void;
}

export = paymentGateway;
