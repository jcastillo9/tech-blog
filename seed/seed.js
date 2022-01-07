const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seeduserData = require('./userData');
const seedpostData = require('./postData');
const seedcommentData = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    
    await seeduserData();

    await seedpostData();

    await seedcommentData();

    process.exit(0);
};

seedAll();