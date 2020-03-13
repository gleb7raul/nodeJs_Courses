const UserGroup = require('./models/userGroup.model.js');
const UserTable = require('./../module/tables/user.table.js');
const GroupTable = require('./../module/tables/group.table.js');
const UserGroupTable = require('./../module/tables/UserGroup.table.js');
const db = require('./dataHelper/db.js');
const userGroup = new UserGroup(UserGroupTable, UserTable, GroupTable, db);

const addUsersToGroup = async (req, res) => {
    try {
      const { groupId, userIds } = req.body;
      const data = await userGroup.addUsersToGroup(groupId, userIds);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

module.exports = addUsersToGroup;