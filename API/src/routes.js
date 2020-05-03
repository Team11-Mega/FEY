const express = require('express')
const routes = express.Router()
const middleware = require('./middleware/authJWT')
const userController = require('./controllers/userController')
const botController = require('./controllers/botController')


routes.post('/auth',userController.auth)
routes.post('/users',userController.create)
routes.post('/send-msg', botController.send)

module.exports = routes