'use strict';
const a244_0x17680d = a244_0x1f46;
function a244_0x1f46(_0xd062e4, _0x39bb6b) {
  const _0x48693f = a244_0x4869();
  return (
    (a244_0x1f46 = function (_0x1f46c3, _0x43431f) {
      _0x1f46c3 = _0x1f46c3 - 0x8e;
      let _0x3f2f2d = _0x48693f[_0x1f46c3];
      return _0x3f2f2d;
    }),
    a244_0x1f46(_0xd062e4, _0x39bb6b)
  );
}
(function (_0x242883, _0x212296) {
  const _0x6e1944 = a244_0x1f46,
    _0x4d17ec = _0x242883();
  while (!![]) {
    try {
      const _0x572a34 =
        -parseInt(_0x6e1944(0x92)) / 0x1 +
        (parseInt(_0x6e1944(0x9a)) / 0x2) * (parseInt(_0x6e1944(0x90)) / 0x3) +
        (parseInt(_0x6e1944(0x97)) / 0x4) * (parseInt(_0x6e1944(0x8f)) / 0x5) +
        -parseInt(_0x6e1944(0x8e)) / 0x6 +
        parseInt(_0x6e1944(0x9f)) / 0x7 +
        parseInt(_0x6e1944(0x91)) / 0x8 +
        (parseInt(_0x6e1944(0x93)) / 0x9) * (-parseInt(_0x6e1944(0x9d)) / 0xa);
      if (_0x572a34 === _0x212296) break;
      else _0x4d17ec['push'](_0x4d17ec['shift']());
    } catch (_0x62f701) {
      _0x4d17ec['push'](_0x4d17ec['shift']());
    }
  }
})(a244_0x4869, 0xf0c58);
function a244_0x4869() {
  const _0x268e93 = [
    '952361jNRPRh',
    '99eytGSH',
    'fileListId',
    'DataTypes',
    'Files',
    '343236StYfHq',
    'addColumn',
    'CASCADE',
    '10iQJGWT',
    'defineProperty',
    'exports',
    '598760gLbUcE',
    '__esModule',
    '9300543jAShjL',
    'Queues',
    '5583324NuxjMu',
    '35EYHJdc',
    '829965EMZKXb',
    '1721312sSamxB'
  ];
  a244_0x4869 = function () {
    return _0x268e93;
  };
  return a244_0x4869();
}
Object[a244_0x17680d(0x9b)](exports, a244_0x17680d(0x9e), { value: !![] });
const sequelize_1 = require('sequelize');
module[a244_0x17680d(0x9c)] = {
  up: _0x177cfa => {
    const _0x9a43c8 = a244_0x17680d;
    return _0x177cfa[_0x9a43c8(0x98)](_0x9a43c8(0xa0), 'fileListId', {
      type: sequelize_1[_0x9a43c8(0x95)]['INTEGER'],
      references: { model: _0x9a43c8(0x96), key: 'id' },
      onUpdate: _0x9a43c8(0x99),
      onDelete: 'SET\x20NULL'
    });
  },
  down: _0x10b489 => {
    const _0x42768e = a244_0x17680d;
    return _0x10b489['removeColumn'](_0x42768e(0xa0), _0x42768e(0x94));
  }
};
