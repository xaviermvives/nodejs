const fs = require('node:fs') //a partir de node 16 se recomienda poner node:


console.log("Leyendo el primer archivo...")

fs.readFile('./archivo.txt', 'utf-8', (err, text) => { //<--ejecuta este callback cuando hayas acabado de leer
    console.log('primer texto:', text)
}) 


console.log('Hacer cosas mientras lee el archivo...')

console.log("Leyendo el segundo archivo...")

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('segundo text:', text)
}) 

