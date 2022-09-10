const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    res.write('Oi cornão')
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor está rodando na porta: ${port}`)
})