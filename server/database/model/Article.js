
const Sequelize  = require("sequelize");
const connection = require("../database");
const Category = require("../model/Category");

const Article = connection.define('articles',{
    title:{
        type:Sequelize.STRING,
    },
    slug:{
        type:Sequelize.STRING,
        aloowNull:false
    },
    body:{
        type:Sequelize.STRING,
        aloowNull:false
    }
});
Category.hasMany(Article);
Article.belongsTo(Category);


module.exports = Article;