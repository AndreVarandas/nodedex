const express = require('express')
const { availableEndpoints } = require('../constants')
const router = express.Router()

/**
 * Controllers
 */
const mainController = require('../controllers/main.controller')

/**
 * Routes
 */
router.get(availableEndpoints, mainController.all)

module.exports = router
