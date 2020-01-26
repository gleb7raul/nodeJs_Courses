const UserTable = require('./../../module/table/user.table.js');

UserTable.sync({ force: true })
    .then(() => {
        return UserTable.create({
            login: 'admin',
            id: '1',
            password: '12345',
            age: 20,
            isDeleted: false
        })
    })
    .then(() => {
        return UserTable.create({
            login: 'UserOfHeadOffice',
            id: '2',
            password: 'bar',
            age: 21,
            isDeleted: false
        })
    })
    .then(() => {
        return UserTable.create({
            login: 'user',
            id: '3',
            password: 'test',
            age: 22,
            isDeleted: false
        })
    })
    .catch(error => console.log(error));
  

class User {
    constructor(){
        this.Users = [
            { login: 'admin', id: '1', password: '12345', age: 20, isDeleted: false },
            { login: 'UserOfHeadOffice', id: '2', password: 'bar', age: 21, isDeleted: false },
            { login: 'user', id: '3', password: 'test', age: 22, isDeleted: false }
        ];
    };

    getUsers() {
        UserTable.findAll({
            where: {
                isDeleted: false
            }
          }).then(users => {
            console.log("All users:", JSON.stringify(users, null, 4));
            return users;
          });
    };

    setUser(req, res) {
        UserTable.create({
            login: req.body.login,
            id: Date.now(),
            password: req.body.password,
            age: req.body.age,
            isDeleted: false
        }).then(() => {
            console.log("Done");
          });
    };

    deleteUser(req) {
        const currentUser = req.params.id;
        if (currentUser) {
            UserTable.update({
                isDeleted: true,
              }, {
                where: {
                  id: currentUser
                  }
                }
            ).then(() => {
                console.log("Done");
              });
        };
    };

    updateUsers(req, res) {
        const currentUser = req.params.id;
        if (currentUser) {
            UserTable.update({
                login: req.body.login ? req.body.login : user.login,
                password: req.body.password ? req.body.password : user.password,
                age: req.body.age ? req.body.age : user.age
              }, {
                where: {
                  id: currentUser,
                  isDeleted: false
                  }
                }
            ).then(() => {
                console.log("Done");
              });
        };
    };

    getUser(req, res) {
        const currentUser = req.params.id;
        let user;
        if (currentUser) {
            UserTable.findOne({
                where: {
                    id: currentUser,
                    isDeleted: false
                    }
            }).then((user) => {
                console.log("Done");
                console.log(user);
                return user;
              });
        };
    };

    getAutoSuggestUsers(req) {
        const currentPartOfLogin = req.body.login;
        const lengthStr = currentPartOfLogin.length;
        if (currentPartOfLogin) {
            const suggestLogins = [];
            this.Users.forEach((oUser) => {
                if (!oUser.isDeleted) {
                    const currSuggest = oUser.login.substring(0, lengthStr);
                    if(currSuggest.toLowerCase() === currentPartOfLogin.toLowerCase()) {
                        suggestLogins.push(oUser.login);
                    };
                };
            });
            return suggestLogins;
        };
    };
}

module.exports = User;
