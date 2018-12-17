const knexFileConfig = require("./knexfile");
const knex = require("knex")(knexFileConfig["dev"]);

let cols = ["id", "status"];

console.log(knex("transactions").select(cols).toSQL().sql);

createTransaction();

function createTransaction() {
    knex("transactions").insert({
        "status": "initialised"
    })
    .then((rows) => {
        console.log(rows);
    })
    .catch((err) => {
        console.log(err);
    });
}