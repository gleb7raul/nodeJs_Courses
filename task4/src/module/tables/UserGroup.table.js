const sequelize = require('./../db/db.js');
const Sequelize = require('sequelize');

const Model = Sequelize.Model;
class UserGroupTable extends Model {}
UserGroupTable.init({
    userId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
  },
    groupId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
  }
}, {
  sequelize,
  modelName: 'UserGroup'
});

module.exports = UserGroupTable;
