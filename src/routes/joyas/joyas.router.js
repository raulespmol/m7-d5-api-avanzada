const joyasRouter = require('express').Router()
const { getJoyasController } = require('../../controllers/joyas.controller')
// const checkPostID = require('../../middlewares/checkPost')

joyasRouter.get('/', getJoyasController)

module.exports = joyasRouter