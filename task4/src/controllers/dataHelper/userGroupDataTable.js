const UserGroupTable = require('./../../module/tables/UserGroup.table.js');

UserGroupTable.sync({ force: true })
.then(() => {
    return UserGroupTable.create({
        userId: '1',
        groupId: '1'
    })
})
.catch(error => console.log(error));

module.exports = UserGroupTable;
