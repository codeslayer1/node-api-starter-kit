var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require("cors");
var compression = require("compression");
var helmet = require("helmet");
var Utils = require('./src/services/Utils');

//require custom-responses module so that custom responses (by default present in src/responses folder) are available project wide
require('./lib/custom-response')();

var v1Routes = require('./config/routes/v1');

var app = express();

//Middleware for logging requests (optional)
app.use(logger('dev'));

//parse application/json
app.use(bodyParser.json({limit: '50mb'}));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Helmet, To protect against different kind of vulnerabilities (optional)
app.use(helmet());

//CORS Policy (optional)
app.use(cors());
app.options('*', cors());

//Use response compression (optional)
app.use(compression());

//Routing
app.use('/v1/', v1Routes);

// if no routes found, catch 404 and return error response
app.use(function(req, res, next) {
  var response = {
    statusCode: 404,
    error: {
      "code": Utils.config().errorCodes.api_unavailable,
      "message": "No such endpoint exists"
    }
  };

  return res.error(response);
});

// error handler in case of parsing/other errors not handled by controllers
app.use(function(err, req, res, next) {
  var response = {
    statusCode: err.status || 500,
    error: {
      "code": Utils.isEmpty(err.code) ? Utils.config().errorCodes.api_unexpected_error : err.code,
      "message": err.message
    }
  };

  return res.error(response);
});

app.set('port', process.env.PORT || 1337);

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port+" Environment: ",process.env.ENV);
});

/**
 * Socket server setup below (optional, uncomment when you need to setup socket server)
 * PS. When starting via pm2 or any other process mananger in cluster mode, multiple socket servers are created
 * each on port specified in config plus app instance number (0,1,2 depending on nodes in cluster)
 */
/**
var io = require('socket.io')(parseInt(Utils.config().socket.client_port) + (process.env.NODE_APP_INSTANCE ? parseInt(process.env.NODE_APP_INSTANCE) : 0));

//Redis adapter setup for socket. You only need to use this when spinning off multiple socket servers
//and each server needs to communicate with other socket servers
var redisAdapter = require('socket.io-redis');
var redisUri = "redis://:"+Utils.config().socket.redis.password+"@"+Utils.config().socket.redis.url+":"+Utils.config().socket.redis.port;
io.adapter(redisAdapter(redisUri));

//Init socket server on particular namespace
var socketServer = io.of(Utils.config().socket.namespace);

//socket definition
socketServer.on('connection', function(socket){
  socket.on('event1', function(msg){
    //listener called when `event1` event is called. Do whatever you need to do here on this event
  });
});
 */
