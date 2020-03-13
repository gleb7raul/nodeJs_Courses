const Group = require('./models/group.model.js');
const UserGroup = require('./models/group.model.js');
const GroupTable = require('./../module/tables/group.table.js');
const UserTable = require('./../module/tables/user.table.js');
const UserGroupTable = require('./../module/tables/UserGroup.table.js');
const db = require('./dataHelper/db.js');
const userGroup = new UserGroup(UserGroupTable, UserTable, GroupTable, db);
const group = new Group(GroupTable, userGroup, db );

const getData = async (req, res) => {
    try {
      const data = await group.getGroups();
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

const addData = async (req, res) => {
    try {
      const data = await group.createGroup(req, res);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

const updateData = async (req, res) => {
    try {
      const data = await group.updateGroup(req, res);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

const getOneOfData = async (req, res) => {
    try {
      const data = await group.getGroupById(req, res);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

const deleteData = async (req, res) => {
    try {
      const data = await group.removeGroup(req);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

module.exports = {getData, addData, updateData, getOneOfData, deleteData};
