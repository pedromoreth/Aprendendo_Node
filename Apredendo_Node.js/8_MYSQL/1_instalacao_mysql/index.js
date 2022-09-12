const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '6Apwudn4@',
    database: 'nodemysql2',
})

conn.connect(function(err) {
    if (err) {
        console.log(err)
    }

    console.log('Vasco porra!')

    app.listen(3000)
})