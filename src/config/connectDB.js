import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hoidanit', 'root', null, {
    host: 'localhost',
    dialect: 'mysql', // or 'sqlite', 'postgres', 'mssql'
    logging: false, // Disable logging; default: console.log
});

// Test the connection
let connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectDb;