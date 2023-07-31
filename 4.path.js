const path = require('node:path')

// barra separadora carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')

console.log(filePath) // content/subfolder/test.txt

// nombre fichero:
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base) // password.txt

// nombre fichero sin la extensión:
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename) // password

// la extensión
const extension = path.extname('image.jpg')
console.log(extension) // .jpg
