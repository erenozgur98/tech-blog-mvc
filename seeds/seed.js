// const sequelize = require('sequelize');
// const { Post } = require('../models');

// const postData = require('./postData.json');

// const seedDatabase = async () => {
//     for (const post of postData) {
//         await Post.create({
//             ...post
//         });
//     }
//     process.exit(0);
// };

// seedDatabase();

const sequelize = require('../config/connection');

const seedUsers = require('./userData');
const postData = require('./postData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedUsers;
    await postData;
    process.exit(0);
};

seedDatabase();