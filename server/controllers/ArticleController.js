const Article = require("../database/model/Article");

module.exports ={
    async create(request,response){
        
        response.send("visualizaão de artigo");
    },
    async new(request,response){
        response.render("admin/articles/new");
    }
}