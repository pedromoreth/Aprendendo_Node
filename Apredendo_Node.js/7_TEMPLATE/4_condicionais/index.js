const express = require('express')

const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {

    const user = {
        name: 'Pedro',
        time: 'Vasco',
        selecao: 'Brasil'
    }

    const hino = 'Vamos todos cantar de coração,Vasco da Gama'

    const auth = true

    res.render('home', { user: user, hino, auth })
})
app.listen(3000)