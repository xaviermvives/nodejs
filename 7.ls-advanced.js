const fs = require('node:fs')

// pasaremos como argumento la carpeta donde queremos hacer el ls
// por ejemplo:
// node 6.ls-advanced.js mjs

const folder = process.argv[2] ?? '.'

//
fs.readdir(folder, (err, files) => {
    if (err) {
        console.error('Error al leer el directorio')
        return
    }

    files.forEach(file => {
        console.log(file)
    })
})
