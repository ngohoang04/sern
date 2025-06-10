const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hoidanit', 'root', null, {
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    logging: false, // Disable logging; default: console.log
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;