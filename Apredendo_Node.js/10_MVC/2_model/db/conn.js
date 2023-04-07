const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {

    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('conectado.')

} catch (error) {
    console.log('Errou ai cria!')
}

module.exports = sequelize
