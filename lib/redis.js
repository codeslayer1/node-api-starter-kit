/**
 * Created by codeslayer1 on 04/04/17.
 * @description Redis singleton client. We initialize a redis client here and export it so that it can be used across the project
 * and only a single client is created for a single node instance
 */
var Utils = require('../src/services/Utils');

//set rediscloud url
process.env.REDISCLOUD_URL = "redis://:"+Utils.config().redis.password+"@"+Utils.config().redis.url+":"+Utils.config().redis.port;
process.env.ENABLE_REJSON = true;

var client = require('redis-connection-manager')();
client.select(Utils.config().redis.database,function(err,res){
  console.log("Redis started. Database is: ",Utils.config().redis.database);
});

module.exports = {
  client: client
};
