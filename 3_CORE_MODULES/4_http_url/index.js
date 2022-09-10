const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    if (!name) {
        res.end('<h1>Coloque o seu nome:</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"></form>')
    } else {
        res.end(`<h1>Bem vindo corno ${name}</h1>`)
    }
})

server.listen(port, () => {
    console.log(`Servidor está rodando na porta: ${port}`)
})