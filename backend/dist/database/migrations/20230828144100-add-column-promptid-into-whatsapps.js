'use strict';
const a234_0x3a6e78 = a234_0x2814;
function a234_0x2269() {
  const _0x1f25b2 = [
    'addColumn',
    '3057176wLzhAv',
    '4uYMILw',
    '2093298jRCHJF',
    '29365468ZjADpM',
    'promptId',
    '18PSTwfB',
    '299507lAlcsm',
    'defineProperty',
    '2981799JRBjba',
    'exports',
    'DataTypes',
    '3345775oOOeez',
    '2995490aCVAEw',
    '__esModule',
    '7gXLJpK',
    'INTEGER',
    'Whatsapps',
    '6BYAygG',
    'resolve'
  ];
  a234_0x2269 = function () {
    return _0x1f25b2;
  };
  return a234_0x2269();
}
(function (_0x567ef5, _0x45969f) {
  const _0x50a314 = a234_0x2814,
    _0x44afac = _0x567ef5();
  while (!![]) {
    try {
      const _0x46b060 =
        (parseInt(_0x50a314(0xaf)) / 0x1) * (-parseInt(_0x50a314(0xa6)) / 0x2) +
        (-parseInt(_0x50a314(0xb1)) / 0x3) * (parseInt(_0x50a314(0xaa)) / 0x4) +
        -parseInt(_0x50a314(0xb4)) / 0x5 +
        (-parseInt(_0x50a314(0xab)) / 0x6) *
          (-parseInt(_0x50a314(0xa3)) / 0x7) +
        -parseInt(_0x50a314(0xa9)) / 0x8 +
        (-parseInt(_0x50a314(0xae)) / 0x9) *
          (-parseInt(_0x50a314(0xa1)) / 0xa) +
        parseInt(_0x50a314(0xac)) / 0xb;
      if (_0x46b060 === _0x45969f) break;
      else _0x44afac['push'](_0x44afac['shift']());
    } catch (_0x47ff65) {
      _0x44afac['push'](_0x44afac['shift']());
    }
  }
})(a234_0x2269, 0xa4815);
Object[a234_0x3a6e78(0xb0)](exports, a234_0x3a6e78(0xa2), { value: !![] });
function a234_0x2814(_0x409225, _0x23702e) {
  const _0x226977 = a234_0x2269();
  return (
    (a234_0x2814 = function (_0x2814b8, _0x1ef998) {
      _0x2814b8 = _0x2814b8 - 0xa1;
      let _0x37c96a = _0x226977[_0x2814b8];
      return _0x37c96a;
    }),
    a234_0x2814(_0x409225, _0x23702e)
  );
}
const sequelize_1 = require('sequelize');
module[a234_0x3a6e78(0xb2)] = {
  up: async _0x5e5e64 => {
    const _0x16432a = a234_0x3a6e78,
      _0xde7fa3 = _0x16432a(0xa5),
      _0x519314 = _0x16432a(0xad),
      _0x1ec128 = await _0x5e5e64['describeTable'](_0xde7fa3);
    if (_0x1ec128[_0x519314]) return Promise[_0x16432a(0xa7)]();
    return _0x5e5e64[_0x16432a(0xa8)](_0xde7fa3, _0x519314, {
      type: sequelize_1[_0x16432a(0xb3)][_0x16432a(0xa4)],
      references: { model: 'Prompts', key: 'id' },
      onUpdate: 'RESTRICT',
      onDelete: 'RESTRICT'
    });
  },
  down: _0xc8d710 => {
    const _0x3d160c = a234_0x3a6e78;
    return _0xc8d710['removeColumn'](_0x3d160c(0xa5), _0x3d160c(0xad));
  }
};
