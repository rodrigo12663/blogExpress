const express = require("express");
const ArticleController = require("../controllers/ArticleController");
const CategoriesControllers = require("../controllers/CategoriesControllers");
const app = express.Router();

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/admin/categories/new",CategoriesControllers.new);
app.get("/admin/categories",CategoriesControllers.index);
app.post("/admin/categories/save",CategoriesControllers.create);
app.post("/admin/categories/delete",CategoriesControllers.delete);
app.get("/admin/categories/edit/:id",CategoriesControllers.story);
app.post("/categories/edit/update",CategoriesControllers.update);

app.get("/admin/articles/new", ArticleController.new)

module.exports = app;