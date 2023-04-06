/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const Products = require('./../data/productsData');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert(Products.products);
};
