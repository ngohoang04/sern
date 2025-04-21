import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine.js';
import initWebRoutes from './route/web.js';
require('dotenv').config(); // Load environment variables from .env file
const app = express(); // Create an Express application

app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies


viewEngine(app); // Set up the view engine
initWebRoutes(app);
const PORT = process.env.PORT || 8080; // Set the port to listen on


app.listen(PORT, () => { // Start the server
    console.log(`Server is running on localhost:${PORT}`); // Log the server start message
})

