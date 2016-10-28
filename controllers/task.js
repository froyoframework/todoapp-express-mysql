var task = require('../models/tasks');

module.exports = {
    createTask: createTask
};

function createTask(taskName, callback) {

    return task.createNewTask(taskName, function(err, results) {
        if(results.affectedRows > 0) {
            callback(true);
        } else {
            callback(false);
        }
    });
}
