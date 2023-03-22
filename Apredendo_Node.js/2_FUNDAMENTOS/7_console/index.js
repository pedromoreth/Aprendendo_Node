const x = 10
const y = 'Pedro'
const z = [1, 2]

console.log(x, y, z)


// contagem de impressoes

console.count(`Valor de x é:${x},contagem`)
console.count(`Valor de x é:${x},contagem`)
console.count(`Valor de x é:${x},contagem`)
console.count(`Valor de x é:${x},contagem`)

//variavel entre string

console.log("O nome é %s, e ele é programador", y)

//limpar console

setTimeout(() => {
    console.clear()
}, 2000);