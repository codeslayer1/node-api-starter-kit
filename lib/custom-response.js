/**
 * Created by codeslayer1 on 05/04/17.
 * @description Exporting function to make custom responses such as error and success (present in src/responses directory by default)
 * available throughout the project. Once required in app.js, custom responses can be used like res.error, res.success etc (see sample controller)
 */

'use strict';

var express = require('express'),
  fs = require('fs'),

  /**
   * Adds all files to the express reponse object
   * @param responsesDir Path to directory containing the response files
   */
  addResponses = function (responsesDir) {
    // Check if directory exists
    if (fs.existsSync(responsesDir)) {

      // Get user responses
      var userResponses = fs.readdirSync(responsesDir);

      // Add user responses to the express response object
      userResponses.forEach(function (reponseFileName) {
        var responseName = reponseFileName.split('.')[0];
        express.response[responseName] = require(responsesDir + '/' + reponseFileName);
      });

    }
    else {
      throw Error('The custom responses directory does not exist.');
    }
  };

module.exports = function (responsesDir) {

  // Add default responses
  addResponses(__dirname + '/../src/responses/');

  // Add custom responses if any
  if (responsesDir) {
    addResponses(responsesDir);
  }
};
