const { Post } = require('../models');

const postData = [
    {
        title: 'Why is MVC so important?',
        content: 'MVC is important to understand because it is the basic structure which most web applications are built on. The same is also true for mobile apps and desktop programs.',
        user_id: '1',
        date_created: '10/25/2021'
    },
    {
        title: 'Bootcamp Experience',
        content: 'So far so good. Looking forward to starting Project 2',
        user_id: '2',
        date_created: '09/02/2021'
    },
    {
        title: 'Authenticaion v Authorization',
        content: 'There is  difference between authentication and authorization. Authetication means confirming your own identity, whereas authorization means being allowed access to the system.',
        user_id: '3',
        date_created: '08/22/2021'
    }
];

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;