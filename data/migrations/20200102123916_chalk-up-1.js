exports.up = function(knex) {
  return knex.schema
    .createTable("users", function(user) {
      user.increments();
      user.string("username", 128).notNullable();
      user.string("password", 128).notNullable();
      user.string("level").defaultTo("0");
    })
    .createTable("routes", function(route) {
      route.increments();
      route.string("createdBy", 128);
      route.string("grade", 128);
      route.string("description", 128).notNullable();
      route.string("image", 128).notNullable();
      route.string("type", 128);
      route.string("name", 128);
      route.string("location", 128);
    })
    .createTable("user_routes", function(userroute) {
      userroute.increments();
      userroute.string("notes");
      userroute.string("status");
      userroute.boolean("share").defaultTo(false);
      userroute
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      userroute
        .integer("routeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("routes");
    })
    .createTable("ratings", function(rating) {
      rating.increments();
      rating.integer("rating").unsigned();
      rating.string("comment");
      rating.date("createdDate");
      rating
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      rating
        .integer("routeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("routes");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ratings")
    .dropTableIfExists("user_routes")
    .dropTableIfExists("routes")
    .dropTableIfExists("users");
};
