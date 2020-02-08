const User = require('./models/user.model.js');
const UserTable = require('./dataHelper/usersDataTable.js');
const user = new User(UserTable);

const getData = async (req, res) => {
    try {
      const data = await user.getUsers();
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const addData = async (req, res) => {
    try {
      const data = await user.setUser(req, res);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const updateData = async (req, res) => {
    try {
      const data = await user.updateUsers(req, res);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const getOneOfData = async (req, res) => {
  try {
    const data = await user.getUser(req, res);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).send('Something broken!');
  }
};

const deleteData = async (req, res) => {
    try {
      const data = await user.deleteUser(req);
      res.status(200).json(data);
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const suggestData = async (req, res) => {
  try {
    const suggestsData = await user.getAutoSuggestUsers(req);
    res.status(200).json(suggestsData);
  } catch (e) {
    res.status(500).send('Something broken!');
  }
};

 module.exports = {getData, addData, updateData, getOneOfData, deleteData, suggestData};
