import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { getAlbum, getAlbums, getAlbumTracks } from '../src/albums';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubFetched;
  let promise;
  beforeEach(() => {
    stubFetched = sinon.stub(global, 'fetch');
    promise = stubFetched.returnsPromise();
  });

  afterEach(() => {
    stubFetched.restore();
  });

  describe('Smoke test', () => {
    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });
    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call fetch method', () => {
      getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubFetched).to.have.been.calledOnce;
    });
    it('should call fetch method with correct URL', () => {
     getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubFetched).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy'
      );
     getAlbum('4aawyAB9vmqN3uQ7FjRGTq');
      expect(stubFetched).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTq'
      );
    });
    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const album = getAlbumTracks();
      expect(stubFetched).to.have.been.calledOnce;
    });

    it('should call correct URL', () => {
      const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubFetched).to.have.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks'
      );

      const album2 = getAlbumTracks('4aawyAB9vmqN3uqwerFjRGTzz');
      expect(stubFetched).to.have.calledWith(
        'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks'
      );
    });
  });
  describe('getAlbums', () => {
    it('should call fecth method', () => {
      const albumTracks = getAlbums('382ObEPsp2rxGrnsizN5TX%1A2GTWGtFfWp7KSQTwWOyo');
      expect(stubFetched).to.have.been.calledOnce;
    });
    it('should call fetch method 2', () => {
      const albumTracks = getAlbums(
        '382ObEPsp2rxGrnsizN5TX%1A2GTWGtFfWp7KSQTwWOyo'
      );
      expect(stubFetched).to.have.calledWith(
        'https://api.spotify.com/v1/albums/?ids=382ObEPsp2rxGrnsizN5TX%1A2GTWGtFfWp7KSQTwWOyo'
      );
    });
  });
});
