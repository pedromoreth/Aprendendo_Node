const path = require('path')

//local absoluto
console.log(path.resolve('vasco.txt'))


//formar path

const midFolder = 'Gama'
const fileName = 'MaiordoRio.txt'

const finalPath = path.join('/', 'vasco', midFolder, fileName)

console.log(finalPath)