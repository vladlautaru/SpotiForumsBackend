const db = require('../database');

exports.addPost = (title, author, desc, callback) => {
    const datetime = new Date();

    db.run(`INSERT INTO spotiforums_post (post_author, post_title, post_desc, post_date_posted) VALUES(?, ?, ?, ?)`, [author, title, desc, datetime.toISOString().slice(0,10)], callback);
};