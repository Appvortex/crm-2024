'use strict';
const a52_0x5679e1 = a52_0x5077;
(function (_0x1e53e3, _0x52ed6b) {
  const _0x2b7532 = a52_0x5077,
    _0x3bb113 = _0x1e53e3();
  while (!![]) {
    try {
      const _0x222d08 =
        parseInt(_0x2b7532(0x9b)) / 0x1 +
        parseInt(_0x2b7532(0x9d)) / 0x2 +
        (parseInt(_0x2b7532(0x95)) / 0x3) * (-parseInt(_0x2b7532(0x98)) / 0x4) +
        parseInt(_0x2b7532(0x9e)) / 0x5 +
        (parseInt(_0x2b7532(0x9f)) / 0x6) * (parseInt(_0x2b7532(0x93)) / 0x7) +
        parseInt(_0x2b7532(0x96)) / 0x8 +
        -parseInt(_0x2b7532(0xa2)) / 0x9;
      if (_0x222d08 === _0x52ed6b) break;
      else _0x3bb113['push'](_0x3bb113['shift']());
    } catch (_0x54e5df) {
      _0x3bb113['push'](_0x3bb113['shift']());
    }
  }
})(a52_0x3cca, 0x5f8fb);
function a52_0x5077(_0x28a450, _0x55d023) {
  const _0x3ccafb = a52_0x3cca();
  return (
    (a52_0x5077 = function (_0x50778b, _0x105161) {
      _0x50778b = _0x50778b - 0x93;
      let _0x5a666f = _0x3ccafb[_0x50778b];
      return _0x5a666f;
    }),
    a52_0x5077(_0x28a450, _0x55d023)
  );
}
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require('sequelize');
function a52_0x3cca() {
  const _0x16bf0e = [
    'STRING',
    '553468ZBQZsb',
    'createTable',
    '825592cgqYKF',
    '3023745tJPKFo',
    '1230bJwrzu',
    'Users',
    'exports',
    '8120250NFFTKi',
    'DATE',
    '469DVFYNj',
    'DataTypes',
    '565842VoNFjC',
    '689192eoptUu',
    'dropTable',
    '8ySlAWH',
    'INTEGER'
  ];
  a52_0x3cca = function () {
    return _0x16bf0e;
  };
  return a52_0x3cca();
}
module[a52_0x5679e1(0xa1)] = {
  up: _0x52f68b => {
    const _0x443bf2 = a52_0x5679e1;
    return _0x52f68b[_0x443bf2(0x9c)](_0x443bf2(0xa0), {
      id: {
        type: sequelize_1[_0x443bf2(0x94)][_0x443bf2(0x99)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: { type: sequelize_1['DataTypes']['STRING'], allowNull: ![] },
      email: {
        type: sequelize_1[_0x443bf2(0x94)][_0x443bf2(0x9a)],
        allowNull: ![],
        unique: !![]
      },
      passwordHash: {
        type: sequelize_1['DataTypes'][_0x443bf2(0x9a)],
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x443bf2(0xa3)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x443bf2(0x94)][_0x443bf2(0xa3)],
        allowNull: ![]
      }
    });
  },
  down: _0x36d4c6 => {
    const _0x17087a = a52_0x5679e1;
    return _0x36d4c6[_0x17087a(0x97)]('Users');
  }
};
