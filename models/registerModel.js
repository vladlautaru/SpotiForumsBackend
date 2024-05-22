const db = require('../database');
const bcrypt = require('bcrypt');

exports.checkIfUniqueUsername = (username, callback) => {
    db.get(`SELECT * FROM spotiforums_users where user_username = ?`, [username], callback);
}

exports.addUser = (username, email, password, callback) => {
    bcrypt.hash(password, 10, (err, secure) => {
        if (err) {
            console.error(err);
            return callback(err);
        }

        const datetime = new Date();
        db.run(`INSERT INTO spotiforums_users VALUES(?, ?, ?, ?)`, [username, secure, email, datetime.toISOString().slice(0,10)], callback);
    });
}