'use strict'

const express = require('express')
const router = express.Router()

// Health check
router.get('/', (req, res) => {
  return res.json({
    message: 'Health check passed',
  })
})

module.exports = router
