const db = require("../../data/dbConfig");

module.exports = { addUser, findUserBy };

async function addUser(user) {
  const [newUser] = await db("users")
    .insert(user)
    .returning("*");
  return newUser;
}

function findUserBy(info) {
  return db("users").where(info);
}
