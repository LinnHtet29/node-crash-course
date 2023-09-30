const { log } = require("console");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const blogRoutes = require('./router/blogRoutes')

const DB_URI = "mongodb://127.0.0.1/simpleblogdb";
mongoose
  .connect(DB_URI)
  .then((result) => {
    app.listen(3000);
    console.log("Connected to the database");
  })
  .catch((err) => console.log(err));

// experss app
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});
app.use('/blogs',blogRoutes);
app.use((req, res) => {
  res.render("404", { title: "404" });
});
