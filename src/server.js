const express = require('express')
const path = require('path') // facilita a navegação entre pastas usando "," ao invés de "/" ou "\"
const pages = require('./pages.js')
const server = express()



server
.use(express.static('public'))

// configurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
// start do servidor
server.listen(5500)