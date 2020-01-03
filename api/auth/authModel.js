const db = require("../../data/dbConfig");

function addUser(user) {
  return db("users").insert(user);
}

function findUserBy(info) {
  return db("users").where(info);
}

module.exports = { addUser, findUserBy };
