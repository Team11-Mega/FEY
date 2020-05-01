const express = require('express')
const app = express()
const routes = require('./routes')
const authRoutes = require('./authRoutes')

app.use(express.json())
app.use(routes)
app.use(authRoutes)

app.listen(2121)