/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema.alterTable('cart', cart => {
        cart.dropForeign('user_cart')
    })
  return knex.schema.alterTable('cart', cart => {
    cart.dropColumn('user_cart');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('cart', cart => {
    cart.dropColumn('user_cart');
  })
};
