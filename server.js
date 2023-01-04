// Dependencies
const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Database Congiguration
// mongoose.connect(process.env.DATABASE_URL, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });
const DATABASE_URL= process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL , { useNewUrlParser: true, useUnifiedTopology: true }
    );
    

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());


// Routes and Controllers

const hikesController = require('./controllers/hikes.js');
app.use('/', hikesController);

app.get('/', (req, res) => {
    res.render('index.ejs');
});


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});

