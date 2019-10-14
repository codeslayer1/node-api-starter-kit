/**
 * Created by codeslayer1 on 05/04/17.
 * @description Custom error response
 */

module.exports = function(payload) {
  this.status(payload.statusCode || 500);
  var response = {
    success: false,
    error: payload.error || undefined,
    extras: payload.extras || undefined,
  };

  this.send(response);
};
