'use strict';
function a78_0x3250() {
  const _0xa417f0 = [
    'sequelize',
    'TEXT',
    '1686130urGkxQ',
    '1572651cOWsxz',
    '44610iTSQsx',
    '2NayXCg',
    '51161319XNBHAP',
    'INTEGER',
    'STRING',
    'DataTypes',
    '1141mEHjCN',
    '112icDhID',
    '36smHdCN',
    'dropTable',
    'createTable',
    'Queues',
    '1970358LZRNEo',
    '4154331AwgzSM',
    'DATE',
    '60cyULKB',
    'defineProperty',
    '__esModule'
  ];
  a78_0x3250 = function () {
    return _0xa417f0;
  };
  return a78_0x3250();
}
const a78_0x370be7 = a78_0x2e26;
(function (_0x2a60f8, _0x3f5537) {
  const _0x3989ce = a78_0x2e26,
    _0x1dfae9 = _0x2a60f8();
  while (!![]) {
    try {
      const _0x4e4382 =
        (parseInt(_0x3989ce(0x155)) / 0x1) *
          (-parseInt(_0x3989ce(0x168)) / 0x2) +
        -parseInt(_0x3989ce(0x161)) / 0x3 +
        (-parseInt(_0x3989ce(0x15c)) / 0x4) *
          (-parseInt(_0x3989ce(0x154)) / 0x5) +
        parseInt(_0x3989ce(0x160)) / 0x6 +
        (-parseInt(_0x3989ce(0x15a)) / 0x7) *
          (parseInt(_0x3989ce(0x15b)) / 0x8) +
        (-parseInt(_0x3989ce(0x169)) / 0x9) *
          (parseInt(_0x3989ce(0x163)) / 0xa) +
        parseInt(_0x3989ce(0x156)) / 0xb;
      if (_0x4e4382 === _0x3f5537) break;
      else _0x1dfae9['push'](_0x1dfae9['shift']());
    } catch (_0x455ee7) {
      _0x1dfae9['push'](_0x1dfae9['shift']());
    }
  }
})(a78_0x3250, 0xe5071);
Object[a78_0x370be7(0x164)](exports, a78_0x370be7(0x165), { value: !![] });
function a78_0x2e26(_0x54a361, _0xddd514) {
  const _0x3250eb = a78_0x3250();
  return (
    (a78_0x2e26 = function (_0x2e2695, _0x384648) {
      _0x2e2695 = _0x2e2695 - 0x154;
      let _0x5d573a = _0x3250eb[_0x2e2695];
      return _0x5d573a;
    }),
    a78_0x2e26(_0x54a361, _0xddd514)
  );
}
const sequelize_1 = require(a78_0x370be7(0x166));
module['exports'] = {
  up: _0x3e2ee6 => {
    const _0x522886 = a78_0x370be7;
    return _0x3e2ee6[_0x522886(0x15e)](_0x522886(0x15f), {
      id: {
        type: sequelize_1[_0x522886(0x159)][_0x522886(0x157)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x522886(0x159)][_0x522886(0x158)],
        allowNull: ![],
        unique: !![]
      },
      color: {
        type: sequelize_1[_0x522886(0x159)]['STRING'],
        allowNull: ![],
        unique: !![]
      },
      greetingMessage: {
        type: sequelize_1[_0x522886(0x159)][_0x522886(0x167)]
      },
      createdAt: {
        type: sequelize_1[_0x522886(0x159)][_0x522886(0x162)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x522886(0x159)][_0x522886(0x162)],
        allowNull: ![]
      }
    });
  },
  down: _0x3e37c9 => {
    const _0x181611 = a78_0x370be7;
    return _0x3e37c9[_0x181611(0x15d)](_0x181611(0x15f));
  }
};
