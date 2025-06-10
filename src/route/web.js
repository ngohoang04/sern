import express from 'express';
import homeController from '../controllers/homeController.js';
let router = express.Router();

let initWebRoutes = (app) => {
    // Render the home page
    router.get('/', homeController.getHomePage);



    // Use the router in the app
    app.use('/', router);
}

export default initWebRoutes
