const db = require("../../data/dbConfig");

module.exports = {
  addRoute,
  editRoute,
  deleteRoute,
  findRouteBy,
  findAllRoutes,
  addUserRoute,
  editUserRoute,
  deleteUserRoute,
  findAllRoutesBy
};

async function addRoute(routes) {
  const [newRoute] = await db("routes").insert(routes);
  //.returning("*");
  return newRoute;
}

function editRoute(route, id) {
  return db("routes")
    .where("id", id)
    .update(route);
}

function deleteRoute(id) {
  return db("routes")
    .where("id", id)
    .del();
}

function findRouteBy(filter) {
  return db("routes").where(filter);
}

function findAllRoutes() {
  return db("routes");
}

//Add new user_routes
async function addUserRoute(routes) {
  const [newUserRoute] = await db("user_routes").insert(routes);
  //.returning("*");
  return newUserRoute;
}

//Edit routes users have saved
function editUserRoute(routes, id) {
  return db("user_routes")
    .where("id", "=", id)
    .update(routes);
}

//Delete routes users have saved
function deleteUserRoute(id) {
  return db("user_routes")
    .where("id", id)
    .del();
}

//Find routes users have saved
function findAllRoutesBy(filter) {
  return db("user_routes as u")
    .join("routes as r", "r.id", "u.routeId")
    .where(filter);
}
