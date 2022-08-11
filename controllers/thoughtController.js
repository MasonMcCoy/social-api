const { User, Thought } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((result) => {
            res.json(result);
        })
    },

    getThoughtByID(req, res) {
        Thought.findOne({ id: req.params.thoughtID })
        .then((thought) => {
            !thought
            ? res.status(404).json({ message: 'Thought does not exist' })
            : res.json(thought);
        })
    },

    createThought(req, res) {
        User.findOne({ username: req.body.username })
        .then((user) => {
            !user
            ? res.status(404).json({ message: 'User does not exist' })
            : Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((error) => (res.status(500).json(error)));
        })
    },

    updateUser(req, res) {
        Thought.findOne({ id: req.params.thoughtID })
        .then((thought) => {
            thought.thoughtText = req.body.thoughtText;
            thought.save();
            res.json(thought);
        });
    },

    deleteThought(req, res) {
        Thought.deleteOne({ id: req.params.thoughtID })
        .then((result) => {
            res.json(result);
        });
    },

    addReaction(req, res) {
    },

    removeRemove(req, res) {
    }
};