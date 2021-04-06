const { User } = require('../models');

const userData = [
    {
        "name": "eren123",
        "email": "eren123@gmail.com",
        "password": "erenisawesome"
    },
    {
        "name": "shawn123",
        "email": "shawn123@gmail.com",
        "password": "shawnthegoat"
    },
    {
        "name": "eric123",
        "email": "eric123@gmail.com",
        "password": "ericlovesbjj"
    }
];

const seedUsers = () => {
    User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });
};

module.exports = seedUsers;