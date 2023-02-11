const express = require('express');
const app = express();
let { config } = require('./config');
const path = require('path');
const routes = require('./routes');
const cors = require('cors');

//? SETTINGS
app.use(express.static(path.join(__dirname, "/public")));
app.set('view engine', 'ejs');

//? MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors('*'));


//*VIEWS
app.set('views', path.join(__dirname, 'views'));

//? ROUTES
app.use('/', routes);


app.listen(config.port, () => {
    console.log(`Server Running on http://localhost:${config.port}`);
})