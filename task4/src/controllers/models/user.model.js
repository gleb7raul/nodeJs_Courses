  class User {
    constructor(UserTable, UserGroupTable){
        this.Users = UserTable;
        this.UserGroup = UserGroupTable;
    };

    getUsers() {
        return this.Users.findAll({
            where: {
                isDeleted: false
            }
          }).then(users => {
            console.log("All users:", JSON.parse(JSON.stringify(users, null, 4)));
            return JSON.parse(JSON.stringify(users, null, 4));
          });
    };

    setUser(req, res) {
        return this.Users.create({
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
            return this.Users.update({
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
            return this.Users.update({...req.body}, {
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
        if (currentUser) {
            return this.Users.findOne({
                include: [{
                    model: models.GroupTable,
                    as: 'GroupTable'
                  }],
                where: {
                    id: currentUser,
                    isDeleted: false
                    }
            }).then((user) => {
                console.log("Current user:", JSON.parse(JSON.stringify(user, null, 4)));
                return JSON.parse(JSON.stringify(user, null, 4));
              });
        };
    };

    getAutoSuggestUsers(req) {
        const currentPartOfLogin = req.body.login;
        const lengthStr = currentPartOfLogin.length;
        return this.getUsers().then((users)=>{
            if (currentPartOfLogin && users) {
                const suggestLogins = [];
                users.forEach((oUser) => {
                    if (!oUser.isDeleted) {
                        const currSuggest = oUser.login.substring(0, lengthStr);
                        if(currSuggest.toLowerCase() === currentPartOfLogin.toLowerCase()) {
                            suggestLogins.push(oUser.login);
                        };
                    };
                });
                return suggestLogins;
            };
        });
    };
}

module.exports = User;
