(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtist = exports.searchAlbum = exports.search = undefined;

var _config = __webpack_require__(1);

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_URL = 'https://api.spotify.com/v1/';
exports.default = API_URL;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _search = __webpack_require__(0);

var _albums = __webpack_require__(3);

module.exports = {
  getAlbum: _albums.getAlbum,
  getAlbums: _albums.getAlbums,
  getAlbumTracks: _albums.getAlbumTracks,
  search: _search.search,
  searchAlbum: _search.searchAlbum,
  searchArtist: _search.searchArtist,
  searchPlaylists: _search.searchPlaylists
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _search = __webpack_require__(0);

var _config = __webpack_require__(1);

/* global fetch */

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + 'albums/' + id).then(toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + 'albums/?ids=' + ids).then(toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config.API_URL + 'albums/' + id + '/tracks').then(toJSON);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=spotify-wrapper.umd.js.map