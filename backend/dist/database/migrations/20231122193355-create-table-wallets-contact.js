'use strict';
const a259_0x3e714b = a259_0x272f;
(function (_0x1b61e5, _0x2508e0) {
  const _0x47225d = a259_0x272f,
    _0x48d957 = _0x1b61e5();
  while (!![]) {
    try {
      const _0x142271 =
        parseInt(_0x47225d(0x134)) / 0x1 +
        (-parseInt(_0x47225d(0x13d)) / 0x2) *
          (parseInt(_0x47225d(0x13c)) / 0x3) +
        parseInt(_0x47225d(0x130)) / 0x4 +
        -parseInt(_0x47225d(0x138)) / 0x5 +
        parseInt(_0x47225d(0x13b)) / 0x6 +
        (-parseInt(_0x47225d(0x132)) / 0x7) *
          (parseInt(_0x47225d(0x12e)) / 0x8) +
        parseInt(_0x47225d(0x13f)) / 0x9;
      if (_0x142271 === _0x2508e0) break;
      else _0x48d957['push'](_0x48d957['shift']());
    } catch (_0x3d1a87) {
      _0x48d957['push'](_0x48d957['shift']());
    }
  }
})(a259_0x3f6c, 0x7f371);
Object[a259_0x3e714b(0x143)](exports, a259_0x3e714b(0x135), { value: !![] });
function a259_0x3f6c() {
  const _0x4e5cad = [
    'sequelize',
    'Contacts',
    'createTable',
    'defineProperty',
    '8YnHHLP',
    'ContactWallets',
    '389392lSuzwa',
    'Companies',
    '707686uloMGm',
    'INTEGER',
    '519245CZOHGh',
    '__esModule',
    'DATE',
    'dropTable',
    '3575515aFKXAI',
    'CASCADE',
    'exports',
    '4077738BDJTJU',
    '3djRPYA',
    '1334758ckuQOo',
    'DataTypes',
    '6375933EjVmdz'
  ];
  a259_0x3f6c = function () {
    return _0x4e5cad;
  };
  return a259_0x3f6c();
}
const sequelize_1 = require(a259_0x3e714b(0x140));
function a259_0x272f(_0x2a14b2, _0x3f8db0) {
  const _0x3f6c98 = a259_0x3f6c();
  return (
    (a259_0x272f = function (_0x272f9e, _0x5c2cba) {
      _0x272f9e = _0x272f9e - 0x12e;
      let _0xc3fb98 = _0x3f6c98[_0x272f9e];
      return _0xc3fb98;
    }),
    a259_0x272f(_0x2a14b2, _0x3f8db0)
  );
}
module[a259_0x3e714b(0x13a)] = {
  up: _0x199f93 => {
    const _0x1f139c = a259_0x3e714b;
    return _0x199f93[_0x1f139c(0x142)](_0x1f139c(0x12f), {
      id: {
        type: sequelize_1[_0x1f139c(0x13e)][_0x1f139c(0x133)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      walletId: {
        type: sequelize_1[_0x1f139c(0x13e)][_0x1f139c(0x133)],
        references: { model: 'Users', key: 'id' },
        onUpdate: _0x1f139c(0x139),
        onDelete: _0x1f139c(0x139),
        allowNull: ![]
      },
      contactId: {
        type: sequelize_1['DataTypes'][_0x1f139c(0x133)],
        references: { model: _0x1f139c(0x141), key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: _0x1f139c(0x139),
        allowNull: ![]
      },
      companyId: {
        type: sequelize_1['DataTypes'][_0x1f139c(0x133)],
        references: { model: _0x1f139c(0x131), key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: _0x1f139c(0x139),
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x1f139c(0x13e)][_0x1f139c(0x136)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x1f139c(0x13e)][_0x1f139c(0x136)],
        allowNull: ![]
      }
    });
  },
  down: _0x465955 => {
    const _0x1212de = a259_0x3e714b;
    return _0x465955[_0x1212de(0x137)](_0x1212de(0x12f));
  }
};
