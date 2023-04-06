/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('products', products => {
    products.increments();
    products.string("title").notNullable().unique();
    products.string('description', 900).notNullable();
    products.float('price').notNullable();
    products.specificType('images', 'text ARRAY').notNullable();
    products.integer('quantity').defaultTo(1).notNullable();
    products.specificType('colors', 'text ARRAY').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products')
};
