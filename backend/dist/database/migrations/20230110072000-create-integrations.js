'use strict';
const a166_0x230660 = a166_0x3cf0;
(function (_0x429843, _0x486208) {
  const _0x23d7a = a166_0x3cf0,
    _0x588cf1 = _0x429843();
  while (!![]) {
    try {
      const _0x3019da =
        (parseInt(_0x23d7a(0x141)) / 0x1) * (-parseInt(_0x23d7a(0x136)) / 0x2) +
        -parseInt(_0x23d7a(0x140)) / 0x3 +
        parseInt(_0x23d7a(0x131)) / 0x4 +
        (-parseInt(_0x23d7a(0x12e)) / 0x5) * (parseInt(_0x23d7a(0x135)) / 0x6) +
        (-parseInt(_0x23d7a(0x142)) / 0x7) *
          (-parseInt(_0x23d7a(0x13d)) / 0x8) +
        -parseInt(_0x23d7a(0x143)) / 0x9 +
        parseInt(_0x23d7a(0x139)) / 0xa;
      if (_0x3019da === _0x486208) break;
      else _0x588cf1['push'](_0x588cf1['shift']());
    } catch (_0x391621) {
      _0x588cf1['push'](_0x588cf1['shift']());
    }
  }
})(a166_0x2f35, 0x69361);
function a166_0x2f35() {
  const _0x5d4819 = [
    'DATE',
    '41535gCcijY',
    '982oPDYxH',
    '5245982YFLFnb',
    '6975648Vdqkbw',
    '1113620WfFxYw',
    'INTEGER',
    'createTable',
    '2298260qUMtxo',
    '__esModule',
    'sequelize',
    'STRING',
    '18GFFxDk',
    '842rBVItH',
    'exports',
    'Companies',
    '9774650zMnafi',
    'TEXT',
    'BOOLEAN',
    'DataTypes',
    '8GgEYGi',
    'CASCADE'
  ];
  a166_0x2f35 = function () {
    return _0x5d4819;
  };
  return a166_0x2f35();
}
Object['defineProperty'](exports, a166_0x230660(0x132), { value: !![] });
const sequelize_1 = require(a166_0x230660(0x133));
function a166_0x3cf0(_0x2d3563, _0x3d4d75) {
  const _0x2f35c6 = a166_0x2f35();
  return (
    (a166_0x3cf0 = function (_0x3cf04e, _0x26ec6a) {
      _0x3cf04e = _0x3cf04e - 0x12e;
      let _0x278817 = _0x2f35c6[_0x3cf04e];
      return _0x278817;
    }),
    a166_0x3cf0(_0x2d3563, _0x3d4d75)
  );
}
module[a166_0x230660(0x137)] = {
  up: _0x5e4d6a => {
    const _0x6622fe = a166_0x230660;
    return _0x5e4d6a[_0x6622fe(0x130)]('Integrations', {
      id: {
        type: sequelize_1[_0x6622fe(0x13c)][_0x6622fe(0x12f)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      companyId: {
        type: sequelize_1[_0x6622fe(0x13c)][_0x6622fe(0x12f)],
        references: { model: _0x6622fe(0x138), key: 'id' },
        onUpdate: _0x6622fe(0x13e),
        onDelete: 'SET\x20NULL',
        allowNull: ![]
      },
      name: { type: sequelize_1['DataTypes']['STRING'], allowNull: ![] },
      isActive: {
        type: sequelize_1[_0x6622fe(0x13c)][_0x6622fe(0x13b)],
        defaultValue: ![]
      },
      token: {
        type: sequelize_1['DataTypes'][_0x6622fe(0x13a)],
        allowNull: !![]
      },
      foneContact: {
        type: sequelize_1['DataTypes'][_0x6622fe(0x134)],
        allowNull: !![]
      },
      userLogin: {
        type: sequelize_1[_0x6622fe(0x13c)][_0x6622fe(0x134)],
        allowNull: !![]
      },
      passLogin: {
        type: sequelize_1[_0x6622fe(0x13c)][_0x6622fe(0x134)],
        allowNull: !![]
      },
      finalCurrentMonth: {
        type: sequelize_1[_0x6622fe(0x13c)][_0x6622fe(0x12f)],
        allowNull: !![]
      },
      initialCurrentMonth: {
        type: sequelize_1[_0x6622fe(0x13c)][_0x6622fe(0x12f)],
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x6622fe(0x13c)][_0x6622fe(0x13f)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1['DataTypes'][_0x6622fe(0x13f)],
        allowNull: ![]
      }
    });
  },
  down: _0x456444 => {
    return _0x456444['dropTable']('Integrations');
  }
};
