'use strict';
const a94_0x2051a1 = a94_0x5c93;
(function (_0xcd97e5, _0x253a34) {
  const _0x22dbae = a94_0x5c93,
    _0xf30ad2 = _0xcd97e5();
  while (!![]) {
    try {
      const _0x912382 =
        (parseInt(_0x22dbae(0xae)) / 0x1) * (-parseInt(_0x22dbae(0xb4)) / 0x2) +
        (parseInt(_0x22dbae(0xb5)) / 0x3) * (parseInt(_0x22dbae(0xb2)) / 0x4) +
        (-parseInt(_0x22dbae(0xa9)) / 0x5) *
          (-parseInt(_0x22dbae(0xa1)) / 0x6) +
        -parseInt(_0x22dbae(0xa5)) / 0x7 +
        (parseInt(_0x22dbae(0xa8)) / 0x8) * (parseInt(_0x22dbae(0xad)) / 0x9) +
        parseInt(_0x22dbae(0xa6)) / 0xa +
        (parseInt(_0x22dbae(0xa2)) / 0xb) * (-parseInt(_0x22dbae(0xb0)) / 0xc);
      if (_0x912382 === _0x253a34) break;
      else _0xf30ad2['push'](_0xf30ad2['shift']());
    } catch (_0x2decb6) {
      _0xf30ad2['push'](_0xf30ad2['shift']());
    }
  }
})(a94_0x89c5, 0xa11f7);
function a94_0x5c93(_0x5280a5, _0x161b4a) {
  const _0x89c5b7 = a94_0x89c5();
  return (
    (a94_0x5c93 = function (_0x5c93e6, _0x145608) {
      _0x5c93e6 = _0x5c93e6 - 0xa1;
      let _0x436ca6 = _0x89c5b7[_0x5c93e6];
      return _0x436ca6;
    }),
    a94_0x5c93(_0x5280a5, _0x161b4a)
  );
}
function a94_0x89c5() {
  const _0x49c641 = [
    '1787988tKDLJd',
    'removeColumn',
    '56mOXUtI',
    'addColumn',
    '2522918IjxrBM',
    '186078NjavUV',
    'all',
    '92094QXaMFC',
    '66fgCIvM',
    'defineProperty',
    'BOOLEAN',
    '3088379ApPuVB',
    '4932580AMqpOl',
    'sequelize',
    '8tNYWlW',
    '320RSXcOw',
    'Companies',
    'DataTypes',
    'schedules',
    '8213859JACAfT',
    '1GhoSdw',
    'status'
  ];
  a94_0x89c5 = function () {
    return _0x49c641;
  };
  return a94_0x89c5();
}
Object[a94_0x2051a1(0xa3)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a94_0x2051a1(0xa7));
module['exports'] = {
  up: _0x5b80d1 => {
    const _0x2e4e0c = a94_0x2051a1;
    return Promise['all']([
      _0x5b80d1[_0x2e4e0c(0xb3)](_0x2e4e0c(0xaa), _0x2e4e0c(0xaf), {
        type: sequelize_1[_0x2e4e0c(0xab)][_0x2e4e0c(0xa4)],
        defaultValue: !![]
      }),
      _0x5b80d1[_0x2e4e0c(0xb3)](_0x2e4e0c(0xaa), _0x2e4e0c(0xac), {
        type: sequelize_1[_0x2e4e0c(0xab)]['JSONB'],
        defaultValue: []
      })
    ]);
  },
  down: _0x5f1674 => {
    const _0x3eda70 = a94_0x2051a1;
    return Promise[_0x3eda70(0xb6)]([
      _0x5f1674[_0x3eda70(0xb1)](_0x3eda70(0xaa), _0x3eda70(0xac)),
      _0x5f1674['removeColumn'](_0x3eda70(0xaa), _0x3eda70(0xaf))
    ]);
  }
};
