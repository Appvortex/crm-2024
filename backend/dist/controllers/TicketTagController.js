'use strict';
const a39_0x537f57 = a39_0x2b5a;
(function (_0x4f5fe1, _0x41aeb5) {
  const _0x1d577d = a39_0x2b5a,
    _0x445d0b = _0x4f5fe1();
  while (!![]) {
    try {
      const _0x24f552 =
        (parseInt(_0x1d577d(0x1e8)) / 0x1) *
          (-parseInt(_0x1d577d(0x1ea)) / 0x2) +
        (-parseInt(_0x1d577d(0x1e7)) / 0x3) *
          (-parseInt(_0x1d577d(0x1f3)) / 0x4) +
        (parseInt(_0x1d577d(0x1f2)) / 0x5) *
          (-parseInt(_0x1d577d(0x1ef)) / 0x6) +
        (parseInt(_0x1d577d(0x1f7)) / 0x7) *
          (-parseInt(_0x1d577d(0x1ee)) / 0x8) +
        (parseInt(_0x1d577d(0x1f5)) / 0x9) *
          (-parseInt(_0x1d577d(0x1fa)) / 0xa) +
        (-parseInt(_0x1d577d(0x1f0)) / 0xb) *
          (parseInt(_0x1d577d(0x1fc)) / 0xc) +
        (-parseInt(_0x1d577d(0x1ed)) / 0xd) *
          (-parseInt(_0x1d577d(0x1ff)) / 0xe);
      if (_0x24f552 === _0x41aeb5) break;
      else _0x445d0b['push'](_0x445d0b['shift']());
    } catch (_0x4c040a) {
      _0x445d0b['push'](_0x445d0b['shift']());
    }
  }
})(a39_0x43c8, 0x234aa);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x29d4d8) {
    const _0x19cfe5 = a39_0x2b5a;
    return _0x29d4d8 && _0x29d4d8[_0x19cfe5(0x200)]
      ? _0x29d4d8
      : { default: _0x29d4d8 };
  };
Object[a39_0x537f57(0x1fe)](exports, a39_0x537f57(0x200), { value: !![] }),
  (exports[a39_0x537f57(0x1fb)] = exports[a39_0x537f57(0x1e9)] = void 0x0);
const TicketTag_1 = __importDefault(require(a39_0x537f57(0x1f8))),
  Tag_1 = __importDefault(require(a39_0x537f57(0x1f4))),
  store = async (_0x26b421, _0x837c9a) => {
    const _0x24c086 = a39_0x537f57,
      { ticketId: _0x2d4afb, tagId: _0x56aeca } = _0x26b421[_0x24c086(0x1f6)];
    try {
      const _0x522e99 = await TicketTag_1[_0x24c086(0x1e4)][_0x24c086(0x1f1)]({
        ticketId: _0x2d4afb,
        tagId: _0x56aeca
      });
      return _0x837c9a[_0x24c086(0x1eb)](0xc9)[_0x24c086(0x1f9)](_0x522e99);
    } catch (_0x2c3996) {
      return _0x837c9a[_0x24c086(0x1eb)](0x1f4)[_0x24c086(0x1f9)]({
        error: _0x24c086(0x1e5)
      });
    }
  };
function a39_0x2b5a(_0x249a50, _0x100d77) {
  const _0x43c8d1 = a39_0x43c8();
  return (
    (a39_0x2b5a = function (_0x2b5a89, _0x5b495e) {
      _0x2b5a89 = _0x2b5a89 - 0x1e3;
      let _0x75f013 = _0x43c8d1[_0x2b5a89];
      return _0x75f013;
    }),
    a39_0x2b5a(_0x249a50, _0x100d77)
  );
}
exports[a39_0x537f57(0x1e9)] = store;
const remove = async (_0x1bc47b, _0x303963) => {
  const _0x1db1d7 = a39_0x537f57,
    { ticketId: _0xc357fa } = _0x1bc47b[_0x1db1d7(0x1f6)];
  try {
    const _0x42f3a0 = await TicketTag_1[_0x1db1d7(0x1e4)]['findAll']({
        where: { ticketId: _0xc357fa }
      }),
      _0x532dc8 = _0x42f3a0['map'](_0x236464 => _0x236464[_0x1db1d7(0x201)]),
      _0x94d49f = await Tag_1[_0x1db1d7(0x1e4)][_0x1db1d7(0x1fd)]({
        where: { id: _0x532dc8, kanban: 0x1 }
      }),
      _0x201402 = _0x94d49f[_0x1db1d7(0x1e6)](_0x10721f => _0x10721f['id']);
    if (_0x201402)
      await TicketTag_1[_0x1db1d7(0x1e4)][_0x1db1d7(0x1e3)]({
        where: { ticketId: _0xc357fa, tagId: _0x201402 }
      });
    return _0x303963[_0x1db1d7(0x1eb)](0xc8)[_0x1db1d7(0x1f9)]({
      message: 'Ticket\x20tags\x20removed\x20successfully.'
    });
  } catch (_0x2976ff) {
    return _0x303963[_0x1db1d7(0x1eb)](0x1f4)[_0x1db1d7(0x1f9)]({
      error: _0x1db1d7(0x1ec)
    });
  }
};
function a39_0x43c8() {
  const _0x1d0a3e = [
    'Failed\x20to\x20store\x20ticket\x20tag.',
    'map',
    '3OVGAmN',
    '211924TnHNia',
    'store',
    '2bqchZl',
    'status',
    'Failed\x20to\x20remove\x20ticket\x20tags.',
    '325WNEwNg',
    '8upsGVw',
    '18baSCXN',
    '73799zkyDPi',
    'create',
    '18855Ovribk',
    '162004xBCtNM',
    '../models/Tag',
    '2130741ywEFyB',
    'params',
    '312361DTXWtp',
    '../models/TicketTag',
    'json',
    '10ieNDUD',
    'remove',
    '84jXAlRN',
    'findAll',
    'defineProperty',
    '367150WqEtYU',
    '__esModule',
    'tagId',
    'destroy',
    'default'
  ];
  a39_0x43c8 = function () {
    return _0x1d0a3e;
  };
  return a39_0x43c8();
}
exports[a39_0x537f57(0x1fb)] = remove;
