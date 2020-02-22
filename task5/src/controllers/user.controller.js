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
      debugInfo(`${req.method} ${req.url}`);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const addData = async (req, res) => {
    try {
      const data = await user.setUser(req, res);
      res.status(200).json(data);
      debugInfo(`${req.method}, ${req.body}`);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const updateData = async (req, res) => {
    try {
      const data = await user.updateUsers(req, res);
      res.status(200).json(data);
      debugInfo(`${req.method}, id:${req.params.id}, data:${req.body}`);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const getOneOfData = async (req, res) => {
  try {
    const data = await user.getUser(req, res);
    res.status(200).json(data);
    debugInfo(`${req.method}, id:${req.params.id}`);
  } catch (e) {
    res.status(500).send('Something broken!');
  }
};

const deleteData = async (req, res) => {
    try {
      const data = await user.deleteUser(req);
      res.status(200).json(data);
      debugInfo(`${req.method}, id:${req.params.id}`);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const suggestData = async (req, res) => {
  try {
    const suggestsData = await user.getAutoSuggestUsers(req);
    res.status(200).json(suggestsData);
    debugInfo(`${req.method}, ${req.body}`);
  } catch (e) {
    res.status(500).send('Something broken!');
  }
};

module.exports = {getData, addData, updateData, getOneOfData, deleteData, suggestData};
