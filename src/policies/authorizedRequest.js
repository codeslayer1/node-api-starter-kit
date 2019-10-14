/**
 * Created by codeslayer1 on 05/04/17.
 */

var Utils = require('../services/Utils');

module.exports = function(req, res, next) {
  //You can add any validation checks over here such as jwt, authorization header, passport.js etc, if check fails, return error else return next()

  /*
  return next({
    status: 401,
    message: Utils.config().errorMessages.error_unauthorized_access,
    code: Utils.config().errorCodes.api_unauthorized_access,
  });
  */

  //For sample, we are not adding any check and policy will directly move to controller
  return next();
};
