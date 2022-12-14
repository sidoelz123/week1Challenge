const express = require('express'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 4040,
    bodyParser = require('body-parser'),
    controller = require('./controllers/controllerBooks'),
    controller2 = require('./controllers/controllerCategories');
    
// use template engine Handlebars
const {engine} = require("express-handlebars");
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views','views');
app.set('views', path.join(__dirname, 'views'));

// body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// static files
app.use(express.static('public'));
// const { path } = require('express/lib/application');

// path Main Route
const routes = require('./routes/routeMain');
routes(app);


app.listen(port);
console.log('RESTful API server started on port: ' + port);
