'use strict';
const a84_0x403220 = a84_0xcb8a;
function a84_0xcb8a(_0x117d99, _0x50ec97) {
  const _0x397b7f = a84_0x397b();
  return (
    (a84_0xcb8a = function (_0xcb8ae1, _0x3337a2) {
      _0xcb8ae1 = _0xcb8ae1 - 0x104;
      let _0x11972e = _0x397b7f[_0xcb8ae1];
      return _0x11972e;
    }),
    a84_0xcb8a(_0x117d99, _0x50ec97)
  );
}
(function (_0x5d6907, _0x3e6b16) {
  const _0x24512c = a84_0xcb8a,
    _0xa224f7 = _0x5d6907();
  while (!![]) {
    try {
      const _0x4a75dd =
        -parseInt(_0x24512c(0x110)) / 0x1 +
        -parseInt(_0x24512c(0x114)) / 0x2 +
        parseInt(_0x24512c(0x105)) / 0x3 +
        parseInt(_0x24512c(0x10d)) / 0x4 +
        (parseInt(_0x24512c(0x113)) / 0x5) *
          (-parseInt(_0x24512c(0x107)) / 0x6) +
        parseInt(_0x24512c(0x10c)) / 0x7 +
        (parseInt(_0x24512c(0x10a)) / 0x8) *
          (-parseInt(_0x24512c(0x10e)) / 0x9);
      if (_0x4a75dd === _0x3e6b16) break;
      else _0xa224f7['push'](_0xa224f7['shift']());
    } catch (_0x2db061) {
      _0xa224f7['push'](_0xa224f7['shift']());
    }
  }
})(a84_0x397b, 0xbf53e);
Object[a84_0x403220(0x108)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a84_0x403220(0x112));
module['exports'] = {
  up: _0x5b2f7d => {
    const _0x436701 = a84_0x403220;
    return _0x5b2f7d[_0x436701(0x109)]('Settings', 'companyId', {
      type: sequelize_1[_0x436701(0x104)][_0x436701(0x111)],
      references: { model: 'Companies', key: 'id' },
      onUpdate: _0x436701(0x10f),
      onDelete: 'SET\x20NULL'
    });
  },
  down: _0x193daa => {
    const _0x58eb2f = a84_0x403220;
    return _0x193daa[_0x58eb2f(0x10b)](_0x58eb2f(0x115), _0x58eb2f(0x106));
  }
};
function a84_0x397b() {
  const _0x2b226a = [
    '5222118RAYgoO',
    'defineProperty',
    'addColumn',
    '16QdhqUe',
    'removeColumn',
    '8416324YUtVTO',
    '5507988PkwKdx',
    '3080979xDtFfn',
    'CASCADE',
    '265321ihTHOr',
    'INTEGER',
    'sequelize',
    '5kMYVBP',
    '2927850NVAdgx',
    'Settings',
    'DataTypes',
    '4465830qfKjIv',
    'companyId'
  ];
  a84_0x397b = function () {
    return _0x2b226a;
  };
  return a84_0x397b();
}
