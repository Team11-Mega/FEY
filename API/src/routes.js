const express = require('express')
const routes = express.Router()
const userController = require('./controllers/userController')

routes.post('/auth',userController.auth)
routes.get('/users',userController.getUsers)

module.exports = routes