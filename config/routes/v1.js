/**
 * Created by codeslayer1 on 02/04/17.
 */
var express = require('express');
var router = express.Router();
var controllers = require('require-all')(__dirname + '/../../src/controllers/');
var policies = require('require-all')(__dirname + '/../../src/policies/');
var Utils = require('../../src/services/Utils');

//Model One Controller
//You can add any number of policies to a route. In case no authentication is required on any api, remove the policy
//.post, .get specifies the http method for the api
router
  .post('/api-one', policies.authorizedRequest, function(req, res, next) {
    controllers.ModelOneController.sampleApiOne(req, res);
  })
  .get('/api-two', policies.authorizedRequest, function(req, res, next) {
    //api two routing here
  });

module.exports = router;
