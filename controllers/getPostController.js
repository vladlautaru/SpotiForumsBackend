const getPostsModel = require('../models/getPostsModel');

exports.getPosts = (req, res) => {
    getPostsModel.getPosts((err, rows) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: `Database error ${err}` });
        }

        return res.status(200).json(rows);
    })
}