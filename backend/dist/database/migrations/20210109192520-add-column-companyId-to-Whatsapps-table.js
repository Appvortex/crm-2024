'use strict';
const a89_0x1a7b4e = a89_0x188d;
function a89_0x5d41() {
  const _0x5ba9e4 = [
    '30SDKWFm',
    'exports',
    '677349SvFTAR',
    'removeColumn',
    '135WWPwSa',
    '7GkCYBv',
    '463812uiwdYN',
    'defineProperty',
    'companyId',
    '__esModule',
    '393330RemdNh',
    'Whatsapps',
    '2137064WrXdUg',
    '999832DgWSoX',
    '51282gkMPop',
    'DataTypes',
    '73981InRSDb',
    'addColumn'
  ];
  a89_0x5d41 = function () {
    return _0x5ba9e4;
  };
  return a89_0x5d41();
}
(function (_0x3adffc, _0x2e04c2) {
  const _0x5036ea = a89_0x188d,
    _0x43929d = _0x3adffc();
  while (!![]) {
    try {
      const _0x1a3527 =
        parseInt(_0x5036ea(0xfc)) / 0x1 +
        -parseInt(_0x5036ea(0x104)) / 0x2 +
        -parseInt(_0x5036ea(0x100)) / 0x3 +
        parseInt(_0x5036ea(0xf9)) / 0x4 +
        (parseInt(_0x5036ea(0xfe)) / 0x5) * (-parseInt(_0x5036ea(0xfa)) / 0x6) +
        (-parseInt(_0x5036ea(0x103)) / 0x7) *
          (parseInt(_0x5036ea(0xf8)) / 0x8) +
        (parseInt(_0x5036ea(0x102)) / 0x9) * (parseInt(_0x5036ea(0xf6)) / 0xa);
      if (_0x1a3527 === _0x2e04c2) break;
      else _0x43929d['push'](_0x43929d['shift']());
    } catch (_0x500856) {
      _0x43929d['push'](_0x43929d['shift']());
    }
  }
})(a89_0x5d41, 0x21a66);
function a89_0x188d(_0x4207f2, _0x5838f9) {
  const _0x5d4141 = a89_0x5d41();
  return (
    (a89_0x188d = function (_0x188d04, _0x13a0c3) {
      _0x188d04 = _0x188d04 - 0xf5;
      let _0x28aa9a = _0x5d4141[_0x188d04];
      return _0x28aa9a;
    }),
    a89_0x188d(_0x4207f2, _0x5838f9)
  );
}
Object[a89_0x1a7b4e(0x105)](exports, a89_0x1a7b4e(0xf5), { value: !![] });
const sequelize_1 = require('sequelize');
module[a89_0x1a7b4e(0xff)] = {
  up: _0x5ed335 => {
    const _0x459688 = a89_0x1a7b4e;
    return _0x5ed335[_0x459688(0xfd)](_0x459688(0xf7), _0x459688(0x106), {
      type: sequelize_1[_0x459688(0xfb)]['INTEGER'],
      references: { model: 'Companies', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET\x20NULL'
    });
  },
  down: _0x27d0d3 => {
    const _0x5e05f1 = a89_0x1a7b4e;
    return _0x27d0d3[_0x5e05f1(0x101)](_0x5e05f1(0xf7), _0x5e05f1(0x106));
  }
};
