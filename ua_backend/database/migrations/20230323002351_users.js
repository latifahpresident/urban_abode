/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//MAY NEED TO ADD THE 'role' COLUMN TO DISTINGUISH BETWEEN ADMIN, AGENT, AND REGULAR USER
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.uuid('id').primary()
    users.string('email').notNullable().unique();
    users.string('first_name').notNullable();
    users.string('last_name').notNullable();  
    users.string('address');
    users.string('city');
    users.string('state');
    users.string('zip');
    users.string('phone');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
