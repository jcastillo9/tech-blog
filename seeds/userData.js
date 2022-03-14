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
      password:  'password12',
    },
    {
      username: 'Nina',
      email: 'nina@aol.com',
      password: 'password123'
    },
    {
      username: 'Crystal',
      email: 'crystal@aol.com',
      password: 'password1234'
    },
    {
      username: 'Monse',
      email: 'monse@aol.com',
      password: 'password12345'
    },
    {
      username: 'Janette',
      email: 'janette@aol.com',
      password: 'password123456'
    },
    {
      username: 'Adrian',
      email: 'adrian@aol.com',
      password: 'password1234567'
    }

  ];

  const seeduserData = () => User.bulkCreate(userData);

  module.exports = seeduserData;