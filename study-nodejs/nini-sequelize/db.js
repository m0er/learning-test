var Sequelize = require('sequelize');
var sequelize = new Sequelize('study-nini', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = sequelize.define('user', {
  nickname: Sequelize.STRING,
  age: Sequelize.INTEGER
});

User.sync({force: true})
  .then(function() {
    return User.create({
      nickname: 'nini',
      age: 25
    });
  });
