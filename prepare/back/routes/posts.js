const express = require("express");
const { Post, User, Image, Comment } = require("../models");

const router = express.Router();

router.get("/", async (req, res, next) =>{
    try {
        const posts = await Post.findAll({
            limit : 10,
            order : [
                ["createdAt", "DESC"],
                [Comment, "createdAt", "DESC"],
                    ],
            include : [{
                model : User,
                attributes : ["id", "nickname"],
            },{
                model : Image,
            },{
                model : Comment,
                include : [{
                    model : User,
                    attributes : ["id", "nickname"],
                }]
            },{
                model : User,
                as : "Likers",
                attributes : ["id"],
            }],
        });
        console.log(posts);
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;