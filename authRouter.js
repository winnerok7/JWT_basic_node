const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middlewares/authMiddleware')
const roleMiddleware = require('./middlewares/roleMiddlaware')

router.post('/registration', [
   check('username', 'field Name cant be empty').notEmpty(),
   check('password', 'Password must be from 4 to 10 symbols').isLength({ min: 4, max: 10 })
], controller.registration)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['Admin']), controller.getUsers)

module.exports = router