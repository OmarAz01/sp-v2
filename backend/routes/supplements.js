'use strict'

const express = require('express')
const router = express.Router()
const db = require('../db/mysql')

const allowableSortFields = ['Overall', 'Health', 'Price', 'User']
const allowedTables = ['protein', 'creatine', 'preworkout']

router.get('/:supplement', async (req, res) => {
  const {supplement} = req.params
  const {sort} = req.query

  if (!allowedTables.includes(supplement)) {
    return res.status(400).json({error: 'Invalid supplement type'})
  }

  let sql = `SELECT * FROM \`${supplement}\``

  if (sort && allowableSortFields.includes(sort)) {
    sql += ` ORDER BY ${sort} ASC`
  }

  try {
    const [rows] = await db.execute(sql)
    return res.json(rows)
  } catch (err) {
    console.error('MySQL error:', err)
    return res.status(500).json({error: 'Database query failed'})
  }
})

module.exports = router
