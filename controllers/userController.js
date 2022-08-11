const { User, Thought } = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((result) => {
            res.json(result);
        })
    },

    getUserByID(req, res) {
        User.findOne({ id: req.params.UserID })
        .then((user) => {
            !user
            ? res.status(404).json({ message: 'User does not exist' })
            : res.json(user);
        })
    },

    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((error) => (res.status(500).json(error)));
    },

    updateUser(req, res) {
        User.findOne({ id: req.params.UserID })
        .then((user) => {
            user.username = req.body.username;
            user.save();
            res.json(user);
        });
    },

    deleteUser(req, res) {
        User.deleteOne({ id: req.params.UserID })
        .then((result) => {
            res.json(result);
        });
    },

    addFriend(req, res) {
        User.findOne({ id: req.params.UserID })
        .then((user) => {
            if (user.friends.includes(req.params.friendID)) {
                res.json({ message: 'Friend already added' });
            } else {
                user.friends.push(req.params.friendID);
                user.save();
                res.json(user);
            }
        })
    },

    removeFriend(req, res) {
        User.findOne({ id: req.params.UserID })
        .then((user) => {
            res.json(user)
            if (user.friends.includes(req.params.friendID)) {
                const index = user.friends.indexOf(req.params.friendID);
                user.friends.splice(index, 1);
                user.save();
                res.json(user);
            } else {
                res.json({ message: 'Friend not in friends list' });
            }
        })
        .catch((error) => res.status(500).json(error))
    }
};