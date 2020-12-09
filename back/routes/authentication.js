const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')
const authPoliciesController = require('../controllers/authPoliciesController')

router.post('/login', authController.login)
router.post('/signup', authPoliciesController.registerPolicy, authController.signup)

module.exports = router;