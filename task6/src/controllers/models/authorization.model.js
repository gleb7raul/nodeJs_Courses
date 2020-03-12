class Athorization {
    constructor(UserTable){
        this.Users = UserTable;
    };

    getUser(req, res) {
        return this.Users.findOne({
            where: {
                login: req.body.login,
                password: req.body.password,
                isDeleted: false
            }
        }).then(user => JSON.parse(JSON.stringify(user, null, 4)));
    };

}

module.exports = Athorization;
