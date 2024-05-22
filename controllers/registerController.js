const registerModel = require('../models/registerModel');

exports.registerUser = (req, res) => {
    const { username, email, password, retype} = req.query;

    // Check if username already exists
    registerModel.checkIfUniqueUsername(username, (err, row) => {
        if (err) {
            return res.status(500).json({ error: `Database error ${err}` });
            console.log(err);
        }

        if (row) {
            return res.status(401).json({ error: 'Username already exists' });
        }

        if (password.localeCompare(retype) != 0) {
            return res.status(402).json({ error: 'Passwords do not match'});
        }

        registerModel.addUser(username, email, password, err => {
            if (err) {
                return res.status(500).json({ error: `Database error ${err}` });
            }

            return res.status(200).json({ message: 'User registered successfully'});
        });
    });
};