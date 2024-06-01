const joyasModel = require('../models/joyas.model')

const getJoyasController = async (req, res) => {
  try {
    const joyas = await joyasModel.getJoyas()
    res.json(joyas)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: "Internal server error"})
  }
}

module.exports = {
  getJoyasController
}