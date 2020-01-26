const Sequelize = require('sequelize');

const sequelize = new Sequelize('d1u7gj9seqre1v', 'ezdvlwqmtsvhqz', '3ebce9d1e2bccd1eb290c440038aa0faacf038b8a481de5c1c6213629a8616f7', {
  host: 'ec2-54-247-170-5.eu-west-1.compute.amazonaws.com',
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
},
pool: {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
}
});

sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = sequelize;
