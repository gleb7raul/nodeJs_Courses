const user = require('./userOperations.js');
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
      res.status(200).json(User.setUser(req));
    } catch (e) {
      res.status(500).send('Something broken!');
    }
};

const updateData = (req, res) => {
    try {
      res.status(200).json(User.updateUsers(req));
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

 module.exports = {getData, addData, updateData, deleteData};