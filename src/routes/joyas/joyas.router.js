const joyasRouter = require('express').Router()
const { getJoyasController } = require('../../controllers/joyas.controller')
const {handleRequestLogs} = require('../../middlewares/logs.middleware')
// const checkPostID = require('../../middlewares/checkPost')

joyasRouter.get('/', handleRequestLogs, getJoyasController)

module.exports = joyasRouter