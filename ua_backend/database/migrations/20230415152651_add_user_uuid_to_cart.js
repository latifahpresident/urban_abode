/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('cart', cart => {
        cart.uuid('user_uuid').references('uuid').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('cart', cart => {
        cart.dropColumn('user_uuid');
      })
};
