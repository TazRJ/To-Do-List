//Handles initial GET 
//Handles POST for new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//Routes
router.get('/', homeController.getIndex)
router.post('/', homeController.createTask)

module.exports = router