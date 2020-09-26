const Sequelize  = require("sequelize");

const connection = require("../database");

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        aloowNull:false
    }
})


module.exports = Category;