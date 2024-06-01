const joyasModel = require('../models/joyas.model')

const getJoyasController = async (req, res) => {
  try {
    const queryStrings = req.query
    const joyas = await joyasModel.getJoyas(queryStrings)
    res.json(joyas)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: "Internal server error"})
  }
}

module.exports = {
  getJoyasController
}