/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('cart', cart => {
    cart.increments().primary();
    cart.uuid('user_cart').unsigned().notNullable().references('id').inTable('users').unique()
    cart.string('quantity').defaultTo(0)
    cart.float('total').defaultTo(0.00)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cart')
};

/**
 * cart = {
 *    id: int,
 *    user_uuid fk: uuid,
 *    quantity: int,
 *    total: float
 * }
 */