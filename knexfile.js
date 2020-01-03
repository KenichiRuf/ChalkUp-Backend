// Update with your config settings.
require("dotenv").config();
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/chalkup.db3"
    },
    useNullAsDefault: false,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: {
      database: process.env.DATABASE_URL
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullAsDefault: false,
    migrations: {
      directory: "./data/migrations"
    }
  }
};
