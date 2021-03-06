const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const postsRouter = require("./routes/posts");

const db = require("./models");
const passportConfig = require("./passport");
const passport = require("passport");
const session = require("express-session");
const cookireParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

db.sequelize.sync()
    .then(() =>{
        console.log("db 연결 성공");
    })
    .catch(console.error);

passportConfig();

app.use(morgan("dev"));
app.use(cors({
    origin : true,
    credentials : true,
}));

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookireParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized : false,
    resave : false,
    secret : process.env.COOKIE_SECRET
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) =>{
    res.send("hello");
});

app.get("/", (req, res) =>{
    res.send("hello api");
});

app.use("/post",postRouter);
app.use("/user",userRouter);
app.use("/posts",postsRouter);

app.listen(3060, () =>{
    console.log("servers Start");
});