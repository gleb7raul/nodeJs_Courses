const UserGroupTable = require('./../../module/tables/UserGroup.table.js');
const UserTable = require('./../../module/tables/user.table.js');
const GroupTable = require('./../../module/tables/group.table.js');
const db = require('./../../module/db/db.js');

// UserTable.sync({ force: true })
// .then(() => {
//     return UserTable.create({
//         login: 'admin',
//         id: '11',
//         password: '12345',
//         age: 20,
//         isDeleted: false
//     })
// })
// .catch(error => console.log(error));

// GroupTable.sync({ force: true })
// .then(() => {
//     return GroupTable.create({
//         name: 'firstGroup',
//         id: '6',
//         permissions: ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES']
//     })
// })
// .catch(error => console.log(error));

// UserGroupTable.sync({ force: true })
// .then(() => {
//     return UserGroupTable.create({
//         userId: '11',
//         groupId: 'firstGroup'
//     })
// })
// .catch(error => console.log(error));

const sync = () => {
    return db.sync({ force: true });
}

const seed = () => {
    return sync()
    .then(() => {
        return Promise.all([
            UserTable.create({
                login: 'admin',
                id: '11',
                password: '12345',
                age: 20,
                isDeleted: false
            }),
            GroupTable.create({
                name: 'firstGroup',
                id: '6',
                permissions: ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES']
            })
        ])
        .then( result => {
            const user = result[0];
            const group = result[1];
            return Promise.all([
                UserGroupTable.create({
                    userId: user.id,
                    groupId: group.id
                })
            ])
        })
    })
}

seed();

module.exports = seed;
