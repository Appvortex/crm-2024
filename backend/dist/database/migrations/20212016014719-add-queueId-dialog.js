'use strict';
const a117_0x3ba90d = a117_0x7565;
(function (_0x49b5d7, _0x58730a) {
  const _0x436c76 = a117_0x7565,
    _0x1ffb94 = _0x49b5d7();
  while (!![]) {
    try {
      const _0x41a4a1 =
        (parseInt(_0x436c76(0x1e9)) / 0x1) *
          (parseInt(_0x436c76(0x1f8)) / 0x2) +
        (parseInt(_0x436c76(0x1f3)) / 0x3) *
          (-parseInt(_0x436c76(0x1ec)) / 0x4) +
        (parseInt(_0x436c76(0x1e6)) / 0x5) *
          (-parseInt(_0x436c76(0x1f5)) / 0x6) +
        -parseInt(_0x436c76(0x1f9)) / 0x7 +
        -parseInt(_0x436c76(0x1eb)) / 0x8 +
        parseInt(_0x436c76(0x1ef)) / 0x9 +
        parseInt(_0x436c76(0x1e7)) / 0xa;
      if (_0x41a4a1 === _0x58730a) break;
      else _0x1ffb94['push'](_0x1ffb94['shift']());
    } catch (_0x32d628) {
      _0x1ffb94['push'](_0x1ffb94['shift']());
    }
  }
})(a117_0x4b54, 0x9af62);
function a117_0x4b54() {
  const _0x559da1 = [
    'DialogChatBots',
    '177IneUUA',
    'SET\x20NULL',
    '1038372HncpBL',
    'defineProperty',
    'INTEGER',
    '10zjYcuK',
    '4444412swYDrN',
    'sequelize',
    '__esModule',
    '15PJCFqO',
    '11092140ksXFJZ',
    'queueId',
    '207406URDviW',
    'CASCADE',
    '4093480mLMeAt',
    '60508Nrceof',
    'removeColumn',
    'addColumn',
    '9420822hIaFvn',
    'Queues',
    'exports'
  ];
  a117_0x4b54 = function () {
    return _0x559da1;
  };
  return a117_0x4b54();
}
function a117_0x7565(_0x19bb00, _0x555b3d) {
  const _0x4b5498 = a117_0x4b54();
  return (
    (a117_0x7565 = function (_0x7565a4, _0x4820cf) {
      _0x7565a4 = _0x7565a4 - 0x1e4;
      let _0x5b0323 = _0x4b5498[_0x7565a4];
      return _0x5b0323;
    }),
    a117_0x7565(_0x19bb00, _0x555b3d)
  );
}
Object[a117_0x3ba90d(0x1f6)](exports, a117_0x3ba90d(0x1e5), { value: !![] });
const sequelize_1 = require(a117_0x3ba90d(0x1e4));
module[a117_0x3ba90d(0x1f1)] = {
  up: _0xdcfc0 => {
    const _0x3b8a20 = a117_0x3ba90d;
    return _0xdcfc0[_0x3b8a20(0x1ee)](_0x3b8a20(0x1f2), _0x3b8a20(0x1e8), {
      type: sequelize_1['DataTypes'][_0x3b8a20(0x1f7)],
      references: { model: _0x3b8a20(0x1f0), key: 'id' },
      onUpdate: _0x3b8a20(0x1ea),
      onDelete: _0x3b8a20(0x1f4)
    });
  },
  down: _0x4725af => {
    const _0x1e3021 = a117_0x3ba90d;
    return _0x4725af[_0x1e3021(0x1ed)](_0x1e3021(0x1f2), 'queueId');
  }
};
