'use strict';
function a129_0x2ede() {
  const _0x3947cf = [
    '__esModule',
    'CASCADE',
    'defineProperty',
    '16LgDBWT',
    'INTEGER',
    'dropTable',
    '1027605qqmwzP',
    '7127015HoPMdT',
    '352401DfmxNA',
    'DataTypes',
    'STRING',
    'DATE',
    '1125621tAqPvt',
    'createTable',
    '271230BoQFkY',
    'ContactListItems',
    'Companies',
    'sequelize',
    'BOOLEAN',
    'exports',
    '21712848VjRUjS',
    '123480BSzCfn'
  ];
  a129_0x2ede = function () {
    return _0x3947cf;
  };
  return a129_0x2ede();
}
function a129_0x58d1(_0xdeba77, _0x54f7ed) {
  const _0x2ede4a = a129_0x2ede();
  return (
    (a129_0x58d1 = function (_0x58d16c, _0x284476) {
      _0x58d16c = _0x58d16c - 0xf6;
      let _0x31b579 = _0x2ede4a[_0x58d16c];
      return _0x31b579;
    }),
    a129_0x58d1(_0xdeba77, _0x54f7ed)
  );
}
const a129_0x224e9f = a129_0x58d1;
(function (_0x1240dd, _0x426dd0) {
  const _0x153652 = a129_0x58d1,
    _0x3eee87 = _0x1240dd();
  while (!![]) {
    try {
      const _0x214b6e =
        -parseInt(_0x153652(0xfe)) / 0x1 +
        parseInt(_0x153652(0x100)) / 0x2 +
        (-parseInt(_0x153652(0xfa)) / 0x3) *
          (-parseInt(_0x153652(0x10b)) / 0x4) +
        -parseInt(_0x153652(0xf8)) / 0x5 +
        parseInt(_0x153652(0x107)) / 0x6 +
        -parseInt(_0x153652(0xf9)) / 0x7 +
        parseInt(_0x153652(0x106)) / 0x8;
      if (_0x214b6e === _0x426dd0) break;
      else _0x3eee87['push'](_0x3eee87['shift']());
    } catch (_0x18b4d1) {
      _0x3eee87['push'](_0x3eee87['shift']());
    }
  }
})(a129_0x2ede, 0xf1ea2);
Object[a129_0x224e9f(0x10a)](exports, a129_0x224e9f(0x108), { value: !![] });
const sequelize_1 = require(a129_0x224e9f(0x103));
module[a129_0x224e9f(0x105)] = {
  up: _0x275946 => {
    const _0x1094e1 = a129_0x224e9f;
    return _0x275946[_0x1094e1(0xff)](_0x1094e1(0x101), {
      id: {
        type: sequelize_1[_0x1094e1(0xfb)][_0x1094e1(0xf6)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x1094e1(0xfb)][_0x1094e1(0xfc)],
        allowNull: ![]
      },
      number: { type: sequelize_1[_0x1094e1(0xfb)]['STRING'], allowNull: ![] },
      email: {
        type: sequelize_1[_0x1094e1(0xfb)][_0x1094e1(0xfc)],
        allowNull: !![]
      },
      contactListId: {
        type: sequelize_1[_0x1094e1(0xfb)]['INTEGER'],
        references: { model: 'ContactLists', key: 'id' },
        onUpdate: _0x1094e1(0x109),
        onDelete: _0x1094e1(0x109),
        allowNull: ![]
      },
      isWhatsappValid: {
        type: sequelize_1['DataTypes'][_0x1094e1(0x104)],
        defaultValue: ![]
      },
      companyId: {
        type: sequelize_1[_0x1094e1(0xfb)][_0x1094e1(0xf6)],
        references: { model: _0x1094e1(0x102), key: 'id' },
        onUpdate: _0x1094e1(0x109),
        onDelete: _0x1094e1(0x109),
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x1094e1(0xfb)][_0x1094e1(0xfd)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x1094e1(0xfb)][_0x1094e1(0xfd)],
        allowNull: ![]
      }
    });
  },
  down: _0x52f321 => {
    const _0x1b44d6 = a129_0x224e9f;
    return _0x52f321[_0x1b44d6(0xf7)](_0x1b44d6(0x101));
  }
};
