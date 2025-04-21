import express from 'express';
import homeController from '../controllers/homeController';
let router = express.Router(); // Create a new router instance

const initWebRoutes = (app) => {
    // Define a route for the root URL
    router.get('/', homeController.getHomePage); // When the root URL is accessed, call the getHomePage function from homeController


    return app.use('/', router); // Use the router for all routes starting with '/'
}

module.exports = initWebRoutes; // Export the initWebRoutes function