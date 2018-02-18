"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = exports.toJSON = function toJSON(data) {
  return data.then(function (json) {
    return json.toJson();
  });
};