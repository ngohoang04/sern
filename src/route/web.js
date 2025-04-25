import express from 'express';
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';
let router = express.Router(); // Create a new router instance

const initWebRoutes = (app) => {
    // Define a route for the root URL
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getAboutPage);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/editUser/:id', homeController.editCRUD);
    router.get('/delete-user/:id', homeController.deleteCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.post('/api/login', userController.handleLogin); // Handle login requests
    return app.use('/', router);
}

module.exports = initWebRoutes; // Export the initWebRoutes function