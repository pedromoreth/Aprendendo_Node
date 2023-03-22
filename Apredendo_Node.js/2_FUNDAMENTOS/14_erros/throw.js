const x = 10

// checar const

if (!Number.isInteger(x)) {
    throw new Error("X não é um número inteiro.")
}

console.log("Continuação")