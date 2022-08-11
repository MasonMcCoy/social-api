const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((result) => {
            res.json(result);
        })
    },

    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((error) => (res.status(500).json(error)));
    }
};