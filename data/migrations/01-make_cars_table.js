/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("cars", table => {
    table.increments() // İçeriğini vermezsek, default olarak "id" olarak gelir.
    
  })
  // SİHRİNİZİ GÖSTERİN
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  // SİHRİNİZİ GÖSTERİN
};

