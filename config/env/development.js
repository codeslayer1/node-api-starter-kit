/**
 * Created by codeslayer1 on 03/04/17.
 */
module.exports = {
  knex: {
    host: 'hostname',
    user: 'username',
    password: 'password',
    db: 'database',
    pool: {
      // min and max connections for pooling (For each instance of this server,
      // at least min no. of mysql connections will be opened which can go upto max no. of connections depending on load
      min: 2,
      max: 50
    },
    timeout: 10000, //connection timeout in ms,
    debug: false
  },

  redis: {
    url: "localhost",
    port: '6379',
    database: '1',
    password: 'password',
  },

  socket: {
    client_host: 'http://localhost',
    client_port: 1438, //default port, process_number is added to this port when initializing/connecting to socket via pm2,
    namespace: 'namespace',
    //redis configs for socket.io redis adapter
    redis: {
      url: "localhost",
      port: '6379',
      password: 'password'
    }
  }
};
