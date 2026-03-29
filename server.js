const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// EJS Setup
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout'); // default layout

// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
