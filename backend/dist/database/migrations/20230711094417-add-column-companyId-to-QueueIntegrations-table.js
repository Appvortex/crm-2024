'use strict';
const a201_0xdb253b = a201_0x2e1c;
(function (_0x42a59e, _0x1227dd) {
  const _0x2a6542 = a201_0x2e1c,
    _0x40e5e7 = _0x42a59e();
  while (!![]) {
    try {
      const _0x4853ba =
        parseInt(_0x2a6542(0x180)) / 0x1 +
        (-parseInt(_0x2a6542(0x17a)) / 0x2) *
          (-parseInt(_0x2a6542(0x176)) / 0x3) +
        parseInt(_0x2a6542(0x183)) / 0x4 +
        (parseInt(_0x2a6542(0x171)) / 0x5) *
          (parseInt(_0x2a6542(0x173)) / 0x6) +
        -parseInt(_0x2a6542(0x181)) / 0x7 +
        (parseInt(_0x2a6542(0x182)) / 0x8) *
          (parseInt(_0x2a6542(0x179)) / 0x9) +
        -parseInt(_0x2a6542(0x174)) / 0xa;
      if (_0x4853ba === _0x1227dd) break;
      else _0x40e5e7['push'](_0x40e5e7['shift']());
    } catch (_0x285228) {
      _0x40e5e7['push'](_0x40e5e7['shift']());
    }
  }
})(a201_0x1330, 0xbfae8);
function a201_0x2e1c(_0x714946, _0x678195) {
  const _0x1330b = a201_0x1330();
  return (
    (a201_0x2e1c = function (_0x2e1cd0, _0x191532) {
      _0x2e1cd0 = _0x2e1cd0 - 0x171;
      let _0x107035 = _0x1330b[_0x2e1cd0];
      return _0x107035;
    }),
    a201_0x2e1c(_0x714946, _0x678195)
  );
}
Object[a201_0xdb253b(0x172)](exports, a201_0xdb253b(0x17f), { value: !![] });
function a201_0x1330() {
  const _0x216527 = [
    '3115368EWFjfs',
    '734WNzrsw',
    'SET\x20NULL',
    'companyId',
    'addColumn',
    'QueueIntegrations',
    '__esModule',
    '427914qCNGGr',
    '4359768JjxmbH',
    '8pQyhnu',
    '1876828aFDCkz',
    'INTEGER',
    'Companies',
    '4944515sdWVvk',
    'defineProperty',
    '6KCAASj',
    '17993430VgEWXL',
    'exports',
    '7971hcjRru',
    'removeColumn',
    'CASCADE'
  ];
  a201_0x1330 = function () {
    return _0x216527;
  };
  return a201_0x1330();
}
const sequelize_1 = require('sequelize');
module[a201_0xdb253b(0x175)] = {
  up: _0x586fe9 => {
    const _0x92ff10 = a201_0xdb253b;
    return _0x586fe9[_0x92ff10(0x17d)]('QueueIntegrations', 'companyId', {
      type: sequelize_1['DataTypes'][_0x92ff10(0x184)],
      references: { model: _0x92ff10(0x185), key: 'id' },
      onUpdate: _0x92ff10(0x178),
      onDelete: _0x92ff10(0x17b)
    });
  },
  down: _0x319617 => {
    const _0x11fa70 = a201_0xdb253b;
    return _0x319617[_0x11fa70(0x177)](_0x11fa70(0x17e), _0x11fa70(0x17c));
  }
};
