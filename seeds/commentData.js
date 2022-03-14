const { Comment } = require('../models');

const commentData = [
    {
        content: 'I learned this is class today!',
        date_created: '2021-12-25',
        user_id: 7,
        post_id: 1
    },
    {
        content: 'I am having a hard time understanding concepts but I enjoy working with my classmates.',
        user_id: 4,
        post_id: 2,
        date_created: '2021-10-02'
    },
    {
        content: 'Can you go into this a little more?',
        user_id: 5,
        post_id: 3,
        date_created: '2021-09-25'
    }
]

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;