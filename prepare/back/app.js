const express = require("express");
const postRouter = require("./routes/post");

const app = express();


app.get("/", (req, res) =>{
    res.send("hello");
});

app.get("/", (req, res) =>{
    res.send("hello api");
});

app.get("/posts", (req, res) =>{
    res.json([
        {id : 1, content : "hello"},
        {id : 2, content : "hello2"},
        {id : 3, content : "hello3"},
    ]);
});

app.use("/post",postRouter);

app.listen(3060, () =>{
    console.log("server Start");
});