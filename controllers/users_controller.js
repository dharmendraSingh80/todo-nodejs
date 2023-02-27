const Task = require("../models/task");

//creting task and saved into database
module.exports.list = function(req, res){
    Task.create(req.body, function(err, newTask){
        if(err){
            console.log('error in creating a Task');
            return;
        }
        // console.log('******', newTask);
        return res.redirect('back');
    });
    
}