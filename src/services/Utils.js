/**
 * @description Utility functions go in this file. Any general use function that needs to be used throughout the project
 * should ideally go here
 */

var Utils = {
  /**
   * @description This function checks whether an object, array or variable is empty/null. Returns true if empty
   */
  isEmpty: function(obj) {
    // Speed up calls to hasOwnProperty
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length && obj.length > 0) return false;
    if (obj.length === 0) return true;

    if (obj.toString())
      // Otherwise, does it have any properties of its own?
      // Note that this doesn't handle
      // toString and valueOf enumeration bugs in IE < 9
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
      }
    if (!isNaN(obj)) {
      if (obj.toString().length > 0) return false;
    }

    return true;
  },

  /**
   * @description This function checks whether at least 1 param(out of params array) is present in input object and is not empty.
   * Returns 1st param that is found. If no params is present, returns null
   */
  checkOptionalParams: function(input, params) {
    for (var index in params) {
      if (input.hasOwnProperty(params[index]) && input[params[index]] != undefined) {
        return params[index];
      }
    }

    return null;
  },

  /**
   * @description This function checks whether all params(present in params array) are present in input object or not and are non empty.
   * Returns first missing params. If all params are present, returns null
   */
  checkMandatoryParams: function(object, paramsList) {
    for (var i in paramsList) {
      if (Utils.isEmpty(object[paramsList[i]])) {
        return paramsList[i];
      }
    }

    return null;
  },

  /**
   * @description This function gets all the params(post+get params) from req, sets the necessary params from headers and options
   * and returns the final params object
   */
  getAllParams: function(req) {
    var input = Object.assign({}, req.body, req.query);

    return input;
  },

  /**
   * @description Function to extract method based params
   */
  getMethodBasedParams: function(req) {
    var reqType = req.method;
    var input = {};

    if (reqType == 'POST') {
      input = req.body;
    } else if (reqType == 'GET') {
      input = req.query;
    }

    return input;
  },

  //Function to format error response
  sendErrorResponse: function(statusCode, error, cb, extras) {
    cb({ statusCode: statusCode, error: error, extras: extras });
  },

  //Function to format success response
  sendSuccessResponse: function(data, cb, extras) {
    cb(null, { data: data, extras: extras });
  },

  //Function to return local and global configs
  config: function() {
    var env = process.env.ENV || 'development';
    var globalConfigs = require('../../config/global');
    var envConfigs = require('../../config/env/' + env);
    var finalConfigs = Object.assign(globalConfigs, envConfigs);

    return finalConfigs;
  }
};

module.exports = Utils;
