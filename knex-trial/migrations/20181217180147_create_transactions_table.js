exports.up = function(knex, Promise) {
    return knex.schema.createTable("transactions", transactions=>{
        transactions.increments("id").primary();
        transactions.string("status", 50).notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.dropTable("transactions");
};
