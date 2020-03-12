const Authorization = require('./models/authorization.model.js');
const UserTable = require('./../module/tables/user.table.js');
const jwt = require('jsonwebtoken');
const authorization = new Authorization(UserTable);

const getData = (req, res) => {
    try {
      const userData = jwt.verify(req.token, 'secretKey');
      res.status(200).json(userData);
    } catch (e) {
      next(e);
    }
};

const getToken = async (req, res) => {
    try {
      const user = await authorization.getUser(req, res);
      const token = jwt.sign({user}, 'secretKey');
      res.status(200).json(token);
    } catch (e) {
      next(e);
    }
};

module.exports = { getData, getToken };
