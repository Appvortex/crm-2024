'use strict';
const a86_0x57843a = a86_0x1d39;
function a86_0x205f() {
  const _0x24e4ab = [
    '20URhzWl',
    '__esModule',
    '1835VFZFRL',
    '13gqcpLL',
    'SET\x20NULL',
    '310DwNFSo',
    '69039znjlzw',
    '13813020hCKnoD',
    'sequelize',
    'INTEGER',
    '66qwKNSJ',
    '20AhLHQM',
    'DataTypes',
    '3469837ObyJse',
    'companyId',
    'CASCADE',
    'Contacts',
    'addColumn',
    '38159sRaEPf',
    '33498qfcJQD',
    '1563uJmoox',
    '56HTvUFL',
    'removeColumn'
  ];
  a86_0x205f = function () {
    return _0x24e4ab;
  };
  return a86_0x205f();
}
(function (_0x1e0ed8, _0x11277f) {
  const _0x31aee5 = a86_0x1d39,
    _0x11a568 = _0x1e0ed8();
  while (!![]) {
    try {
      const _0x7777dd =
        (-parseInt(_0x31aee5(0xfd)) / 0x1) *
          (parseInt(_0x31aee5(0x10c)) / 0x2) +
        (parseInt(_0x31aee5(0xfe)) / 0x3) *
          (-parseInt(_0x31aee5(0x101)) / 0x4) +
        (parseInt(_0x31aee5(0x103)) / 0x5) *
          (-parseInt(_0x31aee5(0x10b)) / 0x6) +
        -parseInt(_0x31aee5(0x10e)) / 0x7 +
        (-parseInt(_0x31aee5(0xff)) / 0x8) *
          (-parseInt(_0x31aee5(0x107)) / 0x9) +
        (-parseInt(_0x31aee5(0x106)) / 0xa) *
          (parseInt(_0x31aee5(0xfc)) / 0xb) +
        (parseInt(_0x31aee5(0x108)) / 0xc) * (parseInt(_0x31aee5(0x104)) / 0xd);
      if (_0x7777dd === _0x11277f) break;
      else _0x11a568['push'](_0x11a568['shift']());
    } catch (_0x13ae08) {
      _0x11a568['push'](_0x11a568['shift']());
    }
  }
})(a86_0x205f, 0x3f75a);
Object['defineProperty'](exports, a86_0x57843a(0x102), { value: !![] });
const sequelize_1 = require(a86_0x57843a(0x109));
function a86_0x1d39(_0xd199ed, _0x3989b2) {
  const _0x205f2e = a86_0x205f();
  return (
    (a86_0x1d39 = function (_0x1d3912, _0x36cb05) {
      _0x1d3912 = _0x1d3912 - 0xfa;
      let _0x549427 = _0x205f2e[_0x1d3912];
      return _0x549427;
    }),
    a86_0x1d39(_0xd199ed, _0x3989b2)
  );
}
module['exports'] = {
  up: _0x2ab26b => {
    const _0x52aa2a = a86_0x57843a;
    return _0x2ab26b[_0x52aa2a(0xfb)](_0x52aa2a(0xfa), _0x52aa2a(0x10f), {
      type: sequelize_1[_0x52aa2a(0x10d)][_0x52aa2a(0x10a)],
      references: { model: 'Companies', key: 'id' },
      onUpdate: _0x52aa2a(0x110),
      onDelete: _0x52aa2a(0x105)
    });
  },
  down: _0x13a81d => {
    const _0x4a9d92 = a86_0x57843a;
    return _0x13a81d[_0x4a9d92(0x100)](_0x4a9d92(0xfa), _0x4a9d92(0x10f));
  }
};
