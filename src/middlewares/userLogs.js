const fs = require('fs')
/*una funcion que agrega en la ruta userlogs y en el segundo parametro lo que queremos escribir permitiendole pasar al siguiente middleware que seria el controlador*/
function userLog(req, res, next) {
    fs.appendFileSync('src/log/userLogs.txt', `El usuario ingresó a la ruta: ${req.url}\n`)

    next()
}

module.exports = userLog;



