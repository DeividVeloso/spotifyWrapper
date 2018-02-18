/* global fetch */

import API_URL from './config';

export const search = (query, type, token = '') => fetch(`${API_URL}search?q=${query}&type=${type}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then(data => data.json());

export const searchAlbum = (query, token) => search(query, 'album', token);

export const searchArtist = (query, token) => search(query, 'artist', token);

export const searchTracks = (query, token) => search(query, 'tracks', token);

export const searchPlaylists = (query, token) => search(query, 'playlist', token);
