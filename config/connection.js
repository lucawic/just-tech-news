//imports sequalize constructor from the lib
const Sequelize = require('sequelize');

//create connection to the database, pass in your mySQL information for username and password
const sequelize = new Sequelize ('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequalize;