//lalternativa per a fer servir await:
//fer servir una funció autoinvocada IIFE

const { readFile } = require('node:fs/promises'); 

//IIFE - Immediately Invoked Function Expression
(
    async () => {
            console.log("Leyendo el primer archivo...")

            const text = await readFile('./archivo.txt', 'utf-8')

            console.log('primer texto:', text)

            console.log('Hacer cosas mientras lee el archivo...')

            console.log("Leyendo el segundo archivo...")

            const secondText = await readFile('./archivo2.txt', 'utf-8')
            console.log('segundo text:', secondText)

    })()

 

