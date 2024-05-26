const db = require('../database');

exports.getPosts = (callback) => {
    db.all(`SELECT * FROM spotiforums_post ORDER BY post_date_posted DESC, post_title ASC`, [], (err, rows) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, rows);
    });
};