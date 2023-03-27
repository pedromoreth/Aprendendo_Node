const { sequilize, Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

//try {
//
//    sequelize.authenticate()
//    console.log('Conectou ai cria!')
//
//} catch (err) {
//    console.log('Errou ai cria!', error)
//}

module.exports = sequelize
