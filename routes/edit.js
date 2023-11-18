//Handles initial GET 
//Handles PUT for task edit
//Handles DELETE task

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

//Routes
router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteTask)
router.post('/:id', editController.updateTask)

module.exports = router