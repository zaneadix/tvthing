'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demoRouter = undefined;

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _demo = require('./demo.controller');

var _validateParams = require('../../middleware/validate-params');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var match = function match(regex) {
    return function (term) {
        return regex.test(term);
    };
};

/**
 * A simple module to demonstrate declarative parameter validation.
 */
var demoRouter = exports.demoRouter = (0, _koaRouter2.default)().get('/foo-is-required', (0, _validateParams.validateParams)(['query'], ['foo']), _demo.demo).get('/foo-must-be-numeric', (0, _validateParams.validateParams)(['query'], ['foo'], match(/^[0-9]*$/)), _demo.demo).post('/body-must-have-foo-with-bar', (0, _validateParams.validateParams)(['request', 'body', 'foo'], ['bar']), _demo.demo).get('/error', _demo.error).get('/error-without-message', _demo.errorWithoutMessage);