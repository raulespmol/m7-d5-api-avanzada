const database = require('../database/config')
const format = require('pg-format')

const getJoyas = async ({limits = 6, order_by = 'id_ASC', page = 1}) => {
  const [campo, orden] = order_by.split("_")
  const offset = (page - 1) * limits

  const consulta = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    campo,
    orden,
    limits,
    offset
  )

  const {rows: joyas} = await database.query(consulta)
  return joyas
}

const joyasModel = {
  getJoyas
}

module.exports = joyasModel
