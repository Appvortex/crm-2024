'use strict';
const a273_0x2134bf = a273_0x3f87;
function a273_0x3f87(_0x4368d5, _0x47de97) {
  const _0x5882d3 = a273_0x5882();
  return (
    (a273_0x3f87 = function (_0x3f8710, _0x124908) {
      _0x3f8710 = _0x3f8710 - 0x104;
      let _0x18e843 = _0x5882d3[_0x3f8710];
      return _0x18e843;
    }),
    a273_0x3f87(_0x4368d5, _0x47de97)
  );
}
function a273_0x5882() {
  const _0x42eac1 = [
    '1728lJNEzl',
    'DataTypes',
    '787890HRnbnQ',
    '1173112SNJVlt',
    '92sViEGX',
    'exports',
    'defineProperty',
    '41489OCIyZK',
    '__esModule',
    'createTable',
    'DATE',
    '462957wbKoAl',
    'dropTable',
    'STRING',
    '390150eLRyiI',
    '30YnrLOr',
    '70065kfrKBG',
    '3115432ooJdQm',
    '306LremiL'
  ];
  a273_0x5882 = function () {
    return _0x42eac1;
  };
  return a273_0x5882();
}
(function (_0x7b68a8, _0x16f059) {
  const _0x3ef71f = a273_0x3f87,
    _0x60a215 = _0x7b68a8();
  while (!![]) {
    try {
      const _0xb56d0f =
        parseInt(_0x3ef71f(0x104)) / 0x1 +
        -parseInt(_0x3ef71f(0x112)) / 0x2 +
        (parseInt(_0x3ef71f(0x111)) / 0x3) *
          (-parseInt(_0x3ef71f(0x105)) / 0x4) +
        (-parseInt(_0x3ef71f(0x110)) / 0x5) *
          (parseInt(_0x3ef71f(0x116)) / 0x6) +
        (parseInt(_0x3ef71f(0x108)) / 0x7) *
          (parseInt(_0x3ef71f(0x114)) / 0x8) +
        (-parseInt(_0x3ef71f(0x113)) / 0x9) *
          (-parseInt(_0x3ef71f(0x10f)) / 0xa) +
        -parseInt(_0x3ef71f(0x10c)) / 0xb;
      if (_0xb56d0f === _0x16f059) break;
      else _0x60a215['push'](_0x60a215['shift']());
    } catch (_0x38e519) {
      _0x60a215['push'](_0x60a215['shift']());
    }
  }
})(a273_0x5882, 0xd0bd4);
Object[a273_0x2134bf(0x107)](exports, a273_0x2134bf(0x109), { value: !![] });
const sequelize_1 = require('sequelize');
module[a273_0x2134bf(0x106)] = {
  up: _0x306bd0 => {
    const _0x4cd786 = a273_0x2134bf;
    return _0x306bd0[_0x4cd786(0x10a)]('Partners', {
      id: {
        type: sequelize_1['DataTypes']['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x4cd786(0x115)][_0x4cd786(0x10e)],
        allowNull: ![],
        unique: !![]
      },
      phone: {
        type: sequelize_1[_0x4cd786(0x115)][_0x4cd786(0x10e)],
        allowNull: !![]
      },
      email: {
        type: sequelize_1[_0x4cd786(0x115)][_0x4cd786(0x10e)],
        allowNull: !![]
      },
      document: {
        type: sequelize_1['DataTypes']['STRING'],
        allowNull: !![],
        unique: !![]
      },
      commission: {
        type: sequelize_1[_0x4cd786(0x115)]['DECIMAL'](0xa, 0x2),
        allowNull: ![]
      },
      typeCommission: {
        type: sequelize_1['DataTypes'][_0x4cd786(0x10e)],
        allowNull: ![]
      },
      walletId: {
        type: sequelize_1[_0x4cd786(0x115)]['STRING'],
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x4cd786(0x115)][_0x4cd786(0x10b)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x4cd786(0x115)][_0x4cd786(0x10b)],
        allowNull: ![]
      }
    });
  },
  down: _0x3a3f71 => {
    const _0x5154c7 = a273_0x2134bf;
    return _0x3a3f71[_0x5154c7(0x10d)]('Partners');
  }
};
