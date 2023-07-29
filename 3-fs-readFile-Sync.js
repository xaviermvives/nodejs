const fs = require('node:fs') //a partir de node 16 se recomienda poner node:

const text = fs.readFileSync('./archivo.txt') //devuelve buffer
const text2 = fs.readFileSync('./archivo.txt', 'utf-8') //devuelve el texto
console.log(text)

console.log("Leyendo el primer archivo...")

console.log(text2)

console.log("Leyendo el segundo archivo...")

const secondText2 = fs.readFileSync('./archivo2.txt', 'utf-8') 

console.log(secondText2)