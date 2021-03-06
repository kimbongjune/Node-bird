const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User, Post } = require("../models");
const { isLoggedIn, isNotLoggedIn} = require("./middlewares");

const router = express.Router();

router.get("/", async(req, res, next) => {
    try {
        if(req.user){
            const fullUser = await User.findOne({
                where : { id : req.user.id },
                attributes : {
                    exclude : ["password"],
                },
                include : [{
                    model : Post,
                    attributes : ["id"],
                },{
                    model : User,
                    as : "Followings",
                    attributes : ["id"],
                },{
                    model : User,
                    as : "Followers",
                    attributes : ["id"],
                }]
            });
            res.status(200).json(fullUser);
        }else{
            res.status(200).json(null);
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
});

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
                    attributes : ["id"],
                },{
                    model : User,
                    as : "Followings",
                    attributes : ["id"],
                },{
                    model : User,
                    as : "Followers",
                    attributes : ["id"],
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
            return res.status(401).send("?????? ???????????? ????????? ?????????.");
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

router.patch("/nickname", isLoggedIn, async(req, res, next) => {
    try {
        await User.update({
            nickname : req.body.nickname,
        }, {
            where : { id : req.user.id },
        });
        res.status(200).json({ nickname : req.body.nickname });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.patch("/:userId/follow", isLoggedIn, async(req, res, next) => {
    try {
        const user = await User.findOne({
            where : {id : req.params.userId}});
        if(!user){
            res.status(403).send("????????? ??? ????????? ???????????? ????????????.");
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.delete("/:userId/follow", isLoggedIn, async(req, res, next) => {
    try {
        const user = await User.findOne({
            where :{id : req.params.userId}});
        if(!user){
            res.status(403).send("???????????? ??? ????????? ???????????? ????????????.");
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get("/followers", isLoggedIn, async(req, res, next) => {
    try {
        const user = await User.findOne({
            where : {id : req.user.id}});
        if(!user){
            res.status(403).send("????????? ??? ????????? ???????????? ????????????.");
        }
        const followers = await user.getFollowers();
        res.status(200).json(followers);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.get("/followings", isLoggedIn, async(req, res, next) => {
    try {
        const user = await User.findOne({
            where : {id : req.user.id}});
        if(!user){
            res.status(403).send("????????? ??? ????????? ???????????? ????????????.");
        }
        const followings = await user.getFollowings();
        res.status(200).json(followings);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.delete("/follower/:userId", isLoggedIn, async(req, res, next) => {
    try {
        const user = await User.findOne({
            where : {id : req.params.userId}});
        if(!user){
            res.status(403).send("?????? ??? ???????????? ???????????? ????????????.");
        }
        await user.removeFollowings(req.user.id);
        res.status(200).json({ UserId : parseInt(req.params.userId, 10) });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;