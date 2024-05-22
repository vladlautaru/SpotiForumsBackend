const db = require('../database');
const bcrypt = require('bcrypt');

exports.checkUsernameAndPassword = (username, password, callback) => {
    db.get('SELECT user_password FROM spotiforums_users WHERE user_username = ?', [username], (err, row) => {
        if (err) {
            console.error(err);
            return callback(err);
        }

        if (!row) {
            return callback(null, false);
        }

        bcrypt.compare(password, row.user_password, (bcryptErr, result) => {
            if (bcryptErr) {
                console.error(bcryptErr);
                return callback(bcryptErr);
            }

            callback(null, result);
        });
    });
};