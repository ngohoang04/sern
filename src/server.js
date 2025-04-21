import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine.js';
import initWebRoutes from './route/web.js';
import db from './models/index.js'; // ✅ Load Sequelize và models
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

// ✅ Kết nối DB từ models/index.js
db.sequelize.authenticate()
    .then(() => console.log('✅ DB connected'))
    .catch(err => console.error('❌ DB connection failed:', err));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
