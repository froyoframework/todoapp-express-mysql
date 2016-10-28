var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '172.17.0.2',
    user: 'root',
    password: 'root',
    database: 'todolist'
});

module.exports = {

    signingInTheUser: function(user, callback) {
        pool.getConnection(function(err, connection) {
            var params = {
                sql: 'SELECT * FROM users WHERE email = ? AND password = ? LIMIT 1',
                values: [user.email, user.password]
            };
            
            connection.query(params, function(error, results, fields) {
                if(error) return callback(error);
                
                callback(null, results)

                connection.release();
            });
        }); 
    }
};
