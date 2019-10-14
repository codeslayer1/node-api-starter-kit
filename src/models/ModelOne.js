/**
 * Created by codeslayer1 on 05/10/18.
 */
'use strict';

var Utils = require('../services/Utils');
var knex = require('../../lib/knex').knexConnection;
var SqlString = require('sqlstring');
var redisClient = require('../../lib/redis').client;

module.exports = {
  /**
   * @description Sample code for an api, Any business logic or database calls go here,
   * although business logic can also go in controllers while any code related to querying DB can go in model
   * but I prefer keeping the entire logic at one place and only using controller for routing the request to appropriate model function
   * This is totally personal call on how you want to keep the architecture of your project
   * @params param1, param2
   * @returns Concatenated string of param1 and param2
   */
  sampleApiOne: function(params, cb) {
    //Check for mandatory params that needs to be passed in api
    var mandatoryParams = ['param1', 'param2'];
    var missingParam = Utils.checkMandatoryParams(params, mandatoryParams);
    if (missingParam != null) {
      return Utils.sendErrorResponse(
        400,
        {
          code: Utils.config().errorCodes.missing_params,
          message: '@' + missingParam + ' param is missing. Mandatory params are: ' + mandatoryParams,
          display_message: Utils.config().errorMessages.error_generic
        },
        cb
      );
    }

    var output = params.param1 + " " + params.param2;

    /**
     * @description Sample knex query
     * PS. Please ensure that you use SqlString escape when using strings in any knex query to prevent sql injection attacks
     */
    /*
     knex
     .raw(
     'select * from `random` where param = SqlString.escape(params.param1);'
     )
     .then(res => {
     return Utils.sendSuccessResponse(res, cb);
     })
     .catch(err => {
     return Utils.sendErrorResponse(500, err, cb);
     });
     */

    /**
     * @description Sample redis request
     */
    /*
    redisClient.get('test_redis',
      function(err, res) {
        if (err) {
          return Utils.sendErrorResponse(500, err, cb);
        }

        return Utils.sendSuccessResponse(res, cb);
      }
    );
    */

    return Utils.sendSuccessResponse(output, cb);
  }
};
