require( 'regenerator-runtime/runtime');
const User = require('./../../src/controllers/models/user.model.js');
const testUser = new User();
const mockJson = jest.fn();
const mockRes = {
      json: mockJson
};
const req = {
    body: {}
};

describe('User Controller', () => {
    beforeEach(() => {});
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('get Users', async () => {
        testUser.getUsers = jest.fn().mockImplementation(() => {
			return Promise.resolve([{login: 'Hleb'}, {login: 'Anna'}]);
		});
        const users = await testUser.getUsers();

        expect(testUser.getUsers).toHaveBeenCalled();
        expect(users.length).toEqual(2);
        expect(users).toEqual([{login: 'Hleb'}, {login: 'Anna'}]);
    });

    test('set User', async () => {
        testUser.setUser = jest.fn().mockImplementation(() => {
			return Promise.resolve([{login: 'Hleb'}]);
		});
        const users = await testUser.setUser(req, mockRes);

        expect(testUser.setUser).toHaveBeenCalled();
        expect(users.length).toEqual(1);
        expect(users[0]).toEqual({login: 'Hleb'});
    });

    test('delete User', async () => {
        testUser.deleteUser = jest.fn().mockImplementation(() => {
			return Promise.resolve([]);
		});
        const users = await testUser.deleteUser(req);

        expect(testUser.deleteUser).toHaveBeenCalled();
        expect(users.length).toEqual(0);
        expect(users).toEqual([]);
    });

    test('update User', async () => {
        testUser.updateUsers = jest.fn().mockImplementation(() => {
			return Promise.resolve([{login: 'Hleb'}]);
		});
        const user = await testUser.updateUsers(req, mockRes);

        expect(testUser.updateUsers).toHaveBeenCalled();
        expect(user.length).toEqual(1);
        expect(user[0].login).toEqual('Hleb');
    });

    test('get User', async () => {
        testUser.getUser = jest.fn().mockImplementation(() => {
			return Promise.resolve([{login: 'Hleb'}]);
		});
        const user = await testUser.getUser(req, mockRes);

        expect(testUser.getUser).toHaveBeenCalled();
        expect(user.length).toEqual(1);
        expect(user[0]).toEqual({login: 'Hleb'});
    });

});
