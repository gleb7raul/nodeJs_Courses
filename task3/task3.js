const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const routers = require('./src/router/routers.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routers);

function startService() {
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
