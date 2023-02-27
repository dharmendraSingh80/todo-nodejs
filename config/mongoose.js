// require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/task_list_db');

//acquire the connection (to check it it is successful)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'error connecting to db'));

// if running then print the message
db.once('open', function(){
    console.log('Successfully connected to the database');
});