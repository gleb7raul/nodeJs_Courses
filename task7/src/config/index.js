require('dotenv').config();

module.exports =  {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT || 5000
};
