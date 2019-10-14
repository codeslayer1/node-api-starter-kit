/**
 * Created by codeslayer1 on 05/10/18
 */
var ModelOne = require('../models/ModelOne');
var Utils = require('../services/Utils');

module.exports = {
  /**
   * @description Sample controller function corresponding to sampleApiOne function in model
   * @params param1, param2
   */
  sampleApiOne: function(req, res) {
    var input = Utils.getAllParams(req);

    ModelOne.sampleApiOne(input, function(err, result) {
      if (!Utils.isEmpty(err)) {
        return res.error(err);
      }

      return res.success(result);
    });
  }
};
