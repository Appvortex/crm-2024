'use strict';
const a72_0x3469ad = a72_0x7125;
function a72_0x4853() {
  const _0xc02259 = [
    '1387120kKRwdP',
    'Messages',
    'removeColumn',
    'Contacts',
    'CASCADE',
    '__esModule',
    'INTEGER',
    '15498310KPKciY',
    '390945tPSdWc',
    '185Znnlde',
    '8tIMZDK',
    '530822HZnqSC',
    '2608YNYpIS',
    'defineProperty',
    'contactId',
    '107379tgAPBq',
    'sequelize',
    '14940pJqSsZ',
    '4620BYrbHJ',
    'exports'
  ];
  a72_0x4853 = function () {
    return _0xc02259;
  };
  return a72_0x4853();
}
(function (_0x5acea0, _0x28386e) {
  const _0x3732bf = a72_0x7125,
    _0x368be2 = _0x5acea0();
  while (!![]) {
    try {
      const _0x254428 =
        -parseInt(_0x3732bf(0x138)) / 0x1 +
        parseInt(_0x3732bf(0x148)) / 0x2 +
        (parseInt(_0x3732bf(0x145)) / 0x3) *
          (-parseInt(_0x3732bf(0x147)) / 0x4) +
        (parseInt(_0x3732bf(0x146)) / 0x5) *
          (parseInt(_0x3732bf(0x13b)) / 0x6) +
        -parseInt(_0x3732bf(0x13d)) / 0x7 +
        (parseInt(_0x3732bf(0x135)) / 0x8) *
          (-parseInt(_0x3732bf(0x13a)) / 0x9) +
        parseInt(_0x3732bf(0x144)) / 0xa;
      if (_0x254428 === _0x28386e) break;
      else _0x368be2['push'](_0x368be2['shift']());
    } catch (_0x1d1524) {
      _0x368be2['push'](_0x368be2['shift']());
    }
  }
})(a72_0x4853, 0xb3c93);
function a72_0x7125(_0x29c7f2, _0x27b735) {
  const _0x485379 = a72_0x4853();
  return (
    (a72_0x7125 = function (_0x7125e2, _0x18b3c2) {
      _0x7125e2 = _0x7125e2 - 0x135;
      let _0x4f6795 = _0x485379[_0x7125e2];
      return _0x4f6795;
    }),
    a72_0x7125(_0x29c7f2, _0x27b735)
  );
}
Object[a72_0x3469ad(0x136)](exports, a72_0x3469ad(0x142), { value: !![] });
const sequelize_1 = require(a72_0x3469ad(0x139));
module[a72_0x3469ad(0x13c)] = {
  up: _0x36a519 => {
    const _0x258363 = a72_0x3469ad;
    return _0x36a519['addColumn'](_0x258363(0x13e), _0x258363(0x137), {
      type: sequelize_1['DataTypes'][_0x258363(0x143)],
      references: { model: _0x258363(0x140), key: 'id' },
      onUpdate: _0x258363(0x141),
      onDelete: _0x258363(0x141)
    });
  },
  down: _0x46df39 => {
    const _0x1e0da2 = a72_0x3469ad;
    return _0x46df39[_0x1e0da2(0x13f)](_0x1e0da2(0x13e), _0x1e0da2(0x137));
  }
};
