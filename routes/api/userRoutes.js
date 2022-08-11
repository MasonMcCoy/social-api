const router = require('express').Router();
const {
    getUsers,
    createUser
} = require('../../controllers/userController');

// Get all users
router.route('/').get(getUsers);

// Get a single user by ID with Thought and friend data
router.route('/:userID').get();

// Post a new user 
router.route('/').post(createUser);

// Update an existing user by ID 
router.route('/:userID').put();

// Remove user by ID
router.route('/:userID').delete();

// Add friend to user's friend list
router.route('/:userId/friends/:friendId').post();

// Remove friend from user's friend list
router.route('/:userId/friends/:friendId').delete();

module.exports = router;