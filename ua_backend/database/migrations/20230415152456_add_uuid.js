/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('users', users => {
        users.uuid('uuid', {primaryKey: true}).defaultTo(knex.raw('gen_random_uuid()')).unique();
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('users', users => {
        users.dropColumn('uuid')
      })
};
