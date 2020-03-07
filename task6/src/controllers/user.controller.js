const User = require('./models/user.model.js');
const UserGroup = require('./models/group.model.js');
const GroupTable = require('./../module/tables/group.table.js');
const UserTable = require('./../module/tables/user.table.js');
const UserGroupTable = require('./../module/tables/UserGroup.table.js');
const db = require('./dataHelper/db.js');
const userGroup = new UserGroup(UserGroupTable, UserTable, GroupTable, db);
const user = new User(UserTable, userGroup, db);

const getData = async (req, res) => {
    try {
      const data = await user.getUsers();
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

const addData = async (req, res) => {
    try {
      const data = await user.setUser(req, res);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

const updateData = async (req, res) => {
    try {
      const data = await user.updateUsers(req, res);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

const getOneOfData = async (req, res) => {
  try {
    const data = await user.getUser(req, res);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

const deleteData = async (req, res) => {
    try {
      const data = await user.deleteUser(req);
      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
};

const suggestData = async (req, res) => {
  try {
    const suggestsData = await user.getAutoSuggestUsers(req);
    res.status(200).json(suggestsData);
  } catch (e) {
    next(e);
  }
};

module.exports = {getData, addData, updateData, getOneOfData, deleteData, suggestData};
