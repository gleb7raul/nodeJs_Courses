const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    format: format.combine(
        format.colorize(),
        format.splat(),
        format.simple()
    ),
    transports: [
        new transports.Console()
    ]
});

const errorLogger = (error, req, res, next) => {
        logger.log('error', `error status is ${error.status}, error message is ${error.message}`);
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message
            }
        });
        next();
};

module.exports = errorLogger;
