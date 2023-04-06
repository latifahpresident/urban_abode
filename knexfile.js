const Pool = require("pg").Pool;
require('dotenv').config()

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const pool = new Pool( {

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
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './ua_backend/database/migrations',
    }
  }

})

module.exports = pool
