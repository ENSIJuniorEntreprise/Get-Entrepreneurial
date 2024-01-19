require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;
const mongoURI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('hello hello');
});

app.use('/api/inscription', require(path.join(__dirname, './Routes/inscription.js')));
app.use('/api/article', require(path.join(__dirname, './Routes/article.js')));
app.use('/api/collab', require(path.join(__dirname, './Routes/collab.js')));

mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 5000,
}).then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((err) => {
    console.error('Error connecting to the database:', err);
});
