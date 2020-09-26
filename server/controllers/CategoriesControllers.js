const Category = require("../database/model/Category");
const { create } = require("./ArticleController");
const slugify = require("slugify");



module.exports ={
    async new(request,response){
        response.render("admin/categories/new");
        
    },
    async create(request,response){
        let title = request.body.title;
        if(title !=undefined){
            Category.create({
                title:title,
                slug:slugify(title)
            }).then(()=>{
                response.render("index");
            })
        }
        else{
            response.redirect("/admin/categories/new");
        }
    },
    async index(request,response){
 
        Category.findAll().then(categories=>{
            response.render("admin/categories/index",{categories:categories});
        })
    },
    async delete(request,response){
            let id = request.body.id;
            console.log(id);
            if(id != undefined){
               
                if(!isNaN(id)){
                    Category.destroy({
                        where:{
                            id:id
                        }
                    }).then(()=>{
                        response.redirect("/admin/categories");
                    })
                }
                else{
                    response.redirect("/admin/categories");
                }
            }
            else{
                response.redirect("/admin/categories");
            }
            
    },
    async story(request,response){
        let id= request.params.id;

        if(isNaN(id)){
              response.redirect("/admin/categories");
        }
        else{
        Category.findByPk(id).then(category=>{
            if(category != undefined){
                response.render("admin/categories/edit",{category :category });
            }
            else{
                response.redirect("/admin/categories");
            }
        }).catch(erro=>{
            console.log("erro");
        })
    }
    },
    async update(request,response){
        let id = request.body.id;
        let title =request.body.title;
        Category.update({title:title,slug:slugify(title)}
        ,{
            where:{id:id}
        }).then(()=>{
            response.redirect("/admin/categories");
        })
    }
}