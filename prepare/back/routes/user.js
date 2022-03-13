const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User, Post } = require("../models");
const { isLoggedIn, isNotLoggedIn} = require("./middlewares");

const router = express.Router();

router.post("/login", isNotLoggedIn, (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if(err){
            console.error(err);
            return next(err);
        }
        if(info){
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if(loginErr){
                console.err(loginErr);
                return next(loginErr);
            }
            const fullUser = await User.findOne({
                where : { id : user.id },
                attributes : {
                    exclude : ["password"],
                },
                include : [{
                    model : Post,
                },{
                    model : User,
                    as : "Followings",
                },{
                    model : User,
                    as : "Followers",
                }]
            });
            return res.status(200).json(fullUser);
        })
    })(req, res, next);
});

router.post("/", isNotLoggedIn, async (req, res, next) =>{
    try{
        const exUser = await User.findOne({
            where :{
                email : req.body.email,
            }
        });
        if(exUser){
            return res.status(401).send("이미 사용중인 아이디 입니다.");
        }
        const hashPassword = await bcrypt.hash(req.body.password, 13);
        await User.create({
            email : req.body.email,
            nickname : req.body.nickname,
            password : hashPassword,
        });
        //res.setHeader("Acess-Control-Allow-Origin", "*");
        res.status(200).send("ok");
    }catch(error){
        console.error(error);
        next(error);
    }
    
});

router.post("/logout", (req, res) => {
    req.logOut();
    req.session.destroy();
    res.send("ok");
});

module.exports = router;