/**
 * Created by codeslayer1 on 05/04/17.
 * @description Custom success response
 */

module.exports = function(payload) {
  this.status(200);
  var response = {
    success: true,
    data: payload.data || undefined,
    extras: payload.extras || undefined,
  };

  this.send(response);
};
