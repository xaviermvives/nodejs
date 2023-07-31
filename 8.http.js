/* eslint-disable indent */
const http = require('node:http')
const { findAvalaiblePort } = require('./9.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('Hola mundo')
})

findAvalaiblePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${server.address().port}`)
    })
})
