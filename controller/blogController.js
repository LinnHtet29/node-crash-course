const Blog = require("../models/blogs");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => res.render("blog/index", { title: "blogs", blogs: result }))
    .catch((err) => console.log(err));
};

const blog_add = (req, res) => {
  let blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));  
};

const blog_create = (req, res) => {
  res.render("blog/create", { title: "create" });  
};

const blog_details = (req, res) => {
    let id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render("blog/details", { blog: result, title: "Details" });
        })
        .catch((err) => console.log(err));
};

const blog_delete = (req, res) => {
  let id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));  
};

module.exports = {
    blog_index,
    blog_add,
    blog_create,
    blog_details,
    blog_delete
};
