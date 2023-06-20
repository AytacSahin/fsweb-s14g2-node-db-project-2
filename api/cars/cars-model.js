// Database'i okuyabilmek için import ediyoruz:
const db = require('../../data/db-config');

const getAll = async () => {
  return await db("cars");
}

const getById = async (id) => {
  return await db("cars").where("id", id).first();
}

const create = async (cars) => {
  let [id] = await db("cars").insert(cars);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create
}
