const { users, groups } = require('./data.js');
const db = require('./db.js');
const UserModel = require('./../../module/tables/user.table.js');
const GroupModel = require('./../../module/tables/group.table.js');
const UserGroupModel = require('./../../module/tables/UserGroup.table.js');

const init =  async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        await UserModel.sync({ force: true });
        await UserModel.bulkCreate(users);
        console.log('Database has been initialized successfully');
        await GroupModel.sync({ force: true });
        await GroupModel.bulkCreate(groups);
        console.log('Table Groups has been initialized successfully');
        await UserGroupModel.sync({ force: true });
        console.log('Table UserGroup has been initialized successfully');
    } catch (e) {
        console.error('Unable to connect to the database:', e);
    }
};

module.exports = init;
