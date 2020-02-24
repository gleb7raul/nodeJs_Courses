const sequelize = require('./../../controllers/dataHelper/db.js');
const Sequelize = require('sequelize');
const UserTable = require('./user.table.js');
const GroupTable = require('./group.table.js');

const Model = Sequelize.Model;
class UserGroup extends Model {}
UserGroup.init({
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'UserTable',
      key: 'id'
    }
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'GroupTable',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'UserGroup'
});

UserTable.belongsToMany(GroupTable, {
  through: UserGroup,
  as: 'GroupTable',
  foreignKey: 'userId'
});

GroupTable.belongsToMany(UserTable, {
  through: UserGroup,
  as: 'UserTable',
  foreignKey: 'groupId'
});

module.exports = UserGroup;
