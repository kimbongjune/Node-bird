const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User } = require("../models");

const router = express.Router();

router.post("/login", (req, res, next) => {
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
            return res.json(user);
        })
    })(req, res, next);
});

router.post("/", async (req, res, next) =>{
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

module.exports = router;