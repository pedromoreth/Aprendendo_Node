const express = require('express')

const app = express()

const port = 7770

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {

    const id = req.params.id

    //resgate de usuario do banco
    console.log(`Buscando o corno:${id}`)


    res.sendFile(`${basePath}/users.html`)

})

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {

    console.log(`Vasco é gigante porra!! ${port}`)

})