const express = require('express');
const {
    registerUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/').get(getUsers);
router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
