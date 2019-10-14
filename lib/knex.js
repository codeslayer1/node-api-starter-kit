/**
 * Created by codeslayer1 on 04/04/17.
 * @description Knex singleton connection. We initialize a knex connection here and export it so that it can be used across the project
 * and only a single connection is created for a single node instance
 */
var Utils = require('../src/services/Utils');

var knexClientObject = {
  client: 'mysql',
  connection: {
    host: Utils.config().knex.host,
    user: Utils.config().knex.user,
    password: Utils.config().knex.password,
    database: Utils.config().knex.db
  },
  pool: { min: Utils.config().knex.pool.min, max: Utils.config().knex.pool.max },
  acquireConnectionTimeout: Utils.config().knex.timeout,
  debug: Utils.config().knex.debug
};

module.exports = {
  knexConnection: require('knex')(knexClientObject)
};
