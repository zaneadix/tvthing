'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shallow = shallow;
exports.deep = deep;
/**
 * Shallow health check: used by load balancers to see if this node is running
 * properly. Typically a load balancer will stop directing traffic to unhealthy
 * nodes automatically.
 */
function shallow(ctx) {
  return regeneratorRuntime.async(function shallow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx.body = { ok: 'OK' };

        case 1:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

/**
 * Deep health check: if this server depends on other services, the deep health
 * check will test that we can connect to them properly as well.
 */
function deep(ctx) {
  return regeneratorRuntime.async(function deep$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ctx.body = { ok: 'OK' };

        case 1:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
}