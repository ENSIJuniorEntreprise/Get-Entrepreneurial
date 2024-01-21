const https = require('https');
const fs = require('fs');
require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI;

const httpsOptions = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem'),
};

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('hello hello');
});

app.use('/api/inscription', require(path.join(__dirname, './Routes/inscription.js')));
app.use('/api/article', require(path.join(__dirname, './Routes/article.js')));
app.use('/api/collab', require(path.join(__dirname, './Routes/collab.js')));

// Connect to MongoDB
mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 5000,
})
.then(() => {
    console.log('Connected to the database');
    // Start HTTPS server
    https.createServer(httpsOptions, app).listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch((err) => {
    console.error('Error connecting to the database:', err);
});

// Error handling for HTTPS server
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', reason.stack || reason);
});
