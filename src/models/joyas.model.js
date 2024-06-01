const database = require('../database/config')

const getJoyas = async () => {
  const consulta = "SELECT * FROM inventario"
  const {rows: joyas} = await database.query(consulta)

  return joyas
}

const joyasModel = {
  getJoyas
}

module.exports = joyasModel
