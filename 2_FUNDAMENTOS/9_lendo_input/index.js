const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Lingugagem preferida?", (language) => {
    if (language === 'Python') {
        console.log('Essa linguagem é massa.')
    } else {
        console.log(`A minha lingaugem preferida é:${language}`)
    }

    readline.close()
})