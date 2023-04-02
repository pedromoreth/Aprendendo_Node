const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Carreira = db.define('Carreira', {
    base: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    titulos: {
        type: DataTypes.STRING,
    },
    primeiroclube: {
        type: DataTypes.STRING,
    },
})

User.hasMany(Carreira)
Carreira.belongsTo(User)

module.exports = Carreira
