const { log } = require("console");
const express = require("express");
const morgan = require("morgan");

// experss app
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

app.use(morgan("dev"));
app.use(express.static('public'));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi found an eggs",
      snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Moshi found an apple",
      snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "No No found a garlic",
      snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Seven found a orange",
      snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Mop Moo found a diamond",
      snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    },
  ];
  res.render("index", { title: "home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create" });
});
app.use((req, res) => {
  res.render("404", { title: "404" });
});
