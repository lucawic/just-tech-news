//imports sequalize constructor from the lib
const Sequelize = require('sequelize');

//create connection to the database, pass in your mySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;