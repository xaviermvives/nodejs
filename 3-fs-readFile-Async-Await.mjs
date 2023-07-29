//l'hem de passar a mjs pq amb js no funcionaria el 'await'
import { readFile } from 'node:fs/promises' //a partir de node 16 se recomienda poner node:


console.log("Leyendo el primer archivo...")

const text = await readFile('./archivo.txt', 'utf-8')

console.log('primer texto:', text)
 


console.log('Hacer cosas mientras lee el archivo...')

console.log("Leyendo el segundo archivo...")

const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo text:', secondText)
 

