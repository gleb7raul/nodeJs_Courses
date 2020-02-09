const sequelize = require('./../db/db.js');
const Sequelize = require('sequelize');

const Model = Sequelize.Model;
class GroupTable extends Model {}
GroupTable.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
  },
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
  },
    permissions: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
  }
}, {
  sequelize,
  modelName: 'GroupTable'
});

module.exports = GroupTable;
