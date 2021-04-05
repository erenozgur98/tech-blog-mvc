const sequelize = require('sequelize');
const { Post } = require('../models');

const postData = require('./postData.json');

const seedDatabase = async () => {
    for (const post of postData) {
        await Post.create({
            ...post
        });
    }
    process.exit(0);
}

seedDatabase();