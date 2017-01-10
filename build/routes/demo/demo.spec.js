'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _app = require('../../app');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = _supertestAsPromised2.default.agent(_app.app.listen());

describe('Demo', function () {
  describe('GET /demo/foo-is-required', function () {
    it('should work if the parameter is present', function () {
      return request.get('/demo/foo-is-required').query({ foo: 'abc' }).expect(200, 'It works!');
    });

    it('should result in a 400 is parameter is missing', function () {
      return request.get('/demo/foo-is-required').expect(400, 'foo is required.');
    });
  });

  describe('GET /demo/foo-must-be-numeric', function () {
    it('should work if the parameter is valid', function () {
      return request.get('/demo/foo-must-be-numeric').query({ foo: 123 }).expect(200, 'It works!');
    });

    it('should result in a 400 if the parameter is not numeric', function () {
      return request.get('/demo/foo-must-be-numeric').query({ foo: 'abc' }).expect(400, 'foo is invalid.');
    });

    it('should result in a 400 if the parameter mixes numbers with letters', function () {
      return request.get('/demo/foo-must-be-numeric').query({ foo: 'abc123' }).expect(400, 'foo is invalid.');
    });

    it('should result in a 400 if the parameter is missing', function () {
      return request.get('/demo/foo-must-be-numeric').expect(400, 'foo is required.');
    });
  });

  describe('POST /demo/body-must-have-foo-with-bar', function () {
    it('should work if the body has foo with bar', function () {
      return request.post('/demo/body-must-have-foo-with-bar').send({
        foo: {
          bar: 'abc'
        }
      }).expect(200, 'It works!');
    });

    it('should result in a 400 is foo container is missing', function () {
      return request.post('/demo/body-must-have-foo-with-bar').send({}).expect(400, 'Bad request');
    });

    it('should result in a 400 is foo container does not have bar', function () {
      return request.post('/demo/body-must-have-foo-with-bar').send({
        foo: {}
      }).expect(400, 'bar is required.');
    });
  });

  describe('GET /demo/error', function () {
    it('should result in 500 app error response', function () {
      return request.get('/demo/error').expect(500, 'App Error (this is intentional)!');
    });
  });

  describe('GET /demo/error-without-message', function () {
    it('should result in 500 app error response', function () {
      return request.get('/demo/error-without-message').expect(500, '');
    });
  });
});