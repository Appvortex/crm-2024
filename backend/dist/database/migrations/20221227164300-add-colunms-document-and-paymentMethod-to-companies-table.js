'use strict';
const a149_0x573822 = a149_0x4afe;
function a149_0x1d5f() {
  const _0x2e1551 = [
    'STRING',
    '125221JDzLSG',
    'DataTypes',
    'addColumn',
    '2304908LKoOXA',
    '69912iEHUsq',
    '1195383njcLOK',
    '__esModule',
    '5512390HdiBPl',
    'defineProperty',
    'sequelize',
    '6UjoYoZ',
    '472NXLncK',
    'paymentMethod',
    'document',
    'all',
    '1921745YbNJye',
    '20383880TvGHrx',
    '3Jehevs',
    'exports',
    'Companies',
    'removeColumn',
    '4uLjCgT'
  ];
  a149_0x1d5f = function () {
    return _0x2e1551;
  };
  return a149_0x1d5f();
}
(function (_0x4afddc, _0x191ba7) {
  const _0x55be23 = a149_0x4afe,
    _0x5338b2 = _0x4afddc();
  while (!![]) {
    try {
      const _0x4fdd68 =
        (parseInt(_0x55be23(0x7a)) / 0x1) * (parseInt(_0x55be23(0x78)) / 0x2) +
        (-parseInt(_0x55be23(0x8b)) / 0x3) * (parseInt(_0x55be23(0x7d)) / 0x4) +
        -parseInt(_0x55be23(0x89)) / 0x5 +
        (parseInt(_0x55be23(0x84)) / 0x6) * (parseInt(_0x55be23(0x7f)) / 0x7) +
        (parseInt(_0x55be23(0x85)) / 0x8) * (-parseInt(_0x55be23(0x7e)) / 0x9) +
        -parseInt(_0x55be23(0x81)) / 0xa +
        parseInt(_0x55be23(0x8a)) / 0xb;
      if (_0x4fdd68 === _0x191ba7) break;
      else _0x5338b2['push'](_0x5338b2['shift']());
    } catch (_0x2a2410) {
      _0x5338b2['push'](_0x5338b2['shift']());
    }
  }
})(a149_0x1d5f, 0x4a424);
function a149_0x4afe(_0x3ffe7a, _0x399a68) {
  const _0x1d5f32 = a149_0x1d5f();
  return (
    (a149_0x4afe = function (_0x4afe7c, _0xa31cb2) {
      _0x4afe7c = _0x4afe7c - 0x75;
      let _0x1de614 = _0x1d5f32[_0x4afe7c];
      return _0x1de614;
    }),
    a149_0x4afe(_0x3ffe7a, _0x399a68)
  );
}
Object[a149_0x573822(0x82)](exports, a149_0x573822(0x80), { value: !![] });
const sequelize_1 = require(a149_0x573822(0x83));
module[a149_0x573822(0x75)] = {
  up: _0x2b1a3f => {
    const _0x5917e8 = a149_0x573822;
    return Promise[_0x5917e8(0x88)]([
      _0x2b1a3f[_0x5917e8(0x7c)]('Companies', _0x5917e8(0x87), {
        type: sequelize_1[_0x5917e8(0x7b)][_0x5917e8(0x79)],
        defaultValue: ''
      }),
      _0x2b1a3f['addColumn'](_0x5917e8(0x76), _0x5917e8(0x86), {
        type: sequelize_1[_0x5917e8(0x7b)][_0x5917e8(0x79)],
        defaultValue: ''
      })
    ]);
  },
  down: _0xdfa1cf => {
    const _0x87ebfa = a149_0x573822;
    return Promise[_0x87ebfa(0x88)]([
      _0xdfa1cf[_0x87ebfa(0x77)](_0x87ebfa(0x76), 'document'),
      _0xdfa1cf['removeColumn'](_0x87ebfa(0x76), _0x87ebfa(0x86))
    ]);
  }
};
