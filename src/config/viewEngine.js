import express from 'express';


let configViewEngine = (app) => {
    app.use(express.static('./src/public'));
    // Set the view engine to ejs
    app.set('view engine', 'ejs');
    // Set the views directory
    app.set('views', './src/views');
}

export default configViewEngine;