const { User } = require('../models');

const userData = [
    {
      username: 'Amy',
      password: 'password1'
    },
    {
      username: 'Mara',
      password:  'password12'
    },
    {
      username: 'Nina',
      password: 'password123'
    }
  ];

  const seeduserData = () => User.bulkCreate(userData);

  module.exports = seeduserData;