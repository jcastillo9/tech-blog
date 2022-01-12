const { Comment } = require('../models');

const commentData = [
    {
        content: 'I learned this is class today!',
        user_id: '1',
        post_id: '1',
        date_created: '12/25/2021'
    },
    {
        content: 'I am having a hard time understanding concepts but I enjoy working with my classmates.',
        user_id: '2',
        post_id: '2',
        date_created: '10/02/2021'
    },
    {
        content: 'Can you go into this a little more?',
        user_id: '3',
        post_id: '3',
        date_created: '09/25/2021'
    }
]

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;