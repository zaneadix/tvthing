'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateParams = undefined;

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware that checks for required parameters.
 *
 * @param { string[] } containerPath - Where the parameters live in the ctx
 * instance (session,[request, body], etc.).
 *
 * @param { string[] } params - the names of the params to check.
 *
 * @param { function } validator (optional) - a function to validate the
 * parameters in question. If this is omitted, a simple presence check will
 * be performed.
 */
var validateParams = exports.validateParams = function validateParams(containerPath, params, validator) {
  return function _callee(ctx, next) {
    var container;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            container = _ramda2.default.path(containerPath, ctx);


            if (!container) {
              _winston2.default.warn('Invalid param container:', container);
              ctx.throw(400, 'Bad request');
            }

            _ramda2.default.forEach(assertValid(ctx, container, validator), params);
            _context.next = 5;
            return regeneratorRuntime.awrap(next());

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, null, undefined);
  };
};

var assertValid = function assertValid(ctx, container, validator) {
  return function (param) {
    if (!container[param]) {
      ctx.throw(400, param + ' is required.');
    }

    if (validator && !validator(container[param])) {
      ctx.throw(400, param + ' is invalid.');
    }
  };
};