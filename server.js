const path = require('path');
const express = require('express');

// Imort Express Session
const session = require('express-session');
const exphbs = require('express-handlebars');
require('dotenv').config();

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set Up Sessions
const sess = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(` Now listening on port: ${PORT}`));
});