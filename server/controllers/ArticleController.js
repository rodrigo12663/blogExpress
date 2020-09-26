const Article = require("../database/model/Article");
const Category = require("../database/model/Category");

module.exports ={
    async create(request,response){
        
        response.send("visualizaão de artigo");
    },
    async new(request,response){
        Category.findAll().then(categories=>{
            response.render("admin/articles/new" ,{categories:categories});
        })
       
    }
}