const { User } = require('../models');

const userData = [
    {
      username: 'Amy',
      email: 'amy@yahoo.com',
      password: 'password1'
    },
    {
      username: 'Mara',
      email: 'mara@gmail.com',
      password:  'password12'
    },
    {
      username: 'Nina',
      email: 'nina@aol.com',
      password: 'password123'
    }
  ];

  const seeduserData = () => User.bulkCreate(userData);

  module.exports = seeduserData;