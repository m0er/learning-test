var Sequelize = require('sequelize');
var sequelize = new Sequelize('sequelize', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

var User = sequelize.define('User', {
  name: Sequelize.STRING,
});

var Cart = sequelize.define('Cart', {
  userId: Sequelize.INTEGER,
  itemId: Sequelize.INTEGER
});

var Item = sequelize.define('Item', {
  title: Sequelize.STRING,
  price: Sequelize.INTEGER
});

User.sync({force: true});
Cart.sync({force: true});
Item.sync({
  force: true
}).then(function() {
  Item.create({
    title: '티셔츠',
    price: 15000
  }).then(function(item) {
    console.log('item created!');
    console.log(item.get('title'));
    console.log(item.get('price'));
  });
});
