const fs = require('node:fs/promises')
const path = require('node:path')

//pasaremos como argumento la carpeta donde queremos hacer el ls
//por ejemplo:
//node 6.ls-advanced.js mjs

const folder = process.argv[2] ?? '.'

async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(`No se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
    
        try {
            stats = await fs.stat(filePath) //status - información del archivo
        }  catch {
            console.error(`No se pudo leer el directorio ${filePath}`)
            process.exit(1)
        }
    
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fileModified = stats.mtime.toLocaleString()
    
        return `${fileType} ${file.padEnd(20)} ${fileSize.padStart(10)} ${fileModified}`
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
    
}


ls(folder)



