const sequelize = require('./../../controllers/dataHelper/db.js');
const Sequelize = require('sequelize');

const Model = Sequelize.Model;
class UserTable extends Model {}
UserTable.init({
    login: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.STRING
  },
  isDeleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'UserTable'
});

module.exports = UserTable;
