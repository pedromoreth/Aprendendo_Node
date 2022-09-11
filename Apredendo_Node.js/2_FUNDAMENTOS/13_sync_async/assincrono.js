const fs = require('fs')

console.log('Começando')

fs.writeFile('arquivo1.txt', 'vai se fuder', function(err) {
    setTimeout(function() {
        console.log('Arquivo criado!')
    }, 1000)
});

console.log('Acabou')