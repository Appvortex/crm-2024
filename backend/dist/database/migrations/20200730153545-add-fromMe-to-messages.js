'use strict';
const a60_0x53fa41 = a60_0xbe42;
function a60_0x3529() {
  const _0x38bac4 = [
    '90769FlJNWH',
    'DataTypes',
    '271704eCJvYS',
    '8060mnDIqy',
    '3723320FnhgZm',
    '403200PCIfDE',
    '7794MSHrap',
    '__esModule',
    'defineProperty',
    '126sZteVR',
    '9219rDvjWh',
    '444225tTFMKk',
    'fromMe',
    'exports',
    'sequelize',
    '48iukoTw'
  ];
  a60_0x3529 = function () {
    return _0x38bac4;
  };
  return a60_0x3529();
}
function a60_0xbe42(_0x5bc7d6, _0x5eeef5) {
  const _0x35298c = a60_0x3529();
  return (
    (a60_0xbe42 = function (_0xbe428b, _0x45d0b2) {
      _0xbe428b = _0xbe428b - 0x1a5;
      let _0x1214f4 = _0x35298c[_0xbe428b];
      return _0x1214f4;
    }),
    a60_0xbe42(_0x5bc7d6, _0x5eeef5)
  );
}
(function (_0x474332, _0x3e6e68) {
  const _0x23d49a = a60_0xbe42,
    _0xafe75b = _0x474332();
  while (!![]) {
    try {
      const _0xcd6b06 =
        -parseInt(_0x23d49a(0x1b4)) / 0x1 +
        (-parseInt(_0x23d49a(0x1b2)) / 0x2) *
          (-parseInt(_0x23d49a(0x1b3)) / 0x3) +
        parseInt(_0x23d49a(0x1ab)) / 0x4 +
        parseInt(_0x23d49a(0x1ae)) / 0x5 +
        (-parseInt(_0x23d49a(0x1a8)) / 0x6) *
          (-parseInt(_0x23d49a(0x1a9)) / 0x7) +
        -parseInt(_0x23d49a(0x1ad)) / 0x8 +
        (parseInt(_0x23d49a(0x1af)) / 0x9) * (parseInt(_0x23d49a(0x1ac)) / 0xa);
      if (_0xcd6b06 === _0x3e6e68) break;
      else _0xafe75b['push'](_0xafe75b['shift']());
    } catch (_0x57f050) {
      _0xafe75b['push'](_0xafe75b['shift']());
    }
  }
})(a60_0x3529, 0x39311);
Object[a60_0x53fa41(0x1b1)](exports, a60_0x53fa41(0x1b0), { value: !![] });
const sequelize_1 = require(a60_0x53fa41(0x1a7));
module[a60_0x53fa41(0x1a6)] = {
  up: _0x1aaee5 => {
    const _0x3a016e = a60_0x53fa41;
    return _0x1aaee5['addColumn']('Messages', 'fromMe', {
      type: sequelize_1[_0x3a016e(0x1aa)]['BOOLEAN'],
      allowNull: ![],
      defaultValue: ![]
    });
  },
  down: _0x460e12 => {
    const _0x2f1750 = a60_0x53fa41;
    return _0x460e12['removeColumn']('Messages', _0x2f1750(0x1a5));
  }
};
