const fs = require('node:fs')

// haz un ls en el directorio actual '.'
fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Error al leer el directorio')
        return
    }

    files.forEach(file => {
        console.log(file)
    })
})
