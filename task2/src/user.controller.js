const user = require('./user.model.js');
const User = new user;

const getData = (req, res) => {
    try {
      res.status(200).json(User.getUsers());
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const addData = (req, res) => {
    try {
      res.status(200).json(User.setUser(req, res));
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const updateData = (req, res) => {
    try {
      res.status(200).json(User.updateUsers(req, res));
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const getOneOfData = (req, res) => {
  try {
    res.status(200).json(User.getUser(req, res));
  } catch (e) {
    res.status(500).send('Something broken!');
  }
};

const deleteData = (req, res) => {
    try {
      res.status(200).json(User.deleteUser(req));
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const suggestData = (req, res) => {
  try {
    res.status(200).json(User.getAutoSuggestUsers(req));
  } catch (e) {
    res.status(500).send('Something broken!');
  }
};

 module.exports = {getData, addData, updateData, getOneOfData, deleteData, suggestData};