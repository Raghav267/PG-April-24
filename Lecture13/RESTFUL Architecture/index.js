const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.send("Home Route");
})

let blogs = [
    {
        id: 0,
        title: "My First Blog",
        imageUrl: "https://images.unsplash.com/photo-1674240568812-d7481f3699a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        blogText: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id: 1,
        title: "My First Blog",
        imageUrl: "https://images.unsplash.com/photo-1673894019491-4c569a62fdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        blogText: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
    {
        id: 2,
        title: "My First Blog",
        imageUrl: "https://images.unsplash.com/photo-1673964513277-360fcf5fb6ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        blogText: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
    },
];

//Get all the blogs
app.get("/blogs", (req, res) => {
    // res.send("We are on Blogs pages");
    res.render("index", { blogs });
})

// create a blog
app.post("/blogs", (req, res) => {
    res.send("we ARE CREATING A BLOG.")

})


app.listen(3000, () => {
    console.log("Server start running at 3000 port.");
})