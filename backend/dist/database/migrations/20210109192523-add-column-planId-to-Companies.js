'use strict';
function a93_0xaec7(_0x37bd3c, _0x45e8d2) {
  const _0x3c858c = a93_0x3c85();
  return (
    (a93_0xaec7 = function (_0xaec7eb, _0x472168) {
      _0xaec7eb = _0xaec7eb - 0x1e8;
      let _0x34ed72 = _0x3c858c[_0xaec7eb];
      return _0x34ed72;
    }),
    a93_0xaec7(_0x37bd3c, _0x45e8d2)
  );
}
const a93_0x44f693 = a93_0xaec7;
(function (_0x440eb2, _0x131ac1) {
  const _0x4eb4a0 = a93_0xaec7,
    _0x30586b = _0x440eb2();
  while (!![]) {
    try {
      const _0x5e7531 =
        parseInt(_0x4eb4a0(0x1f9)) / 0x1 +
        (-parseInt(_0x4eb4a0(0x1e9)) / 0x2) *
          (-parseInt(_0x4eb4a0(0x1f6)) / 0x3) +
        (parseInt(_0x4eb4a0(0x1f4)) / 0x4) *
          (-parseInt(_0x4eb4a0(0x1ee)) / 0x5) +
        (parseInt(_0x4eb4a0(0x1ef)) / 0x6) *
          (-parseInt(_0x4eb4a0(0x1f1)) / 0x7) +
        parseInt(_0x4eb4a0(0x1f5)) / 0x8 +
        (parseInt(_0x4eb4a0(0x1f7)) / 0x9) *
          (-parseInt(_0x4eb4a0(0x1ea)) / 0xa) +
        parseInt(_0x4eb4a0(0x1f3)) / 0xb;
      if (_0x5e7531 === _0x131ac1) break;
      else _0x30586b['push'](_0x30586b['shift']());
    } catch (_0x33dd7a) {
      _0x30586b['push'](_0x30586b['shift']());
    }
  }
})(a93_0x3c85, 0xa9517);
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a93_0x44f693(0x1ec));
function a93_0x3c85() {
  const _0x7fbef2 = [
    '1722408ogjqoV',
    '27sGhQcl',
    '5166jNuvCJ',
    'removeColumn',
    '303364uSAgcz',
    'DataTypes',
    'Plans',
    'addColumn',
    'SET\x20NULL',
    '306118kmmyDW',
    '3620zYggWw',
    'Companies',
    'sequelize',
    'planId',
    '5AUebbe',
    '6xNcZlr',
    'CASCADE',
    '5652073CoPoXy',
    'exports',
    '12735558EhHyrl',
    '5380880UqsQWj'
  ];
  a93_0x3c85 = function () {
    return _0x7fbef2;
  };
  return a93_0x3c85();
}
module[a93_0x44f693(0x1f2)] = {
  up: _0x30b7bd => {
    const _0x3f03bc = a93_0x44f693;
    return _0x30b7bd[_0x3f03bc(0x1fc)](_0x3f03bc(0x1eb), _0x3f03bc(0x1ed), {
      type: sequelize_1[_0x3f03bc(0x1fa)]['INTEGER'],
      references: { model: _0x3f03bc(0x1fb), key: 'id' },
      onUpdate: _0x3f03bc(0x1f0),
      onDelete: _0x3f03bc(0x1e8)
    });
  },
  down: _0x44645f => {
    const _0x52e306 = a93_0x44f693;
    return _0x44645f[_0x52e306(0x1f8)](_0x52e306(0x1eb), _0x52e306(0x1ed));
  }
};
