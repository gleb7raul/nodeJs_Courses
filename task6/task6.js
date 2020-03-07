const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const routers = require('./src/router/routers.js');
const init = require('./src/controllers/dataHelper');
const logger = require('./src/middlewares/logger.js');
const errorLogger = require('./src/middlewares/errorLogger.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger);
app.use(errorLogger);
app.use(routers);

process.on('uncaughtException', err => {
    console.log(`Error tracking: ${err.stack}`);
    console.log(`/==============/`);
});

process.on('unhandledRejection', err => {
    console.log('unhandledRejection', err.message);
  });

const startService = () => {
    app.get('/', function(req, res) {
        res.send(`Hi traveler!
        To get or add users add to url: /users
        To remove or update users add to url: /users/:id`);
    });

    app.listen(port, function() {
        console.log('app running on port ' + port);
    });
};

startService();
init();
