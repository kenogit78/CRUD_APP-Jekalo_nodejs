const express = require('express')
const router = express.Router()

const userController = require('../../controllers/user.controller')


router.get('/users', userController.findUser);
router.post('/user', userController.createUser);
router.delete('/:username', userController.deleteUser);

module.exports = router