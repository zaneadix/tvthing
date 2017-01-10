'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tmdb = tmdb;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestData(url) {
    return new Promise(function (resolve, reject) {
        (0, _request2.default)(url, function (error, response, body) {
            resolve(body);
        });
    });
}

function tmdb(ctx, next) {
    var data;
    return regeneratorRuntime.async(function tmdb$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return regeneratorRuntime.awrap(requestData(ctx.state.url));

                case 2:
                    data = _context.sent;

                    ctx.body = data;
                    return _context.abrupt('return', next());

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, null, this);
};