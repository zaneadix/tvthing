'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tmdbRouter = undefined;

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _tmdb = require('./tmdb.controller');

var _projectEnv = require('../../project-env');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildURL(url) {
    var endpoint = url.replace('/tmdb', '');
    endpoint = endpoint.indexOf('?') >= 0 ? endpoint + '&' : endpoint + '?';
    endpoint = endpoint.replace(/\/\?/, '?');
    return '' + _projectEnv.TMDB.HOST + endpoint + _querystring2.default.stringify({ 'api_key': _projectEnv.TMDB.API_KEY });
}

var tmdbRouter = exports.tmdbRouter = (0, _koaRouter2.default)().use('*', function _callee(ctx, next) {
    return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    ctx.state.url = buildURL(ctx.request.url);
                    console.log(ctx.state.url);
                    _context.next = 4;
                    return regeneratorRuntime.awrap(next());

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, null, undefined);
}).get('*', _tmdb.tmdb);