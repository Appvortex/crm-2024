'use strict';
const a119_0x555623 = a119_0x2c06;
function a119_0x3ed0() {
  const _0x521601 = [
    '2792vtjtjv',
    '4384644EvAxBd',
    'defineProperty',
    'Tags',
    '383NJGmax',
    '1808545nViieT',
    '3405650SJWSdM',
    'INTEGER',
    'DATE',
    '145758cYHhjB',
    '8gTtmQz',
    '8gAoPaV',
    'sequelize',
    '18wSnSvg',
    'DataTypes',
    '6065400oEwMCW',
    'Companies',
    '400127ygJlya',
    'dropTable',
    '__esModule',
    'STRING',
    'CASCADE'
  ];
  a119_0x3ed0 = function () {
    return _0x521601;
  };
  return a119_0x3ed0();
}
(function (_0x12e8a8, _0x4f59f1) {
  const _0x57a708 = a119_0x2c06,
    _0x4ce27f = _0x12e8a8();
  while (!![]) {
    try {
      const _0x493367 =
        (parseInt(_0x57a708(0x104)) / 0x1) *
          (parseInt(_0x57a708(0x100)) / 0x2) +
        (-parseInt(_0x57a708(0x109)) / 0x3) *
          (-parseInt(_0x57a708(0x10b)) / 0x4) +
        parseInt(_0x57a708(0x105)) / 0x5 +
        -parseInt(_0x57a708(0x101)) / 0x6 +
        (parseInt(_0x57a708(0xfb)) / 0x7) * (parseInt(_0x57a708(0x10a)) / 0x8) +
        (-parseInt(_0x57a708(0x10d)) / 0x9) *
          (-parseInt(_0x57a708(0x106)) / 0xa) +
        -parseInt(_0x57a708(0x10f)) / 0xb;
      if (_0x493367 === _0x4f59f1) break;
      else _0x4ce27f['push'](_0x4ce27f['shift']());
    } catch (_0x1de623) {
      _0x4ce27f['push'](_0x4ce27f['shift']());
    }
  }
})(a119_0x3ed0, 0x6dc82);
function a119_0x2c06(_0x2fe47e, _0x481635) {
  const _0x3ed07b = a119_0x3ed0();
  return (
    (a119_0x2c06 = function (_0x2c0648, _0x1869b3) {
      _0x2c0648 = _0x2c0648 - 0xfb;
      let _0x3f1089 = _0x3ed07b[_0x2c0648];
      return _0x3f1089;
    }),
    a119_0x2c06(_0x2fe47e, _0x481635)
  );
}
Object[a119_0x555623(0x102)](exports, a119_0x555623(0xfd), { value: !![] });
const sequelize_1 = require(a119_0x555623(0x10c));
module['exports'] = {
  up: _0x471a59 => {
    const _0x2bedea = a119_0x555623;
    return _0x471a59['createTable'](_0x2bedea(0x103), {
      id: {
        type: sequelize_1['DataTypes'][_0x2bedea(0x107)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x2bedea(0x10e)][_0x2bedea(0xfe)],
        allowNull: ![]
      },
      color: {
        type: sequelize_1['DataTypes'][_0x2bedea(0xfe)],
        allowNull: !![]
      },
      companyId: {
        type: sequelize_1['DataTypes']['INTEGER'],
        references: { model: _0x2bedea(0x110), key: 'id' },
        onUpdate: _0x2bedea(0xff),
        onDelete: 'CASCADE',
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x2bedea(0x10e)][_0x2bedea(0x108)],
        allowNull: ![]
      },
      updatedAt: { type: sequelize_1[_0x2bedea(0x10e)]['DATE'], allowNull: ![] }
    });
  },
  down: _0x92e2b8 => {
    const _0x146d91 = a119_0x555623;
    return _0x92e2b8[_0x146d91(0xfc)](_0x146d91(0x103));
  }
};
