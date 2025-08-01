'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/mysql')

const allowedTables = ['protein']

router.get('/:number', async (req, res) => {
  const {number} = req.params
  const limit = parseInt(number, 3)

  if (isNaN(limit) || limit <= 0) {
    return res.status(400).json({error: 'Invalid number of top ranked supplements requested'})
  }
  
  const topRankedSupplements = []

  for (const table of allowedTables) {
    const sql = `SELECT * FROM \`${table}\` ORDER BY overall_rating DESC LIMIT \`${limit}\``

    try {
        const [rows] = await db.execute(sql)
        if (rows.length > 0) {
            for (const row of rows) {
                
        }
    }
    catch (err) {
        console.error('MySQL error:', err)
        return res.status(500).json({error: 'Database query failed'})
    }
  }

  if (topRankedSupplements.length === 0) {
    return res.status(404).json({error: 'No top ranked supplements found'})
  }
  if (topRankedSupplements.length === limit) {
    return res.json(topRankedSupplements)
  }


module.exports = router
