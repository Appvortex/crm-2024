'use strict';
const a88_0x586687 = a88_0x30da;
(function (_0xc3f9f8, _0x3bda72) {
  const _0x59f02e = a88_0x30da,
    _0x2ddb8e = _0xc3f9f8();
  while (!![]) {
    try {
      const _0x13f156 =
        -parseInt(_0x59f02e(0x164)) / 0x1 +
        (parseInt(_0x59f02e(0x165)) / 0x2) *
          (parseInt(_0x59f02e(0x162)) / 0x3) +
        (parseInt(_0x59f02e(0x15e)) / 0x4) *
          (-parseInt(_0x59f02e(0x161)) / 0x5) +
        parseInt(_0x59f02e(0x16c)) / 0x6 +
        -parseInt(_0x59f02e(0x169)) / 0x7 +
        parseInt(_0x59f02e(0x15f)) / 0x8 +
        parseInt(_0x59f02e(0x16d)) / 0x9;
      if (_0x13f156 === _0x3bda72) break;
      else _0x2ddb8e['push'](_0x2ddb8e['shift']());
    } catch (_0x1a2c4c) {
      _0x2ddb8e['push'](_0x2ddb8e['shift']());
    }
  }
})(a88_0x5550, 0x3b180);
function a88_0x5550() {
  const _0x414b48 = [
    '1365ePCSUT',
    '3QAqshv',
    'SET\x20NULL',
    '200489mJpHxX',
    '583690StprMC',
    'Companies',
    'CASCADE',
    'companyId',
    '2501604MJdTZs',
    'Queues',
    'INTEGER',
    '275064mMQSSq',
    '3737592BliRrm',
    '__esModule',
    '3684inSFfH',
    '2386920yuoYMv',
    'sequelize'
  ];
  a88_0x5550 = function () {
    return _0x414b48;
  };
  return a88_0x5550();
}
Object['defineProperty'](exports, a88_0x586687(0x15d), { value: !![] });
const sequelize_1 = require(a88_0x586687(0x160));
function a88_0x30da(_0x1eb931, _0x152852) {
  const _0x5550b4 = a88_0x5550();
  return (
    (a88_0x30da = function (_0x30da0f, _0x6be00d) {
      _0x30da0f = _0x30da0f - 0x15d;
      let _0x3afc8d = _0x5550b4[_0x30da0f];
      return _0x3afc8d;
    }),
    a88_0x30da(_0x1eb931, _0x152852)
  );
}
module['exports'] = {
  up: _0x1d16b7 => {
    const _0x332f92 = a88_0x586687;
    return _0x1d16b7['addColumn'](_0x332f92(0x16a), _0x332f92(0x168), {
      type: sequelize_1['DataTypes'][_0x332f92(0x16b)],
      references: { model: _0x332f92(0x166), key: 'id' },
      onUpdate: _0x332f92(0x167),
      onDelete: _0x332f92(0x163)
    });
  },
  down: _0xb57acb => {
    return _0xb57acb['removeColumn']('Queues', 'companyId');
  }
};
