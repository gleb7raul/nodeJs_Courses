const GroupTable = require('./../../module/tables/group.table.js');

GroupTable.sync({ force: true })
.then(() => {
    return GroupTable.create({
        name: 'firstGroup',
        id: '1',
        permissions: ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES']
    })
})
.catch(error => console.log(error));

module.exports = GroupTable;
