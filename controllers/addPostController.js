const addPostModel = require('../models/addPostModel');

exports.addPost = (req, res) => {
    const {title, author, desc} = req.query;

    addPostModel.addPost(title, author, desc, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: `Database error ${err}` });
        }

        return res.status(200).json({ message: 'Post added!' });
    })
};