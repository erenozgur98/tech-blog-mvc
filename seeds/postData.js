const { Post } = require('../models');


const postData = [
    {
        "user_id": "1",
        "post_title": "New Post",
        "post_content": "This is a new post from seeds"
    },
    {
        "user_id": "2",
        "post_title": "New Post 2",
        "post_content": "This is a new post 2 from seeds"
    },
    {
        "user_id": "3",
        "post_title": "New Post 3",
        "post_content": "This is a new post 3 from seeds"
    }
];

const seedPosts = () => {
    Post.bulkCreate(postData)
};

module.exports = seedPosts;