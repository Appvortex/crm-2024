'use strict';
function a205_0x590e(_0x87b523, _0x51dfde) {
  const _0x421d66 = a205_0x421d();
  return (
    (a205_0x590e = function (_0x590e11, _0x4a20a6) {
      _0x590e11 = _0x590e11 - 0x1dd;
      let _0x54798d = _0x421d66[_0x590e11];
      return _0x54798d;
    }),
    a205_0x590e(_0x87b523, _0x51dfde)
  );
}
const a205_0x25fc38 = a205_0x590e;
(function (_0x4148d1, _0x36b5c8) {
  const _0x5a29b7 = a205_0x590e,
    _0xa17d3e = _0x4148d1();
  while (!![]) {
    try {
      const _0x2098bb =
        -parseInt(_0x5a29b7(0x1ea)) / 0x1 +
        -parseInt(_0x5a29b7(0x1e0)) / 0x2 +
        parseInt(_0x5a29b7(0x1e8)) / 0x3 +
        parseInt(_0x5a29b7(0x1e9)) / 0x4 +
        (parseInt(_0x5a29b7(0x1df)) / 0x5) *
          (parseInt(_0x5a29b7(0x1ee)) / 0x6) +
        -parseInt(_0x5a29b7(0x1e4)) / 0x7 +
        parseInt(_0x5a29b7(0x1ed)) / 0x8;
      if (_0x2098bb === _0x36b5c8) break;
      else _0xa17d3e['push'](_0xa17d3e['shift']());
    } catch (_0x4ac706) {
      _0xa17d3e['push'](_0xa17d3e['shift']());
    }
  }
})(a205_0x421d, 0xcdb69);
function a205_0x421d() {
  const _0x44430e = [
    'Companies',
    '9698318DjqGNM',
    'dropTable',
    'STRING',
    'CASCADE',
    '4045674HlAKgw',
    '1099360GXZFIr',
    '425355UVPDFz',
    'createTable',
    'DataTypes',
    '16997120hDFGch',
    '297726Veimof',
    'INTEGER',
    'defineProperty',
    '__esModule',
    '50KHTCrM',
    '3181636XiGItn',
    'TEXT',
    'Files'
  ];
  a205_0x421d = function () {
    return _0x44430e;
  };
  return a205_0x421d();
}
Object[a205_0x25fc38(0x1dd)](exports, a205_0x25fc38(0x1de), { value: !![] });
const sequelize_1 = require('sequelize');
module['exports'] = {
  up: _0x1c9e53 => {
    const _0x10f0bd = a205_0x25fc38;
    return _0x1c9e53[_0x10f0bd(0x1eb)](_0x10f0bd(0x1e2), {
      id: {
        type: sequelize_1[_0x10f0bd(0x1ec)][_0x10f0bd(0x1ef)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      companyId: {
        type: sequelize_1[_0x10f0bd(0x1ec)][_0x10f0bd(0x1ef)],
        references: { model: _0x10f0bd(0x1e3), key: 'id' },
        onUpdate: _0x10f0bd(0x1e7),
        onDelete: _0x10f0bd(0x1e7),
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x10f0bd(0x1ec)][_0x10f0bd(0x1e6)],
        allowNull: ![]
      },
      message: {
        type: sequelize_1[_0x10f0bd(0x1ec)][_0x10f0bd(0x1e1)],
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x10f0bd(0x1ec)]['DATE'](0x6),
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x10f0bd(0x1ec)]['DATE'](0x6),
        allowNull: ![]
      }
    });
  },
  down: _0x91826d => {
    const _0x1db890 = a205_0x25fc38;
    return _0x91826d[_0x1db890(0x1e5)](_0x1db890(0x1e2));
  }
};
