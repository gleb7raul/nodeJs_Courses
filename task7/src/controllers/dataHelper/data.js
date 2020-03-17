const users = [
    {
        login: 'admin',
        id: '1',
        password: '12345',
        age: 20,
        isDeleted: false
    },
    {
        login: 'UserOfHeadOffice',
        id: '2',
        password: 'bar',
        age: 21,
        isDeleted: false
    },
    {
        login: 'user',
        id: '3',
        password: 'test',
        age: 22,
        isDeleted: false
    }

];

const groups = [
    {
        name: 'firstGroup',
        id: '1',
        permissions: ['READ', 'WRITE', 'DELETE', 'SHARE', 'UPLOAD_FILES']
    }
];

module.exports = { users, groups };
