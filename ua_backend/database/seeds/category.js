/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const categoryData = require('./../data/categoryData');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('category').del()
  await knex('category').insert(categoryData.category);
};
