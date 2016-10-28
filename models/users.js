var myqsl = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todolist'
});

var User = function(data) {
    this.data = data;
}

User.prototype.data = {};

User.registerNewUser = function(data, callback) {
    pool.getConnection(function(err, connection) {
        var currentDate = new Date();

        var query = 'INSERT INTO users (email, password, created_at) ';
            query += 'VALUES ("'+data.email+'", "'+data.password+'", "")';
        connection.query();
    }); 
};

module.exports = User;
