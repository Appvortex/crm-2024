'use strict';
const a309_0x139a0b = a309_0x56dc;
(function (_0x2784f2, _0x3b22be) {
  const _0x1b12ec = a309_0x56dc,
    _0x354485 = _0x2784f2();
  while (!![]) {
    try {
      const _0x21a187 =
        parseInt(_0x1b12ec(0x197)) / 0x1 +
        parseInt(_0x1b12ec(0x192)) / 0x2 +
        parseInt(_0x1b12ec(0x19a)) / 0x3 +
        parseInt(_0x1b12ec(0x19c)) / 0x4 +
        -parseInt(_0x1b12ec(0x18f)) / 0x5 +
        (parseInt(_0x1b12ec(0x188)) / 0x6) *
          (parseInt(_0x1b12ec(0x1a1)) / 0x7) +
        (parseInt(_0x1b12ec(0x191)) / 0x8) *
          (-parseInt(_0x1b12ec(0x19d)) / 0x9);
      if (_0x21a187 === _0x3b22be) break;
      else _0x354485['push'](_0x354485['shift']());
    } catch (_0x427582) {
      _0x354485['push'](_0x354485['shift']());
    }
  }
})(a309_0x3fcc, 0x46c7d);
function a309_0x56dc(_0x4fd122, _0x1424b4) {
  const _0x3fcc95 = a309_0x3fcc();
  return (
    (a309_0x56dc = function (_0x56dc67, _0x4713c0) {
      _0x56dc67 = _0x56dc67 - 0x188;
      let _0x4b5062 = _0x3fcc95[_0x56dc67];
      return _0x4b5062;
    }),
    a309_0x56dc(_0x4fd122, _0x1424b4)
  );
}
var __importDefault =
  (this && this[a309_0x139a0b(0x199)]) ||
  function (_0x570b88) {
    const _0x5954fb = a309_0x139a0b;
    return _0x570b88 && _0x570b88[_0x5954fb(0x18e)]
      ? _0x570b88
      : { default: _0x570b88 };
  };
Object[a309_0x139a0b(0x1a3)](exports, '__esModule', { value: !![] }),
  (exports[a309_0x139a0b(0x18b)] = exports[a309_0x139a0b(0x19f)] = void 0x0);
const socket_io_1 = require(a309_0x139a0b(0x19e)),
  AppError_1 = __importDefault(require('../errors/AppError')),
  userMonitor_1 = require(a309_0x139a0b(0x190));
let io;
const initIO = _0x436736 => {
  const _0x2cd04b = a309_0x139a0b;
  return (
    (io = new socket_io_1[_0x2cd04b(0x189)](_0x436736, {
      cors: { origin: process[_0x2cd04b(0x1a0)][_0x2cd04b(0x18a)] }
    })),
    io['on']('connection', async _0x118a0e => {
      const _0x188e34 = _0x2cd04b,
        { userId: _0x43cd85 } = _0x118a0e['handshake'][_0x188e34(0x194)];
      _0x118a0e['on'](_0x188e34(0x193), _0x16cf3d => {
        _0x118a0e['join'](_0x16cf3d);
      }),
        _0x118a0e['on'](_0x188e34(0x19b), () => {
          const _0x42d7f2 = _0x188e34;
          _0x118a0e[_0x42d7f2(0x196)]('notification');
        }),
        _0x118a0e['on'](_0x188e34(0x198), _0x584836 => {
          const _0x3e645a = _0x188e34;
          _0x118a0e[_0x3e645a(0x196)](_0x584836);
        }),
        userMonitor_1[_0x188e34(0x1a2)][_0x188e34(0x18d)](
          _0x188e34(0x18c),
          { id: _0x43cd85 },
          {
            removeOnComplete: { age: 0x3c * 0x3c, count: 0xa },
            removeOnFail: { age: 0x3c * 0x3c, count: 0xa }
          }
        );
    }),
    io
  );
};
exports[a309_0x139a0b(0x19f)] = initIO;
const getIO = () => {
  const _0x5e4f9d = a309_0x139a0b;
  if (!io)
    throw new AppError_1[_0x5e4f9d(0x195)](
      'Socket\x20IO\x20not\x20initialized'
    );
  return io;
};
function a309_0x3fcc() {
  const _0x4672bd = [
    'initIO',
    'env',
    '7heVKwn',
    'userMonitor',
    'defineProperty',
    '1175928xYczUd',
    'Server',
    'FRONTEND_URL',
    'getIO',
    'UserConnection',
    'add',
    '__esModule',
    '2128605yCOLyc',
    '../queues/userMonitor',
    '8LVfNZW',
    '156244dxGumV',
    'joinChatBox',
    'query',
    'default',
    'join',
    '99739ccqHFf',
    'joinTickets',
    '__importDefault',
    '1255047RfqciZ',
    'joinNotification',
    '680284wZHFfI',
    '2219679mMYAOM',
    'socket.io'
  ];
  a309_0x3fcc = function () {
    return _0x4672bd;
  };
  return a309_0x3fcc();
}
exports[a309_0x139a0b(0x18b)] = getIO;
