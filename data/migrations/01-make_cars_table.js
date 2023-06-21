/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  //1 up ve down fonksiyonlarını return etmek zorunda! 
  //2 up fonksiyonu verilen tiplerde, verilen isimlendirmeler ve istenen ara koşullarla tablo yaratır.  

  return knex.schema.createTable("cars", table => {
    table.increments() // İçeriğini vermezsek, default olarak "id" olarak gelir.
    table.string("vin")
      .notNullable()
      .unique();
    table.string("make")
      .notNullable();
    table.string("model")
      .notNullable();
    table.integer("mileage")
      .notNullable();
    table.string("title")
    table.string("transmission")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  //1  up ve down fonksiyonlarını return etmek zorunda! 
  //2  Her up fonksiyonunun bir de down fonksiyonu olur.
  //3  down fonksiyonu yapılan işlemleri geri alır.
  return knex.schema.dropTableIfExists('cars');
};

