'use strict';
const a128_0x257409 = a128_0x1f52;
(function (_0x2e71c2, _0xbf45f2) {
  const _0x2c8fd5 = a128_0x1f52,
    _0x35359d = _0x2e71c2();
  while (!![]) {
    try {
      const _0x3576f8 =
        parseInt(_0x2c8fd5(0x19e)) / 0x1 +
        (-parseInt(_0x2c8fd5(0x18e)) / 0x2) *
          (-parseInt(_0x2c8fd5(0x190)) / 0x3) +
        -parseInt(_0x2c8fd5(0x1a0)) / 0x4 +
        (-parseInt(_0x2c8fd5(0x194)) / 0x5) *
          (-parseInt(_0x2c8fd5(0x19d)) / 0x6) +
        parseInt(_0x2c8fd5(0x18f)) / 0x7 +
        -parseInt(_0x2c8fd5(0x18d)) / 0x8 +
        (-parseInt(_0x2c8fd5(0x195)) / 0x9) *
          (parseInt(_0x2c8fd5(0x197)) / 0xa);
      if (_0x3576f8 === _0xbf45f2) break;
      else _0x35359d['push'](_0x35359d['shift']());
    } catch (_0x231ff6) {
      _0x35359d['push'](_0x35359d['shift']());
    }
  }
})(a128_0x20b2, 0xc5d04);
function a128_0x1f52(_0x345834, _0x1cf443) {
  const _0x20b2e6 = a128_0x20b2();
  return (
    (a128_0x1f52 = function (_0x1f5275, _0x13e54b) {
      _0x1f5275 = _0x1f5275 - 0x18c;
      let _0x53ad1e = _0x20b2e6[_0x1f5275];
      return _0x53ad1e;
    }),
    a128_0x1f52(_0x345834, _0x1cf443)
  );
}
function a128_0x20b2() {
  const _0x52cd14 = [
    '__esModule',
    '3719112JrpUOr',
    'defineProperty',
    'STRING',
    'createTable',
    '4729888fTiYRz',
    '142pOCHrP',
    '535969MbsOPP',
    '46203MgOKga',
    'sequelize',
    'CASCADE',
    'DATE',
    '115LXPFWk',
    '6646851VIcHml',
    'INTEGER',
    '10FZSlKp',
    'ContactLists',
    'DataTypes',
    'exports',
    'dropTable',
    'Companies',
    '374622FQCClp',
    '463708BjYmDw'
  ];
  a128_0x20b2 = function () {
    return _0x52cd14;
  };
  return a128_0x20b2();
}
Object[a128_0x257409(0x1a1)](exports, a128_0x257409(0x19f), { value: !![] });
const sequelize_1 = require(a128_0x257409(0x191));
module[a128_0x257409(0x19a)] = {
  up: _0x2b87c5 => {
    const _0x584236 = a128_0x257409;
    return _0x2b87c5[_0x584236(0x18c)]('ContactLists', {
      id: {
        type: sequelize_1[_0x584236(0x199)][_0x584236(0x196)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x584236(0x199)][_0x584236(0x1a2)],
        allowNull: ![]
      },
      companyId: {
        type: sequelize_1[_0x584236(0x199)][_0x584236(0x196)],
        references: { model: _0x584236(0x19c), key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: _0x584236(0x192),
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x584236(0x199)][_0x584236(0x193)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x584236(0x199)][_0x584236(0x193)],
        allowNull: ![]
      }
    });
  },
  down: _0x3e6dd4 => {
    const _0x5a6eb1 = a128_0x257409;
    return _0x3e6dd4[_0x5a6eb1(0x19b)](_0x5a6eb1(0x198));
  }
};
