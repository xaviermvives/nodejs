// .js  -> por defecto utiliza CommonJS
// .mjs -> para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { sum, rest, mult } from './sum.mjs'

console.log(sum(5, 7))
console.log(rest(5, 7))
console.log(mult(5, 7))

//console.log(globalThis)