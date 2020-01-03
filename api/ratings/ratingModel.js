const db = require("../../data/dbConfig");

module.exports = {
  addRating,
  editRating,
  findRatingByRouteId,
  findRatingByUserId
};

async function addRating(rating) {
  const [newRating] = await db("ratings").insert(rating);
  //.returning("*");
  return newRating;
}

function editRating(rating, id) {
  return db("ratings")
    .where("id", "=", id)
    .update(rating);
}

function findRatingByRouteId(id) {
  return db("ratings").where("ratings.routeId", "=", id);
}

function findRatingByUserId(id) {
  return db("ratings as r")
    .join("users as u", "u.id", "r.userId")
    .where("r.userId", "=", id)
    .select();
}
