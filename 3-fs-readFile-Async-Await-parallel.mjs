//asyncronic parallel
//

import { readFile } from 'node:fs/promises'; 

Promise.all([
        readFile('./archivo.txt', 'utf-8'), //aquí hacemos 2 trabajos en paralelo (más rápido)
        readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
        console.log('primer texto:', text)
        console.log('segundo text:', secondText)
})

 

