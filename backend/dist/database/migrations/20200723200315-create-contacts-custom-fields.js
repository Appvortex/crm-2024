'use strict';
function a57_0x28ab() {
  const _0x45d5ca = [
    'STRING',
    '3253920rSQyEB',
    'createTable',
    '1251zoXhKd',
    '680191pxpbwP',
    'ContactCustomFields',
    'dropTable',
    '273xPHGmK',
    '71896fdpqfY',
    '66996NsMkez',
    'DataTypes',
    'CASCADE',
    '145290tVhmSl',
    'INTEGER',
    'exports',
    '2452640wrmcAf',
    'Contacts',
    'sequelize',
    '__esModule',
    '2158920RsTrwl',
    'DATE'
  ];
  a57_0x28ab = function () {
    return _0x45d5ca;
  };
  return a57_0x28ab();
}
const a57_0x146c42 = a57_0x247a;
(function (_0x2cb740, _0x393654) {
  const _0x3025d0 = a57_0x247a,
    _0x51e7f4 = _0x2cb740();
  while (!![]) {
    try {
      const _0x1f3216 =
        -parseInt(_0x3025d0(0x117)) / 0x1 +
        parseInt(_0x3025d0(0x11f)) / 0x2 +
        -parseInt(_0x3025d0(0x126)) / 0x3 +
        -parseInt(_0x3025d0(0x122)) / 0x4 +
        parseInt(_0x3025d0(0x114)) / 0x5 +
        (parseInt(_0x3025d0(0x11c)) / 0x6) *
          (parseInt(_0x3025d0(0x11a)) / 0x7) +
        (-parseInt(_0x3025d0(0x11b)) / 0x8) *
          (-parseInt(_0x3025d0(0x116)) / 0x9);
      if (_0x1f3216 === _0x393654) break;
      else _0x51e7f4['push'](_0x51e7f4['shift']());
    } catch (_0xcd912c) {
      _0x51e7f4['push'](_0x51e7f4['shift']());
    }
  }
})(a57_0x28ab, 0x60761);
Object['defineProperty'](exports, a57_0x146c42(0x125), { value: !![] });
function a57_0x247a(_0x496ad0, _0x4fa03f) {
  const _0x28ab0a = a57_0x28ab();
  return (
    (a57_0x247a = function (_0x247a46, _0x45ea77) {
      _0x247a46 = _0x247a46 - 0x112;
      let _0x38007a = _0x28ab0a[_0x247a46];
      return _0x38007a;
    }),
    a57_0x247a(_0x496ad0, _0x4fa03f)
  );
}
const sequelize_1 = require(a57_0x146c42(0x124));
module[a57_0x146c42(0x121)] = {
  up: _0x20eeb6 => {
    const _0x506389 = a57_0x146c42;
    return _0x20eeb6[_0x506389(0x115)](_0x506389(0x118), {
      id: {
        type: sequelize_1[_0x506389(0x11d)][_0x506389(0x120)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x506389(0x11d)][_0x506389(0x113)],
        allowNull: ![]
      },
      value: {
        type: sequelize_1['DataTypes'][_0x506389(0x113)],
        allowNull: ![]
      },
      contactId: {
        type: sequelize_1[_0x506389(0x11d)][_0x506389(0x120)],
        references: { model: _0x506389(0x123), key: 'id' },
        onUpdate: _0x506389(0x11e),
        onDelete: _0x506389(0x11e),
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x506389(0x11d)][_0x506389(0x112)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1['DataTypes'][_0x506389(0x112)],
        allowNull: ![]
      }
    });
  },
  down: _0x33cb71 => {
    const _0x52eb5a = a57_0x146c42;
    return _0x33cb71[_0x52eb5a(0x119)](_0x52eb5a(0x118));
  }
};
