const router = require('express').Router();
const {
    getThoughts,
    getThoughtByID,
    createThought,
    updateUser,
    deleteThought
} = require('../../controllers/thoughtController');

// Get all thoughts
router.route('/').get(getThoughts);

// Get a single thought by ID
router.route('/:thoughtID').get(getThoughtByID);

// Post a new thought 
router.route('/').post(createThought);

// Update an existing thought by ID 
router.route('/:thoughtID').put(updateUser);

// Remove user by ID
router.route('/:thoughtID').delete(deleteThought);

// Create a reaction in a thought's reaction array
router.route('/thoughts/:thoughtID/reactions').post();

// Pull and remove a reaction in a thought's reaction array
router.route('/thoughts/:thoughtID/reactions').delete();

module.exports = router;