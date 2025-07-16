'use strict'

const http = require('http')
const app = require('./app')

const port = process.env.PORT || 8080

const httpServer = http.createServer(app).listen(port, () => {
  console.log(`Server running on port ${port}`)
})
