'use strict';
function a137_0x110f() {
  const _0x1cc02b = [
    '5NmSJRL',
    'Queues',
    '7084512HKZcrD',
    'all',
    'removeColumn',
    'defineProperty',
    '222318ImcbdB',
    '155019OaRNTq',
    'STRING',
    'addColumn',
    '890rHwZwj',
    '__esModule',
    '426144AsjOkV',
    '7430828FjgfTM',
    'exports',
    '608960CspDIQ',
    'startTime',
    '2989679yOHxfl',
    '40YgiNYn',
    'TEXT',
    'DataTypes'
  ];
  a137_0x110f = function () {
    return _0x1cc02b;
  };
  return a137_0x110f();
}
const a137_0x3644f7 = a137_0x4af9;
(function (_0x2e0c2a, _0x5bf4a4) {
  const _0x5f162 = a137_0x4af9,
    _0x2a7d52 = _0x2e0c2a();
  while (!![]) {
    try {
      const _0x189ad8 =
        -parseInt(_0x5f162(0x1c9)) / 0x1 +
        (-parseInt(_0x5f162(0x1cf)) / 0x2) *
          (-parseInt(_0x5f162(0x1c4)) / 0x3) +
        (parseInt(_0x5f162(0x1ca)) / 0x4) * (parseInt(_0x5f162(0x1d2)) / 0x5) +
        parseInt(_0x5f162(0x1d4)) / 0x6 +
        -parseInt(_0x5f162(0x1ce)) / 0x7 +
        -parseInt(_0x5f162(0x1cc)) / 0x8 +
        (-parseInt(_0x5f162(0x1c3)) / 0x9) * (parseInt(_0x5f162(0x1c7)) / 0xa);
      if (_0x189ad8 === _0x5bf4a4) break;
      else _0x2a7d52['push'](_0x2a7d52['shift']());
    } catch (_0x15806c) {
      _0x2a7d52['push'](_0x2a7d52['shift']());
    }
  }
})(a137_0x110f, 0xe67d0);
Object[a137_0x3644f7(0x1c2)](exports, a137_0x3644f7(0x1c8), { value: !![] });
const sequelize_1 = require('sequelize');
function a137_0x4af9(_0x5900ef, _0x4b04c3) {
  const _0x110fbd = a137_0x110f();
  return (
    (a137_0x4af9 = function (_0x4af955, _0x40fe45) {
      _0x4af955 = _0x4af955 - 0x1c0;
      let _0x4433c7 = _0x110fbd[_0x4af955];
      return _0x4433c7;
    }),
    a137_0x4af9(_0x5900ef, _0x4b04c3)
  );
}
module[a137_0x3644f7(0x1cb)] = {
  up: _0x10223f => {
    const _0x1d3c76 = a137_0x3644f7;
    return Promise[_0x1d3c76(0x1c0)]([
      _0x10223f['addColumn']('Queues', _0x1d3c76(0x1cd), {
        type: sequelize_1['DataTypes'][_0x1d3c76(0x1c5)],
        defaultValue: null
      }),
      _0x10223f[_0x1d3c76(0x1c6)](_0x1d3c76(0x1d3), 'endTime', {
        type: sequelize_1[_0x1d3c76(0x1d1)][_0x1d3c76(0x1c5)],
        defaultValue: null
      }),
      _0x10223f[_0x1d3c76(0x1c6)]('Queues', 'outOfHoursMessage', {
        type: sequelize_1['DataTypes'][_0x1d3c76(0x1d0)],
        defaultValue: null
      })
    ]);
  },
  down: _0xf35df6 => {
    const _0x48487d = a137_0x3644f7;
    return Promise[_0x48487d(0x1c0)]([
      _0xf35df6['removeColumn']('Queues', _0x48487d(0x1cd)),
      _0xf35df6[_0x48487d(0x1c1)](_0x48487d(0x1d3), 'endTime'),
      _0xf35df6[_0x48487d(0x1c1)](_0x48487d(0x1d3), 'outOfHoursMessage')
    ]);
  }
};
