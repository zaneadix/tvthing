'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.errorResponder = errorResponder;

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNKNOWN_ERROR_CODE = 500;

function errorResponder(ctx, next) {
    return regeneratorRuntime.async(function errorResponder$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(next());

                case 3:
                    _context.next = 11;
                    break;

                case 5:
                    _context.prev = 5;
                    _context.t0 = _context['catch'](0);

                    ctx.status = _context.t0.status || UNKNOWN_ERROR_CODE;
                    ctx.body = _context.t0.message || '';

                    _winston2.default.error(ctx.status + ' response: ' + ctx.body);
                    if (ctx.status === UNKNOWN_ERROR_CODE) {
                        _winston2.default.error('' + _context.t0.stack);
                    }

                case 11:
                case 'end':
                    return _context.stop();
            }
        }
    }, null, this, [[0, 5]]);
}