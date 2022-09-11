const express = require('express')

const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ['Batman', 'Superman', 'Flash', 'SuperChock']

    res.render('dashboard', { items })

})

app.get('/post', (req, res) => {
    const post = {
        title: 'Herois',
        category: 'DC',
        body: 'Historias da Dc.',
        comments: 8,
    }

    res.render('blogpost', { post })

})

app.get('/blog', (req, res) => {

    const posts = [{
            title: 'Maior Time BR',
            category: 'Vasco da Gama',
            body: 'Gigante da colina',
            comments: 777
        },
        {
            title: 'Maior Seleção Mundo',
            category: 'Brasil',
            body: 'Amarelinha',
            comments: 666
        },
        {
            title: 'Maior Time Europeu',
            category: 'Real Madrid',
            body: 'Hala Madrid',
            comments: 141
        }
    ]
    res.render('blog', { posts })
})

app.get('/', (req, res) => {

    const user = {
        name: 'Pedro',
        time: 'Vasco',
        selecao: 'Brasil'
    }

    const hino = 'Vamos todos cantar de coração,Vasco da Gama'

    const auth = true

    const approved = false

    res.render('home', { user: user, hino, auth, approved })
})
app.listen(3000)