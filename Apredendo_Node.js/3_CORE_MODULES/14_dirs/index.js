const fs = require('fs')

if (!fs.existsSync('./minhapasta')) {
    console.log('Existe não cria.')
    fs.mkdirSync('minhapasta')
}



if (!fs.existsSync('./minhapasta')) {
    console.log('Existe não cria.')
} else {
    console.log('Agora tu criou ela cria.')
}