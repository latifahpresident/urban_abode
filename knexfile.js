require('dotenv').config()

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DEV_DATABASE,
      user: process.env.DEV_DATABASE,
      password: process.env.DEV_DATABASE_PASSWORD
    },
    migrations: {
      directory: './ua_backend/database/migrations',
    },
    seeds: {
      directory: './ua_backend/database/seeds',
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './ua_backend/database/migrations',
    }
  }

};
