// require express for setting up the express server
const express = require('express');

//importing  the Database
const db = require('./config/mongoose');

//importing the schema for tasks
// set the task list so that it available at differnet controllers
const Task = require('./models/task');

//using express
const app = express();
const path = require('path');

// set up the port number
const port = 8000;
app.use(express.urlencoded());

//use express router
app.use('/', require('./routes'));

// set up the view engine
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

//middleware for static files 
app.use(express.static('assets'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});