'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.app = undefined;

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBody = require('koa-body');

var _koaBody2 = _interopRequireDefault(_koaBody);

var _koaConvert = require('koa-convert');

var _koaConvert2 = _interopRequireDefault(_koaConvert);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaHelmet = require('koa-helmet');

var _koaHelmet2 = _interopRequireDefault(_koaHelmet);

var _koaEjs = require('koa-ejs');

var _koaEjs2 = _interopRequireDefault(_koaEjs);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _errorResponder = require('./middleware/error-responder');

var _projectEnv = require('./project-env');

var _root = require('./routes/root/root.routes');

var _healthCheck = require('./routes/health-check/health-check.routes');

var _demo = require('./routes/demo/demo.routes');

var _tmdb = require('./routes/tmdb/tmdb.routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Entry point for all modules.
var api = (0, _koaRouter2.default)().use('/', _root.rootRouter.routes()).use('/health', _healthCheck.healthCheckRouter.routes()).use('/demo', _demo.demoRouter.routes()).use('/tmdb', _tmdb.tmdbRouter.routes());

// Top level server configuration.
var app = exports.app = new _koa2.default();

/* istanbul ignore if */
if (_projectEnv.REQUEST_LOGS) {
    app.use(require('koa-morgan')('combined'));
}

// Use ejs for rendering
(0, _koaEjs2.default)(app, {
    root: _path2.default.join(__dirname, 'templates'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: true
});

app.context.render = _co2.default.wrap(app.context.render);

app.use((0, _koaHelmet2.default)()).use((0, _koaStatic2.default)(__dirname + _projectEnv.PUBLIC_DIR)).use((0, _koaConvert2.default)((0, _koaBody2.default)())).use(_errorResponder.errorResponder).use(api.routes()).use(api.allowedMethods());

var PORT = process.env.PORT || 1111;

/* istanbul ignore if */
if (require.main === module) {
    _winston2.default.info('Starting server on port ' + PORT);
    app.listen(PORT);
}