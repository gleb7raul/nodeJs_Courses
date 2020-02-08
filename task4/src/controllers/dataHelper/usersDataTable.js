const UserTable = require('./../../module/tables/user.table.js');

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

    module.exports = UserTable;
