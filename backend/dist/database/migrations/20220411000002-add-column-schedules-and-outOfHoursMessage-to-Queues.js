'use strict';
const a139_0x45aff1 = a139_0x593f;
function a139_0x29b7() {
  const _0x1f5e8b = [
    '2608mTYTwE',
    '448109OxHJJH',
    'all',
    'addColumn',
    'schedules',
    'DataTypes',
    'sequelize',
    '__esModule',
    '2005hBrboI',
    '5490762CJXwLW',
    'outOfHoursMessage',
    'JSONB',
    '8835323TKzGOf',
    '1906970WmhVTZ',
    '2TezvHy',
    '28062BoeyIs',
    'TEXT',
    'exports',
    'defineProperty',
    '99AXQoZU',
    '1632993JnujUb',
    '1852EHZidz',
    'Queues'
  ];
  a139_0x29b7 = function () {
    return _0x1f5e8b;
  };
  return a139_0x29b7();
}
function a139_0x593f(_0x3d18d6, _0x260b3d) {
  const _0x29b7ea = a139_0x29b7();
  return (
    (a139_0x593f = function (_0x593ff8, _0x541b64) {
      _0x593ff8 = _0x593ff8 - 0x114;
      let _0x41b658 = _0x29b7ea[_0x593ff8];
      return _0x41b658;
    }),
    a139_0x593f(_0x3d18d6, _0x260b3d)
  );
}
(function (_0x2ef088, _0x41d0f3) {
  const _0xaad4e2 = a139_0x593f,
    _0x105e1e = _0x2ef088();
  while (!![]) {
    try {
      const _0x691a00 =
        (-parseInt(_0xaad4e2(0x122)) / 0x1) *
          (parseInt(_0xaad4e2(0x118)) / 0x2) +
        parseInt(_0xaad4e2(0x11e)) / 0x3 +
        (-parseInt(_0xaad4e2(0x11f)) / 0x4) *
          (-parseInt(_0xaad4e2(0x129)) / 0x5) +
        parseInt(_0xaad4e2(0x12a)) / 0x6 +
        -parseInt(_0xaad4e2(0x116)) / 0x7 +
        (-parseInt(_0xaad4e2(0x121)) / 0x8) *
          (parseInt(_0xaad4e2(0x119)) / 0x9) +
        (parseInt(_0xaad4e2(0x117)) / 0xa) * (parseInt(_0xaad4e2(0x11d)) / 0xb);
      if (_0x691a00 === _0x41d0f3) break;
      else _0x105e1e['push'](_0x105e1e['shift']());
    } catch (_0x5e8fda) {
      _0x105e1e['push'](_0x105e1e['shift']());
    }
  }
})(a139_0x29b7, 0x9af04);
Object[a139_0x45aff1(0x11c)](exports, a139_0x45aff1(0x128), { value: !![] });
const sequelize_1 = require(a139_0x45aff1(0x127));
module[a139_0x45aff1(0x11b)] = {
  up: _0x452401 => {
    const _0x424ccd = a139_0x45aff1;
    return Promise[_0x424ccd(0x123)]([
      _0x452401[_0x424ccd(0x124)](_0x424ccd(0x120), _0x424ccd(0x125), {
        type: sequelize_1[_0x424ccd(0x126)][_0x424ccd(0x115)],
        defaultValue: []
      }),
      _0x452401['addColumn'](_0x424ccd(0x120), _0x424ccd(0x114), {
        type: sequelize_1[_0x424ccd(0x126)][_0x424ccd(0x11a)],
        allowNull: !![]
      })
    ]);
  },
  down: _0x227ede => {
    const _0x4fa17a = a139_0x45aff1;
    return Promise[_0x4fa17a(0x123)]([
      _0x227ede['removeColumn'](_0x4fa17a(0x120), _0x4fa17a(0x125)),
      _0x227ede['removeColumn'](_0x4fa17a(0x120), 'outOfHoursMessage')
    ]);
  }
};
