var users = require('../models/users');

module.exports = {
    userLogin: userLogin
};

function userLogin(email, password, fnExist) {
    var user = {
        email: email,
        password: password
    };

    return users.signingInTheUser(user, function(err, results) {
        if(results.length > 0) {
            fnExist(true);
        } else {
            fnExist(false);
        }
    });
}
