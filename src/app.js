const express = require('express')

const app = express()

//midlewares
app.use(express.json())

//routes
// app.use('/', routes)

module.exports = app