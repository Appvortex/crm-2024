'use strict';
const a140_0x28590e = a140_0x4a14;
(function (_0x2af014, _0x5087a5) {
  const _0xbeea6b = a140_0x4a14,
    _0x408702 = _0x2af014();
  while (!![]) {
    try {
      const _0x1e7842 =
        -parseInt(_0xbeea6b(0x198)) / 0x1 +
        (parseInt(_0xbeea6b(0x18d)) / 0x2) *
          (-parseInt(_0xbeea6b(0x19a)) / 0x3) +
        parseInt(_0xbeea6b(0x19e)) / 0x4 +
        (-parseInt(_0xbeea6b(0x195)) / 0x5) *
          (parseInt(_0xbeea6b(0x190)) / 0x6) +
        -parseInt(_0xbeea6b(0x19b)) / 0x7 +
        -parseInt(_0xbeea6b(0x199)) / 0x8 +
        parseInt(_0xbeea6b(0x196)) / 0x9;
      if (_0x1e7842 === _0x5087a5) break;
      else _0x408702['push'](_0x408702['shift']());
    } catch (_0x473902) {
      _0x408702['push'](_0x408702['shift']());
    }
  }
})(a140_0x44ed, 0x46b25);
Object[a140_0x28590e(0x194)](exports, a140_0x28590e(0x18e), { value: !![] });
const sequelize_1 = require('sequelize');
function a140_0x44ed() {
  const _0x51eb51 = [
    '54lUIYOZ',
    '__esModule',
    'STRING',
    '24204PmEIFm',
    'exports',
    'DATE',
    'createTable',
    'defineProperty',
    '330KdWNBe',
    '13357422PBOgxJ',
    'Companies',
    '117457ECnuHP',
    '862792olGyGc',
    '61377rmvCSP',
    '3038924rWGrGQ',
    'dropTable',
    'DataTypes',
    '1133960GyIngR',
    'CASCADE',
    'INTEGER',
    'TEXT',
    'Announcements'
  ];
  a140_0x44ed = function () {
    return _0x51eb51;
  };
  return a140_0x44ed();
}
function a140_0x4a14(_0x4c33f9, _0x5a1004) {
  const _0x44ed83 = a140_0x44ed();
  return (
    (a140_0x4a14 = function (_0x4a144a, _0x54c01a) {
      _0x4a144a = _0x4a144a - 0x18d;
      let _0x3e145e = _0x44ed83[_0x4a144a];
      return _0x3e145e;
    }),
    a140_0x4a14(_0x4c33f9, _0x5a1004)
  );
}
module[a140_0x28590e(0x191)] = {
  up: _0x4124bf => {
    const _0x112aec = a140_0x28590e;
    return _0x4124bf[_0x112aec(0x193)]('Announcements', {
      id: {
        type: sequelize_1[_0x112aec(0x19d)][_0x112aec(0x1a0)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      priority: {
        type: sequelize_1[_0x112aec(0x19d)][_0x112aec(0x1a0)],
        allowNull: !![]
      },
      title: {
        type: sequelize_1['DataTypes'][_0x112aec(0x18f)],
        allowNull: ![]
      },
      text: {
        type: sequelize_1['DataTypes'][_0x112aec(0x1a1)],
        allowNull: ![]
      },
      mediaPath: {
        type: sequelize_1[_0x112aec(0x19d)][_0x112aec(0x1a1)],
        allowNull: !![]
      },
      mediaName: {
        type: sequelize_1[_0x112aec(0x19d)]['TEXT'],
        allowNull: !![]
      },
      companyId: {
        type: sequelize_1['DataTypes']['INTEGER'],
        references: { model: _0x112aec(0x197), key: 'id' },
        onUpdate: _0x112aec(0x19f),
        onDelete: _0x112aec(0x19f),
        allowNull: ![]
      },
      status: {
        type: sequelize_1[_0x112aec(0x19d)]['BOOLEAN'],
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x112aec(0x19d)][_0x112aec(0x192)],
        allowNull: ![]
      },
      updatedAt: { type: sequelize_1[_0x112aec(0x19d)]['DATE'], allowNull: ![] }
    });
  },
  down: _0x3d501a => {
    const _0x4a3f46 = a140_0x28590e;
    return _0x3d501a[_0x4a3f46(0x19c)](_0x4a3f46(0x1a2));
  }
};
