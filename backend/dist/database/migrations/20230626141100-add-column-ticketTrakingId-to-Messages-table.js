'use strict';
const a193_0x543718 = a193_0x1457;
function a193_0x1457(_0x3ebcb5, _0x4fd7c1) {
  const _0x433b3a = a193_0x433b();
  return (
    (a193_0x1457 = function (_0x145793, _0x49c717) {
      _0x145793 = _0x145793 - 0x1d0;
      let _0x1093e4 = _0x433b3a[_0x145793];
      return _0x1093e4;
    }),
    a193_0x1457(_0x3ebcb5, _0x4fd7c1)
  );
}
(function (_0x3ad9ed, _0x3f9ca1) {
  const _0xd9165a = a193_0x1457,
    _0x45569b = _0x3ad9ed();
  while (!![]) {
    try {
      const _0x5b17a9 =
        (parseInt(_0xd9165a(0x1dd)) / 0x1) *
          (-parseInt(_0xd9165a(0x1de)) / 0x2) +
        (parseInt(_0xd9165a(0x1d1)) / 0x3) *
          (-parseInt(_0xd9165a(0x1d0)) / 0x4) +
        -parseInt(_0xd9165a(0x1d9)) / 0x5 +
        (parseInt(_0xd9165a(0x1d8)) / 0x6) *
          (parseInt(_0xd9165a(0x1d7)) / 0x7) +
        -parseInt(_0xd9165a(0x1df)) / 0x8 +
        (-parseInt(_0xd9165a(0x1da)) / 0x9) *
          (parseInt(_0xd9165a(0x1e0)) / 0xa) +
        parseInt(_0xd9165a(0x1e1)) / 0xb;
      if (_0x5b17a9 === _0x3f9ca1) break;
      else _0x45569b['push'](_0x45569b['shift']());
    } catch (_0x4e2da4) {
      _0x45569b['push'](_0x45569b['shift']());
    }
  }
})(a193_0x433b, 0xc6c43);
Object[a193_0x543718(0x1db)](exports, '__esModule', { value: !![] });
const sequelize_1 = require('sequelize');
function a193_0x433b() {
  const _0x4cecb8 = [
    'addColumn',
    'TicketTraking',
    'SET\x20NULL',
    'ticketTrakingId',
    'Messages',
    '77YAWYzc',
    '246126kMJQPd',
    '529405AfctnK',
    '18FWzDuC',
    'defineProperty',
    'removeColumn',
    '46TwLdqw',
    '64138GrBSuM',
    '4761896xEeUEv',
    '2492830oWXaqo',
    '45337259tIQdWO',
    '60ZFmwVy',
    '216759KYTkPV'
  ];
  a193_0x433b = function () {
    return _0x4cecb8;
  };
  return a193_0x433b();
}
module['exports'] = {
  up: _0x51a4b3 => {
    const _0x125b5b = a193_0x543718;
    return _0x51a4b3[_0x125b5b(0x1d2)](_0x125b5b(0x1d6), _0x125b5b(0x1d5), {
      type: sequelize_1['DataTypes']['INTEGER'],
      references: { model: _0x125b5b(0x1d3), key: 'id' },
      onUpdate: _0x125b5b(0x1d4),
      onDelete: _0x125b5b(0x1d4)
    });
  },
  down: _0x10dbf5 => {
    const _0x30ae2a = a193_0x543718;
    return _0x10dbf5[_0x30ae2a(0x1dc)](_0x30ae2a(0x1d6), _0x30ae2a(0x1d5));
  }
};
