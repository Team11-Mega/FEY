const express = require('express')
const routes = express.Router()
const middleware = require('./middleware/authJWT')
const userController = require('./controllers/userController')


routes.post('/auth',userController.auth)
routes.post('/users',userController.create)

module.exports = routes