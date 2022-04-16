const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB() // connect to MongoDB

const app = express();

// add middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/todoRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on ${port}`));