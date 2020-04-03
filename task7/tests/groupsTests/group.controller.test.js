require( 'regenerator-runtime/runtime');
const Group = require('./../../src/controllers/models/group.model.js');
const testGroup = new Group();
const mockJson = jest.fn();
const mockRes = {
      json: mockJson
};
const req = {
    body: {}
};

describe('Group Controller', () => {
    beforeEach(() => {});
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('get Groups', async () => {
        testGroup.getGroups = jest.fn().mockImplementation(() => {
			return Promise.resolve([{name: 'Cars'}, {name: 'Plans'}]);
		});
        const groups = await testGroup.getGroups();

        expect(testGroup.getGroups).toHaveBeenCalled();
        expect(groups.length).toEqual(2);
        expect(groups).toEqual([{name: 'Cars'}, {name: 'Plans'}]);
    });

    test('get Group By Id', async () => {
        testGroup.getGroupById = jest.fn().mockImplementation(() => {
			return Promise.resolve([{name: 'Cars'}]);
		});
        const group = await testGroup.getGroupById(req, mockRes);

        expect(testGroup.getGroupById).toHaveBeenCalled();
        expect(group.length).toEqual(1);
        expect(group[0]).toEqual({name: 'Cars'});
    });

    test('update Group', async () => {
        testGroup.updateGroup = jest.fn().mockImplementation(() => {
			return Promise.resolve([{name: 'Girls'}]);
		});
        const group = await testGroup.updateGroup(req, mockRes);

        expect(testGroup.updateGroup).toHaveBeenCalled();
        expect(group.length).toEqual(1);
        expect(group[0].name).toEqual('Girls');
    });

    test('create Group', async () => {
        testGroup.createGroup = jest.fn().mockImplementation(() => {
			return Promise.resolve([{name: 'Pens'}]);
		});
        const group = await testGroup.createGroup(req, mockRes);

        expect(testGroup.createGroup).toHaveBeenCalled();
        expect(group.length).toEqual(1);
        expect(group[0]).toEqual({name: 'Pens'});
    });

    test('remove Group', async () => {
        testGroup.removeGroup = jest.fn().mockImplementation(() => {
			return Promise.resolve([]);
		});
        const groups = await testGroup.removeGroup(req, mockRes);

        expect(testGroup.removeGroup).toHaveBeenCalled();
        expect(groups.length).toEqual(0);
        expect(groups).toEqual([]);
    });

});
