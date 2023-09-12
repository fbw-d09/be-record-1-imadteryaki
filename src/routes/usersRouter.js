const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.route('/')
.post(userController.createUser)
.get(userController.getUsers)

router.route('/:id')
.get(userController.getUserById)
.put(userController.updateUser)
.delete(userController.deleteUser);

module.exports = router;
