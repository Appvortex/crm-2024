'use strict';
const a118_0x110db5 = a118_0x9c85;
function a118_0x402e() {
  const _0x2f142b = [
    '8IoOVJe',
    '25030RhgURI',
    '4nCISzK',
    'addColumn',
    'sequelize',
    '__esModule',
    'defineProperty',
    'exports',
    '20LpcAsa',
    'CASCADE',
    '1028638WaTJEd',
    '2387XNTiif',
    'Users',
    'removeColumn',
    '1335429HoaCPh',
    'QuickMessages',
    '1587150ohpGSB',
    '192018bBYoAb',
    'userId',
    '2329146CUqbUQ',
    '4539094ifqecD'
  ];
  a118_0x402e = function () {
    return _0x2f142b;
  };
  return a118_0x402e();
}
function a118_0x9c85(_0x1b55e1, _0x4bbbb2) {
  const _0x402e9d = a118_0x402e();
  return (
    (a118_0x9c85 = function (_0x9c852f, _0x10841e) {
      _0x9c852f = _0x9c852f - 0x12a;
      let _0x32d7ec = _0x402e9d[_0x9c852f];
      return _0x32d7ec;
    }),
    a118_0x9c85(_0x1b55e1, _0x4bbbb2)
  );
}
(function (_0x2dfd81, _0x2ec515) {
  const _0x19e67a = a118_0x9c85,
    _0x222719 = _0x2dfd81();
  while (!![]) {
    try {
      const _0x4e88da =
        parseInt(_0x19e67a(0x12c)) / 0x1 +
        parseInt(_0x19e67a(0x132)) / 0x2 +
        (-parseInt(_0x19e67a(0x130)) / 0x3) *
          (parseInt(_0x19e67a(0x139)) / 0x4) +
        (-parseInt(_0x19e67a(0x12a)) / 0x5) *
          (-parseInt(_0x19e67a(0x133)) / 0x6) +
        (-parseInt(_0x19e67a(0x136)) / 0x7) *
          (parseInt(_0x19e67a(0x137)) / 0x8) +
        parseInt(_0x19e67a(0x135)) / 0x9 +
        (-parseInt(_0x19e67a(0x138)) / 0xa) *
          (parseInt(_0x19e67a(0x12d)) / 0xb);
      if (_0x4e88da === _0x2ec515) break;
      else _0x222719['push'](_0x222719['shift']());
    } catch (_0x59d4bb) {
      _0x222719['push'](_0x222719['shift']());
    }
  }
})(a118_0x402e, 0x8bb7b);
Object[a118_0x110db5(0x13d)](exports, a118_0x110db5(0x13c), { value: !![] });
const sequelize_1 = require(a118_0x110db5(0x13b));
module[a118_0x110db5(0x13e)] = {
  up: _0x565f46 => {
    const _0x35c220 = a118_0x110db5;
    return _0x565f46[_0x35c220(0x13a)](_0x35c220(0x131), 'userId', {
      type: sequelize_1['DataTypes']['INTEGER'],
      references: { model: _0x35c220(0x12e), key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: _0x35c220(0x12b)
    });
  },
  down: _0xe5e7fc => {
    const _0x50fd0f = a118_0x110db5;
    return _0xe5e7fc[_0x50fd0f(0x12f)]('QuickMessages', _0x50fd0f(0x134));
  }
};
