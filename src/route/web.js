import express from 'express';

let router = express.Router(); // Create a new router instance

const initWebRoutes = (app) => {
    // Define a route for the root URL
    router.get('/', (req, res) => {
        res.send('index.ejs');
    });


    return app.use('/', router); // Use the router for all routes starting with '/'
}

module.exports = initWebRoutes; // Export the initWebRoutes function