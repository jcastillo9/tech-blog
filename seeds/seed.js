const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seeduserData = require('./userData.js');
const seedpostData = require('./postData.js');
const seedcommentData = require('./commentData.js');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    
    await seeduserData();

    await seedpostData();

    await seedcommentData();

    process.exit(0);
};

seedAll();