module.exports = {
  development: {
    database: 'cocktail_development',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    database: 'cocktail_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
  },
};
