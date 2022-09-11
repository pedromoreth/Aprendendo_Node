const express = require('express')

const app = express()

const port = 7770

app.get('/', (req, res) => {

    res.send('Olá Mundo!')

})

app.listen(port, () => {

    console.log(`Vasco é gigante porra!! ${port}`)

})