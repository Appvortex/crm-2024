'use strict';
const a90_0x3e5b65 = a90_0x281d;
function a90_0x281d(_0x15f11f, _0x20af2e) {
  const _0x22b8f2 = a90_0x22b8();
  return (
    (a90_0x281d = function (_0x281d76, _0x4bc2d5) {
      _0x281d76 = _0x281d76 - 0x137;
      let _0x1403a1 = _0x22b8f2[_0x281d76];
      return _0x1403a1;
    }),
    a90_0x281d(_0x15f11f, _0x20af2e)
  );
}
(function (_0x4ab039, _0x5b1b4b) {
  const _0x3863a4 = a90_0x281d,
    _0x58056b = _0x4ab039();
  while (!![]) {
    try {
      const _0xbb4da5 =
        (-parseInt(_0x3863a4(0x149)) / 0x1) *
          (parseInt(_0x3863a4(0x13b)) / 0x2) +
        -parseInt(_0x3863a4(0x13a)) / 0x3 +
        parseInt(_0x3863a4(0x148)) / 0x4 +
        (-parseInt(_0x3863a4(0x147)) / 0x5) *
          (parseInt(_0x3863a4(0x138)) / 0x6) +
        (parseInt(_0x3863a4(0x140)) / 0x7) *
          (parseInt(_0x3863a4(0x142)) / 0x8) +
        (-parseInt(_0x3863a4(0x14c)) / 0x9) *
          (parseInt(_0x3863a4(0x139)) / 0xa) +
        (parseInt(_0x3863a4(0x13d)) / 0xb) * (parseInt(_0x3863a4(0x13c)) / 0xc);
      if (_0xbb4da5 === _0x5b1b4b) break;
      else _0x58056b['push'](_0x58056b['shift']());
    } catch (_0x18b184) {
      _0x58056b['push'](_0x58056b['shift']());
    }
  }
})(a90_0x22b8, 0x5a59c);
function a90_0x22b8() {
  const _0x50be32 = [
    'CASCADE',
    'removeColumn',
    '353628mebWOA',
    'defineProperty',
    '30bUISzv',
    '150oFbNOe',
    '771279cWcXFg',
    '12AIXqLg',
    '108xiFFJq',
    '2359456xrzXyx',
    'companyId',
    'INTEGER',
    '28JUOpyU',
    'exports',
    '130440mXDJmZ',
    'DataTypes',
    'SET\x20NULL',
    '__esModule',
    'Tickets',
    '697035woNoNE',
    '636832oRkrDO',
    '40218iIyGzI'
  ];
  a90_0x22b8 = function () {
    return _0x50be32;
  };
  return a90_0x22b8();
}
Object[a90_0x3e5b65(0x137)](exports, a90_0x3e5b65(0x145), { value: !![] });
const sequelize_1 = require('sequelize');
module[a90_0x3e5b65(0x141)] = {
  up: _0x34161b => {
    const _0x4a669a = a90_0x3e5b65;
    return _0x34161b['addColumn'](_0x4a669a(0x146), _0x4a669a(0x13e), {
      type: sequelize_1[_0x4a669a(0x143)][_0x4a669a(0x13f)],
      references: { model: 'Companies', key: 'id' },
      onUpdate: _0x4a669a(0x14a),
      onDelete: _0x4a669a(0x144)
    });
  },
  down: _0xbcb5ff => {
    const _0x1aadff = a90_0x3e5b65;
    return _0xbcb5ff[_0x1aadff(0x14b)](_0x1aadff(0x146), _0x1aadff(0x13e));
  }
};
