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
      debugInfo(`${req.method} ${req.url}`);
    } catch (e) {
      res.status(500).send(`Method:${req.method}, Data: ${req.url}, Error:${e}`);
    }
};

const addData = async (req, res) => {
    try {
      const data = await group.createGroup(req, res);
      res.status(200).json(data);
      debugInfo(`${req.method}, ${req.body}`);
    } catch (e) {
      res.status(500).send(`Method:${req.method}, Data: ${req.body}, Error:${e}`);
    }
};

const updateData = async (req, res) => {
    try {
      const data = await group.updateGroup(req, res);
      res.status(200).json(data);
      debugInfo(`${req.method}, id:${req.params.id}, data:${req.body}`);
    } catch (e) {
      res.status(500).send(`Method:${req.method}, Data: { id:${req.params.id}, arguments:${req.body} }, Error:${e}`);
    }
};

const getOneOfData = async (req, res) => {
    try {
      const data = await group.getGroupById(req, res);
      res.status(200).json(data);
      debugInfo(`${req.method}, id:${req.params.id}`);
    } catch (e) {
      res.status(500).send(`Method:${req.method}, Data: { id:${req.params.id} }, Error:${e}`);
    }
};

const deleteData = async (req, res) => {
    try {
      const data = await group.removeGroup(req);
      res.status(200).json(data);
      debugInfo(`${req.method}, id:${req.params.id}`);
    } catch (e) {
      res.status(500).send(`Method:${req.method}, Data: { id:${req.params.id} }, Error:${e}`);
    }
};

module.exports = {getData, addData, updateData, getOneOfData, deleteData};
