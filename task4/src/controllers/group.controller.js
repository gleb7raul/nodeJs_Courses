const Group = require('./models/group.model.js');
const GroupTable = require('./../module/tables/group.table.js');
const group = new Group(GroupTable);

const getData = async (req, res) => {
    try {
      const data = await group.getGroups();
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const addData = async (req, res) => {
    try {
      const data = await group.createGroup(req, res);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const updateData = async (req, res) => {
    try {
      const data = await group.updateGroup(req, res);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const getOneOfData = async (req, res) => {
    try {
      const data = await group.getGroupById(req, res);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const deleteData = async (req, res) => {
    try {
      const data = await group.removeGroup(req);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

module.exports = {getData, addData, updateData, getOneOfData, deleteData};
