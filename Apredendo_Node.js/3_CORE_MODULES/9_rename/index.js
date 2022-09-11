const fs = require('fs')

const arqAntigo = "arquivo.txt"

const arqNovo = "vasco.txt"

fs.rename(arqAntigo, arqNovo, function(err) {
    if (err) {
        console.log(err)
        return
    } else {
        console.log('Renomeado e o Vasco é gigante.')
    }
});