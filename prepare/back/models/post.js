module.exports = (sequelize, DataTypes) =>{
    const Post = sequelize.define("Post", {
        content : {
            type : DataTypes.TEXT,
            allowNull : false,
        },
    },{
        charset : "utf8",
        collate : "utf8mb4_general_ci",
    });
    Post.associate = (db) =>{};
    return Post;
};