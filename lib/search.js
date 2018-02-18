'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtist = exports.searchAlbum = exports.search = undefined;

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = exports.search = function search(query, type) {
  var token = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return fetch(_config2.default + 'search?q=' + query + '&type=' + type, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
  }).then(function (data) {
    return data.json();
  });
}; /* global fetch */

var searchAlbum = exports.searchAlbum = function searchAlbum(query, token) {
  return search(query, 'album', token);
};

var searchArtist = exports.searchArtist = function searchArtist(query, token) {
  return search(query, 'artist', token);
};

var searchTracks = exports.searchTracks = function searchTracks(query, token) {
  return search(query, 'tracks', token);
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query, token) {
  return search(query, 'playlist', token);
};