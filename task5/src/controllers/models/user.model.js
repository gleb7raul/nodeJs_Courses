  class User {
    constructor(UserTable, userGroup, db){
        this.Users = UserTable;
        this.UserGroups = userGroup;
        this.db = db;
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

    async deleteUser(req) {
        let transaction;
        const currentUser = req.params.id;
        if (currentUser) {
            try {
                transaction = await this.db.transaction();
                await this.UserGroups.deleteByUserId(currentUser);
                const user = await this.Users.update({
                    isDeleted: true,
                      },
                      {
                        where: {
                            id: currentUser
                        },
                        transaction,
                        returning: true
                    }
                );
                await transaction.commit();
                return user;
            } catch (e) {
                if (transaction) await transaction.rollback();
                console.log(e);
            }
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
