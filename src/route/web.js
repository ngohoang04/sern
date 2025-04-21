import express from 'express';
import homeController from '../controllers/homeController';
let router = express.Router(); // Create a new router instance

const initWebRoutes = (app) => {
    // Define a route for the root URL
    router.get('/', homeController.getHomePage); // When the root URL is accessed, call the getHomePage function from homeController
    router.get('/crud', homeController.getAboutPage); // When '/about' is accessed, call the getAboutPage function from homeController
    router.post('/post-crud', homeController.postCRUD); // When '/about' is accessed with POST, call the postCRUD function from homeController
    router.get('/editUser/:id', homeController.editCRUD);
    router.get('/delete-user/:id', homeController.deleteCRUD); // When '/delete-user' is accessed with GET, call the deleteCRUD function from homeController
    router.post('/put-crud', homeController.putCRUD); // When '/put-crud' is accessed with POST, call the putCRUD function from homeController
    return app.use('/', router); // Use the router for all routes starting with '/'
}

module.exports = initWebRoutes; // Export the initWebRoutes function