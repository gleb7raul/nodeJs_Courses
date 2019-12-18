class User {
    constructor(){
        this.Users = [
            { login: 'admin', id: '1', password: '12345', age: 20, isDeleted: false },
            { login: 'UserOfHeadOffice', id: '2', password: 'bar', age: 21, isDeleted: false },
            { login: 'user', id: '3', password: 'test', age: 22, isDeleted: false }
        ];
    };

    getUsers() {
        return this.Users.filter((oUser) => oUser.isDeleted === false);
    };

    setUser(req, res) {
        const user = {
            login: req.body.login || null,
            id: req.body.id || Date.now(),
            password: req.body.password || null,
            age: req.body.age || null,
            isDeleted: false
        };
        this.Users.push(user);
    };

    deleteUser(req) {
        const currentUser = req.params.id;
        if (currentUser) {
            this.Users.forEach((oUser) => {
                if(oUser.id === currentUser) {
                    oUser.isDeleted = true;
                };
            });
        };
    };

    updateUsers(req, res) {
        const currentUser = req.params.id;
        if (currentUser) {
            const user =  this.Users.find((oUser) => oUser.id === currentUser);
            user.login = req.body.login ? req.body.login : user.login;
            user.password = req.body.password ? req.body.password : user.password;
            user.age = req.body.age ? req.body.age : user.age;
        };
    };

    getUser(req, res) {
        const currentUser = req.params.id;
        let user;
        if (currentUser) {
            return user =  this.Users.find((oUser) => oUser.id === currentUser);
        };
    };

    getAutoSuggestUsers(req) {
        const currentPartOfLogin = req.body.login;
        const lengthStr = currentPartOfLogin.length;
        if (currentPartOfLogin) {
            const suggestLogins = [];
            this.Users.forEach((oUser) => {
                const currSuggest = oUser.login.substring(0, lengthStr);
                if(currSuggest.toLowerCase() === currentPartOfLogin.toLowerCase()) {
                    suggestLogins.push(oUser.login);
                };
            });
            return suggestLogins;
        };
    };
}

module.exports = User;