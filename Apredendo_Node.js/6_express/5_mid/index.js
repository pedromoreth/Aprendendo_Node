const express = require('express')

const app = express()

const port = 7770

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const checkAuth = function(req, res, next) {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Está tudo correto corno.')
        next()
    } else {
        console.log('Tem que logar primeiro seu corno.')
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {

    console.log(`Vasco é gigante porra!! ${port}`)

})