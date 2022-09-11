const express = require('express')

const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: 'Pedro',
        time: 'Vasco',
        selecao: 'Brasil'
    }

    const hino = 'Vamos todos cantar de coração,Vasco da Gama'

    res.render('home', { user: user, hino })
})
app.listen(3000)