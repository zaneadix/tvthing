'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo = demo;
exports.error = error;
exports.errorWithoutMessage = errorWithoutMessage;
function demo(ctx) {
  return regeneratorRuntime.async(function demo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx.body = 'It works!';

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

/**
 * Demo Error Responder: Deliberataly return 500 error for testing.
 */
function error(ctx) {
  return regeneratorRuntime.async(function error$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ctx.status = 500;
          ctx.message = 'App Error (this is intentional)!';

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
}

/**
 * Demo Error Responder: Deliberataly return 500 error without message for testing.
 */
function errorWithoutMessage() {
  return regeneratorRuntime.async(function errorWithoutMessage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // eslint-disable-next-line no-console
          console.log('About to throw an error deliberately, ignore it.');
          throw new Error('');

        case 2:
        case 'end':
          return _context3.stop();
      }
    }
  }, null, this);
}