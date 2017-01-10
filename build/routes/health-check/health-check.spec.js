'use strict';

var _supertestAsPromised = require('supertest-as-promised');

var _supertestAsPromised2 = _interopRequireDefault(_supertestAsPromised);

var _app = require('../../app');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = _supertestAsPromised2.default.agent(_app.app.listen());

describe('Health check', function () {
  describe('GET /health/shallow', function () {
    it('should result in JSON success document', function () {
      return request.get('/health/shallow').expect(200, { ok: 'OK' });
    });
  });

  describe('GET /health/deep', function () {
    it('should result in JSON success document', function () {
      return request.get('/health/deep').expect(200, { ok: 'OK' });
    });
  });
});