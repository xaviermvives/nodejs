const fs = require('node:fs/promises')

//pasaremos como argumento la carpeta donde queremos hacer el ls
//por ejemplo:
//node 6.ls-advanced.js mjs

const folder = process.argv[2] ?? '.'

//
fs.readdir(folder)
.then( files => {
    files.forEach(file => {
        console.log(file)
    })
})
.catch(err => {
    console.error('Error al leer el directorio: ', err)
    return
})



