const express = require('express')
const routes = express.Router()
const middleware = require('./middleware/authJWT')
const userController = require('./controllers/userController')

routes.use(middleware)

routes.get('/users',userController.getUsers)

module.exports = routes