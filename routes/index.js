const express = require('express')
const homeRouter = require('./home').homeRouter

const router = express.Router()

router.use('/', homeRouter);

module.exports = {
  router
}
