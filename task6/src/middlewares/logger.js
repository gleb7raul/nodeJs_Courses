const debug = require('debug');

debugInfo = debug('info');

const logger = (req, res, next) => {
    debugInfo(`Method: ${req.method},
        Data: { id:${req.params.id},
        parameters:${req.body}
    }`);
    next();
};

module.exports = logger;
