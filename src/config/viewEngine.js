import express from 'express';

let configViewEngine = (app) => {
    app.use(express.static('./src/public')); // Serve static files from the public directory
    // Use EJS as the view engine
    app.set('view engine', 'ejs');
    // Set the views directory
    app.set('views', './src/views');

}

module.exports = configViewEngine;