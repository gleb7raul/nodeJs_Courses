require( 'regenerator-runtime/runtime');
const {
    getData,
    addData,
    updateData,
    getOneOfData,
    deleteData,
    suggestData
} = require('./../../src/controllers/user.controller.js');
const User = require('./../../src/controllers/models/user.model.js');

//jest.mock('./../../src/controllers/models/user.model.js');
const mockPlaySoundFile = jest.fn();
jest.mock('./../../src/controllers/models/user.model.js', () => {
    return jest.fn().mockImplementation(() => {
      return {getUsers: mockPlaySoundFile};
    });
  });
  const mockJson = jest.fn();
  const mockNext = jest.fn();
  const mockRes = {
      json: mockJson
  };

describe('User Controller', () => {
    beforeEach(() => {});
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('get Users - first edition', async () => {
       await getData(mockJson, mockRes, mockNext);
        expect(mockJson).toBeCalled();

    });

    test('get Users - second edition', async () => {
        User.getUsers = jest.fn().mockImplementation(() => {
			return {};
		});
       await getData(mockJson, mockRes, mockNext);
        expect(mockJson).toBeCalled();

    });

    test('get Users - error', async () => {
        await getData(mockJson, mockRes, mockNext);
        expect(mockJson).toBeCalled();

    });

});
