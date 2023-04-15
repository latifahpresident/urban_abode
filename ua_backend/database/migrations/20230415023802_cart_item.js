/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('cart_item', cart_item => {
    cart_item.increments().primary();
    cart_item.integer('cart_id').unique().notNullable().references('id').inTable('cart');
    cart_item.integer('product_id').unsigned().notNullable().references('id').inTable('products');
    cart_item.integer('quantity').defaultTo(1)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cart_item')
};
