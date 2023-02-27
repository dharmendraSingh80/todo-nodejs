const Task = require("../models/task");

// deleting task from database

module.exports.delete = function(req, res){
    var removeList = req.body.check;

    if(typeof removeList === 'string'){
        Task.findByIdAndDelete(removeList, function(err){
            if(err){
                console.log('error');
                return;
            }
        });
    }else if(typeof removeList == 'object'){
        for(let i =0; i < removeList.length; i++){
            Task.findByIdAndDelete(removeList[i], function(err){
                if(err){
                    console.log('error');
                     return;
                }
            });
        }
    }
    return res.redirect('back');
}