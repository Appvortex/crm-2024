'use strict';
function a268_0x16a4() {
  const _0x378ea6 = [
    'STRING',
    '12DXUFbo',
    'typebotRestartMessage',
    '46030yWbnSu',
    '485832kxwtiA',
    'QueueIntegrations',
    '182381xViPiQ',
    '9fVsElN',
    '943825HqxvxT',
    'addColumn',
    '8604DoURVl',
    'sequelize',
    '1177628EFzQdS',
    'typebotKeywordRestart',
    '5308548Xkhtqc',
    'exports',
    'defineProperty',
    '10939760YMdiLB',
    'removeColumn'
  ];
  a268_0x16a4 = function () {
    return _0x378ea6;
  };
  return a268_0x16a4();
}
const a268_0x385361 = a268_0x57d1;
function a268_0x57d1(_0x4f49fb, _0x2c9f36) {
  const _0x16a42b = a268_0x16a4();
  return (
    (a268_0x57d1 = function (_0x57d155, _0x3fe040) {
      _0x57d155 = _0x57d155 - 0x14e;
      let _0x3a42ae = _0x16a42b[_0x57d155];
      return _0x3a42ae;
    }),
    a268_0x57d1(_0x4f49fb, _0x2c9f36)
  );
}
(function (_0x4cb191, _0x45c2d4) {
  const _0x2937f6 = a268_0x57d1,
    _0x4af07a = _0x4cb191();
  while (!![]) {
    try {
      const _0x5dc219 =
        parseInt(_0x2937f6(0x153)) / 0x1 +
        -parseInt(_0x2937f6(0x159)) / 0x2 +
        (parseInt(_0x2937f6(0x154)) / 0x3) *
          (-parseInt(_0x2937f6(0x151)) / 0x4) +
        parseInt(_0x2937f6(0x155)) / 0x5 +
        (parseInt(_0x2937f6(0x14e)) / 0x6) *
          (-parseInt(_0x2937f6(0x15b)) / 0x7) +
        -parseInt(_0x2937f6(0x15e)) / 0x8 +
        (-parseInt(_0x2937f6(0x157)) / 0x9) *
          (-parseInt(_0x2937f6(0x150)) / 0xa);
      if (_0x5dc219 === _0x45c2d4) break;
      else _0x4af07a['push'](_0x4af07a['shift']());
    } catch (_0x2606dd) {
      _0x4af07a['push'](_0x4af07a['shift']());
    }
  }
})(a268_0x16a4, 0xe4154);
Object[a268_0x385361(0x15d)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a268_0x385361(0x158));
module[a268_0x385361(0x15c)] = {
  up: _0x463308 => {
    const _0x9decb5 = a268_0x385361;
    return (
      _0x463308['addColumn'](_0x9decb5(0x152), _0x9decb5(0x15a), {
        type: sequelize_1['DataTypes'][_0x9decb5(0x160)],
        allowNull: !![],
        defaultValue: ''
      }),
      _0x463308[_0x9decb5(0x156)](_0x9decb5(0x152), _0x9decb5(0x14f), {
        type: sequelize_1['DataTypes'][_0x9decb5(0x160)],
        allowNull: !![],
        defaultValue: ''
      })
    );
  },
  down: _0x164141 => {
    const _0xb80ca5 = a268_0x385361;
    return (
      _0x164141['removeColumn'](_0xb80ca5(0x152), _0xb80ca5(0x15a)),
      _0x164141[_0xb80ca5(0x15f)](_0xb80ca5(0x152), _0xb80ca5(0x14f))
    );
  }
};
