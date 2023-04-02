const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Carreira = db.define('Address', {
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

Carreira.belongsTo(User)

module.exports = Carreira
