'use strict';
const a270_0x27d581 = a270_0x3a8b;
function a270_0x3a8b(_0x37898f, _0x4902c9) {
  const _0x442f1e = a270_0x442f();
  return (
    (a270_0x3a8b = function (_0x3a8bd9, _0x2b149c) {
      _0x3a8bd9 = _0x3a8bd9 - 0x7f;
      let _0x1ecaa1 = _0x442f1e[_0x3a8bd9];
      return _0x1ecaa1;
    }),
    a270_0x3a8b(_0x37898f, _0x4902c9)
  );
}
(function (_0x1bbf11, _0x1fba6e) {
  const _0x51783f = a270_0x3a8b,
    _0x42de0f = _0x1bbf11();
  while (!![]) {
    try {
      const _0x5977e9 =
        parseInt(_0x51783f(0x80)) / 0x1 +
        (-parseInt(_0x51783f(0x7f)) / 0x2) * (parseInt(_0x51783f(0x86)) / 0x3) +
        (-parseInt(_0x51783f(0x85)) / 0x4) * (parseInt(_0x51783f(0x89)) / 0x5) +
        (parseInt(_0x51783f(0x87)) / 0x6) * (-parseInt(_0x51783f(0x94)) / 0x7) +
        parseInt(_0x51783f(0x8c)) / 0x8 +
        (-parseInt(_0x51783f(0x91)) / 0x9) *
          (-parseInt(_0x51783f(0x81)) / 0xa) +
        (-parseInt(_0x51783f(0x8b)) / 0xb) * (-parseInt(_0x51783f(0x83)) / 0xc);
      if (_0x5977e9 === _0x1fba6e) break;
      else _0x42de0f['push'](_0x42de0f['shift']());
    } catch (_0x3d31c3) {
      _0x42de0f['push'](_0x42de0f['shift']());
    }
  }
})(a270_0x442f, 0x1a29d);
Object[a270_0x27d581(0x8e)](exports, a270_0x27d581(0x90), { value: !![] });
function a270_0x442f() {
  const _0x2c8aa8 = [
    '1152594AoxWEw',
    'exports',
    '10GyFqrS',
    'SET\x20NULL',
    '11xhTJRh',
    '162760fwuZKI',
    'whatsappId',
    'defineProperty',
    'DataTypes',
    '__esModule',
    '1706814tYXqzW',
    'addColumn',
    'Whatsapps',
    '7JWOiyN',
    'CASCADE',
    'sequelize',
    'INTEGER',
    '133822KcdkEd',
    '49009iREiZe',
    '10ihCzNN',
    'removeColumn',
    '4287144cAfRWH',
    'Contacts',
    '366352truAfO',
    '6OpHuXa'
  ];
  a270_0x442f = function () {
    return _0x2c8aa8;
  };
  return a270_0x442f();
}
const sequelize_1 = require(a270_0x27d581(0x96));
module[a270_0x27d581(0x88)] = {
  up: _0x19eade => {
    const _0x50b9a1 = a270_0x27d581;
    return _0x19eade[_0x50b9a1(0x92)]('Contacts', _0x50b9a1(0x8d), {
      type: sequelize_1[_0x50b9a1(0x8f)][_0x50b9a1(0x97)],
      references: { model: _0x50b9a1(0x93), key: 'id' },
      onUpdate: _0x50b9a1(0x95),
      onDelete: _0x50b9a1(0x8a)
    });
  },
  down: _0x4cc673 => {
    const _0x59ccc3 = a270_0x27d581;
    return _0x4cc673[_0x59ccc3(0x82)](_0x59ccc3(0x84), _0x59ccc3(0x8d));
  }
};
