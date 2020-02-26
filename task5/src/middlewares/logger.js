const debug = require('debug');

debugInfo = debug('info');

const logger = (req, res, next) => {
    // let args;

    // switch (currentMethod) {
    //     case 'getData':
    //         args = {
    //             url: req.url
    //         };
    //         break;
    //     case 'addData':
    //         args = req.body;
    //         break;
    //     case 'updateData':
    //         args = req.body;
    //         break;
    //     case 'getOneOfData':
    //         args = {
    //             id: req.params.id
    //         };
    //         break;
    //     case 'deleteData':
    //         args = {
    //             id: req.params.id
    //         };
    //         break;
    //     case 'suggestData':
    //         args = {
    //             login: req.body.login
    //         };
    //         break;
    //     case 'addUsersToGroup':
    //         args = {
    //             groupId: req.body.groupId,
    //             userIds: req.body.userIds
    //         };
    //         break;
    //     default:
    //         args = undefined;
    // }

    debugInfo(`Method: ${currentMethod},
            Data: { id:${req.params.id},
                    parameters:${req.body}
            }`);
    next();
};

module.exports = logger;