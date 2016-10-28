var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '172.17.0.2',
    user: 'root',
    password: 'root',
    database: 'todolist'
});

module.exports = {

    createNewTask: function(taskName, callback) {
        
        pool.getConnection(function(err, connection) {
            var params = {
                sql: 'INSERT INTO tasks SET ?',
                values: {
                    user_id: 1,
                    task_name: taskName,
                    created_at: '2016-10-28 00:00:00'
                }
            };
            
            connection.query(params, function(error, results, fields) {
                if(error) return callback(error);
                
                callback(null, results)

                connection.release();
            });
        });

    }
};
