const Sequelize = require('sequelize');
require('dotenv').config();

<<<<<<< HEAD
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
=======
// create connection to our db
const sequelize = (process.env.JAWSDB_URL)
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
>>>>>>> 387570ad83e4e94864a348dbcc60a1b1df3c92d0
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

module.exports = sequelize;
