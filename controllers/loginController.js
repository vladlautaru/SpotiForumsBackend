const loginModel = require('../models/loginModel');

exports.loginCheck = (req, res) => {
    const { username, password } = req.query;

    loginModel.checkUsernameAndPassword(username, password, (err, row) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: `Database error ${err}` });
        }

        if (row) {
            return res.status(200).json({ message: 'Correct login' });
        } else {
            return res.status(401).json({ error: 'Incorrect login' });
        }
    });
};