'use strict'
const express = require('express')
const app = express()

const basePath = '/api/v1'
const health = require('./routes/health')

// Middlewares

// Routes
app.use(basePath + '/health', health)
app.use(basePath + '/supplements', require('./routes/supplements'))
app.use(basePath + '/topRanked', require('./routes/topRanked'))

module.exports = app
