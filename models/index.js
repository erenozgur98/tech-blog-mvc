const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

Post.belongsTo(User);

Comment.belongsTo(Post);

Comment.belongsTo(User);

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

Post.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});

module.exports = { Comment, Post, User }