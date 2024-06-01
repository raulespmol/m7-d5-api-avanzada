const database = require('../database/config')

const checkConnect = async () => {
  const consulta = "SELECT NOW()"
  const {rows} = await database.query(consulta)

  console.log(rows);
}

module.exports = {
  checkConnect
}