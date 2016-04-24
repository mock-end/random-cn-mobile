'use strict';

var pickItem      = require('pick-item');
var toString      = require('to-str');
var randomNatural = require('random-natural');

var isps = [
  134, 135, 136, 137, 138, 139, 147, 150, 151, 152, 157, 158, 159, 182, 183, 184, 187, 188, 178,
  130, 131, 132, 145, 155, 156, 185, 186, 176,
  133, 134, 153, 180, 181, 189, 177, 173,
  176, 173, 177, 178, 170,
  140, 141, 142, 143, 144, 146, 148, 149, 154];

module.exports = function (isp) {

  isp = isp ? toString(isp) : pickItem(isps);

  var result = '';
  var left   = 8;

  while (left--) {
    result += '' + randomNatural(0, 9);
  }

  result = isp + result;

  return result;
};
