'use strict';
const a184_0x30c563 = a184_0x4242;
(function (_0x3b8865, _0x22cf4a) {
  const _0x481654 = a184_0x4242,
    _0x4d0230 = _0x3b8865();
  while (!![]) {
    try {
      const _0x1b6a09 =
        parseInt(_0x481654(0x18d)) / 0x1 +
        -parseInt(_0x481654(0x187)) / 0x2 +
        (-parseInt(_0x481654(0x181)) / 0x3) *
          (-parseInt(_0x481654(0x184)) / 0x4) +
        (-parseInt(_0x481654(0x180)) / 0x5) *
          (parseInt(_0x481654(0x18b)) / 0x6) +
        parseInt(_0x481654(0x189)) / 0x7 +
        parseInt(_0x481654(0x18a)) / 0x8 +
        (-parseInt(_0x481654(0x188)) / 0x9) *
          (parseInt(_0x481654(0x18f)) / 0xa);
      if (_0x1b6a09 === _0x22cf4a) break;
      else _0x4d0230['push'](_0x4d0230['shift']());
    } catch (_0x15d67b) {
      _0x4d0230['push'](_0x4d0230['shift']());
    }
  }
})(a184_0x32f4, 0xa404c);
function a184_0x4242(_0x11e383, _0xf86626) {
  const _0x32f4e5 = a184_0x32f4();
  return (
    (a184_0x4242 = function (_0x42429, _0x2ec854) {
      _0x42429 = _0x42429 - 0x17e;
      let _0x4ea85e = _0x32f4e5[_0x42429];
      return _0x4ea85e;
    }),
    a184_0x4242(_0x11e383, _0xf86626)
  );
}
function a184_0x32f4() {
  const _0x54f78d = [
    '2895GiNIeP',
    'Users',
    'INTEGER',
    '5276xCgAsh',
    'addColumn',
    'optUserId',
    '85532uoBLjy',
    '8467749lnQQid',
    '2745456ietvOv',
    '1621232WRcAKd',
    '102828GUFcQZ',
    'Chatbots',
    '113372gOctgZ',
    'DataTypes',
    '10yMUDWa',
    'defineProperty',
    '__esModule',
    '95dDnwgU'
  ];
  a184_0x32f4 = function () {
    return _0x54f78d;
  };
  return a184_0x32f4();
}
Object[a184_0x30c563(0x17e)](exports, a184_0x30c563(0x17f), { value: !![] });
const sequelize_1 = require('sequelize');
module['exports'] = {
  up: _0x157162 => {
    const _0x42f894 = a184_0x30c563;
    return _0x157162[_0x42f894(0x185)]('Chatbots', _0x42f894(0x186), {
      type: sequelize_1[_0x42f894(0x18e)][_0x42f894(0x183)],
      references: { model: _0x42f894(0x182), key: 'id' },
      defaultValue: null,
      allowNull: !![]
    });
  },
  down: _0x3f6a0c => {
    const _0x10a12a = a184_0x30c563;
    return _0x3f6a0c['removeColumn'](_0x10a12a(0x18c), _0x10a12a(0x186));
  }
};
