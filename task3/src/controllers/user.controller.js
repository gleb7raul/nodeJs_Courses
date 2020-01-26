const User = require('./models/user.model.js');
const user = new User;

const getData = (req, res) => {
    try {
      user.getUsers().then((users) => res.status(200).json(users));
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const addData = (req, res) => {
    try {
      res.status(200).json(user.setUser(req, res));
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const updateData = (req, res) => {
    try {
      res.status(200).json(user.updateUsers(req, res));
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const getOneOfData = (req, res) => {
  try {
    user.getUser(req, res).then((user) => res.status(200).json(user));
  } catch (e) {
    res.status(500).send('Something broken!');
  }
};

const deleteData = (req, res) => {
    try {
      res.status(200).json(user.deleteUser(req));
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const suggestData = (req, res) => {
  try {
    user.getAutoSuggestUsers(req).then((suggestsData) => res.status(200).json(suggestsData));
  } catch (e) {
    res.status(500).send('Something broken!');
  }
};

 module.exports = {getData, addData, updateData, getOneOfData, deleteData, suggestData};
