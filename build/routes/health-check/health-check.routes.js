'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.healthCheckRouter = undefined;

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _healthCheck = require('./health-check.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Health check routes: used by load balancers to determine if traffic should
 * be routed to nodes.
 */
var healthCheckRouter = exports.healthCheckRouter = (0, _koaRouter2.default)().get('/shallow', _healthCheck.shallow).get('/deep', _healthCheck.deep);