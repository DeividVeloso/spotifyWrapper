'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _search = require('../src/search');

var _config = require('./config');

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