'use strict';
const a127_0x1444d8 = a127_0xec03;
(function (_0x16c23a, _0xe7af8f) {
  const _0x2f45ec = a127_0xec03,
    _0x1e9ff3 = _0x16c23a();
  while (!![]) {
    try {
      const _0x23e514 =
        parseInt(_0x2f45ec(0x9c)) / 0x1 +
        parseInt(_0x2f45ec(0x9a)) / 0x2 +
        (-parseInt(_0x2f45ec(0x96)) / 0x3) *
          (-parseInt(_0x2f45ec(0x8d)) / 0x4) +
        -parseInt(_0x2f45ec(0x8f)) / 0x5 +
        -parseInt(_0x2f45ec(0x8e)) / 0x6 +
        -parseInt(_0x2f45ec(0x99)) / 0x7 +
        (parseInt(_0x2f45ec(0x98)) / 0x8) * (parseInt(_0x2f45ec(0x90)) / 0x9);
      if (_0x23e514 === _0xe7af8f) break;
      else _0x1e9ff3['push'](_0x1e9ff3['shift']());
    } catch (_0xb946d) {
      _0x1e9ff3['push'](_0x1e9ff3['shift']());
    }
  }
})(a127_0x5375, 0xe7f97);
Object[a127_0x1444d8(0x91)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a127_0x1444d8(0x92));
function a127_0x5375() {
  const _0x435110 = [
    '5418065InMcJT',
    '1122165AjNKMc',
    'defineProperty',
    'sequelize',
    'DATE',
    'INTEGER',
    'JSONB',
    '12273WqNFkC',
    'DataTypes',
    '48RMUDPr',
    '134911drldTx',
    '801360sNkSpW',
    'dropTable',
    '731083mvlUEF',
    'Baileys',
    '1244xqzqVY',
    '6594726kcaDWc'
  ];
  a127_0x5375 = function () {
    return _0x435110;
  };
  return a127_0x5375();
}
function a127_0xec03(_0x3c59df, _0x47ec77) {
  const _0x537566 = a127_0x5375();
  return (
    (a127_0xec03 = function (_0xec031d, _0x53b87f) {
      _0xec031d = _0xec031d - 0x8d;
      let _0x30c4fb = _0x537566[_0xec031d];
      return _0x30c4fb;
    }),
    a127_0xec03(_0x3c59df, _0x47ec77)
  );
}
module['exports'] = {
  up: _0xfbcdc5 => {
    const _0x468e8b = a127_0x1444d8;
    return _0xfbcdc5['createTable'](_0x468e8b(0x9d), {
      id: {
        type: sequelize_1[_0x468e8b(0x97)][_0x468e8b(0x94)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      whatsappId: {
        type: sequelize_1[_0x468e8b(0x97)][_0x468e8b(0x94)],
        primaryKey: !![]
      },
      contacts: {
        type: sequelize_1[_0x468e8b(0x97)]['JSONB'],
        allowNull: !![]
      },
      chats: {
        type: sequelize_1[_0x468e8b(0x97)][_0x468e8b(0x95)],
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x468e8b(0x97)][_0x468e8b(0x93)],
        allowNull: ![]
      },
      updatedAt: { type: sequelize_1[_0x468e8b(0x97)]['DATE'], allowNull: ![] }
    });
  },
  down: _0x191e73 => {
    const _0x5314e0 = a127_0x1444d8;
    return _0x191e73[_0x5314e0(0x9b)](_0x5314e0(0x9d));
  }
};
