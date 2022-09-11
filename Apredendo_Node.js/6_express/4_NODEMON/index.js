const express = require('express')

const app = express()

const port = 7770

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {

    console.log(`Vasco é gigante porra!! ${port}`)

})