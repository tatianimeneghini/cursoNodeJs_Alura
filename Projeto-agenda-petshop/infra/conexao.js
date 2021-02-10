const mysql = require('mysql')

const conexao = mysql.createConnection({
   host: 'localhost',
   port: 3309,
   user: 'root',
   password: 'admin',
   database: 'db-agenda-petshop',
   insecureAuth : true
})

module.exports = conexao;