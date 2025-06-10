import express from 'express';
import homeController from '../controllers/homeController.js';
let router = express.Router();

let initWebRoutes = (app) => {
    // Render the home page
    router.get('/', homeController.getHomePage);

    // Render the about page
    router.get('/about', (req, res) => {
        return res.render('about.ejs');
    });

    // Render the contact page
    router.get('/contact', (req, res) => {
        return res.render('contact.ejs');
    });

    // Use the router in the app
    app.use('/', router);
}

export default initWebRoutes
