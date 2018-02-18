import { searchAlbum } from '../src';

global.fetch = require('node-fetch');
const token = 'BQDSAABwTzXYjNKLj1ZBPucxlAjdijp2xM_qmLHFpYzJAgk7qiXfB9lzFPGPM-4jPCsdIhWS-35qXBmynjMPh-G18CQ4QJXPnFb-K6HsM-WbtHvUDrIzVFFasA1qCbXVz4Eqh5i8G5gca1xCvlFhJwlF2rihjh5rnIZL_mqGg6nhSYuhS1oLMrvjeb7FplqpVsnxfd0CeYZ1dvVOVAQZ93Cusrj9MokkT68kKFyujA74uGg4kLUJRsm_r4NsolcDTLA-qN1P16PGtI15a_-ZJksMuPI';
const albums = searchAlbum('Kings of leon', token);
albums.then(data => console.log(data));
