const Router = require('express').Router
const router = new Router()

const user = require('./model/user/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to openpbl API!' })
})

router.use('/user', user)

module.exports = router
