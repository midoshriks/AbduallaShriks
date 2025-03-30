const express = require('express')
const app = express()
const port = process.env.PORT || 3010

//* conect to mongodb
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
//* include the model
const Customer = require('./models/customer');

// * set view engine
app.set('view engine', 'ejs');
//! const path = require('path');
//* aotomaticly set the path to views
app.use(express.static('public'));
//* include the moment
var moment = require('moment');
//* include the method-override
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
//* include the routes
const webRoutes = require('./routes/web');
const customerRoutes = require('./routes/customer');



//* Auto refresh the server
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

//? app.set('views', path.join(__dirname, 'views'));





//* mongoose connect mongodb
mongoose
    .connect('mongodb+srv://midoshriks36:FuSqvCBKjqpFpmRK@cluster0.h3lp2.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
    // mongodb+srv://midoshriks36:FuSqvCBKjqpFpmRK@cluster0.h3lp2.mongodb.net/
    .then(() => {
        app.listen(port, () => {
            //   console.log(`Example app listening on port ${port}`)
            console.log(`http://localhost:${port}/`)
        })

    })
    .catch((err) => { console.log(err) });

//* use the routes
app.use('/', webRoutes);
app.use('/user/add.html', customerRoutes);
