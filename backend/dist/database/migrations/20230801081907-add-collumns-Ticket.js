'use strict';
const a215_0x15ef52 = a215_0x2b35;
(function (_0x10b403, _0x3f1013) {
  const _0x2fe6db = a215_0x2b35,
    _0x5c805d = _0x10b403();
  while (!![]) {
    try {
      const _0xc1dbbc =
        (-parseInt(_0x2fe6db(0x1b0)) / 0x1) *
          (parseInt(_0x2fe6db(0x1bc)) / 0x2) +
        parseInt(_0x2fe6db(0x1c5)) / 0x3 +
        parseInt(_0x2fe6db(0x1bf)) / 0x4 +
        (parseInt(_0x2fe6db(0x1b8)) / 0x5) *
          (-parseInt(_0x2fe6db(0x1c0)) / 0x6) +
        (-parseInt(_0x2fe6db(0x1c2)) / 0x7) *
          (parseInt(_0x2fe6db(0x1b5)) / 0x8) +
        parseInt(_0x2fe6db(0x1c6)) / 0x9 +
        (parseInt(_0x2fe6db(0x1c1)) / 0xa) * (parseInt(_0x2fe6db(0x1b6)) / 0xb);
      if (_0xc1dbbc === _0x3f1013) break;
      else _0x5c805d['push'](_0x5c805d['shift']());
    } catch (_0x83d71a) {
      _0x5c805d['push'](_0x5c805d['shift']());
    }
  }
})(a215_0x3608, 0x4081c);
Object[a215_0x15ef52(0x1be)](exports, '__esModule', { value: !![] });
const sequelize_1 = require('sequelize');
module[a215_0x15ef52(0x1b7)] = {
  up: _0x1184b5 => {
    const _0x1f2322 = a215_0x15ef52;
    return (
      _0x1184b5[_0x1f2322(0x1bb)](_0x1f2322(0x1bd), 'fromMe', {
        type: sequelize_1['DataTypes'][_0x1f2322(0x1b9)],
        defaultValue: ![],
        allowNull: ![]
      }),
      _0x1184b5[_0x1f2322(0x1bb)](_0x1f2322(0x1bd), _0x1f2322(0x1b2), {
        type: sequelize_1[_0x1f2322(0x1b4)]['BOOLEAN'],
        defaultValue: ![],
        allowNull: ![]
      }),
      _0x1184b5['addColumn'](_0x1f2322(0x1bd), _0x1f2322(0x1b3), {
        type: sequelize_1['DataTypes'][_0x1f2322(0x1c3)],
        defaultValue: 0x0,
        allowNull: ![]
      })
    );
  },
  down: _0x183cba => {
    const _0x4bd5a1 = a215_0x15ef52;
    return Promise[_0x4bd5a1(0x1b1)]([
      _0x183cba[_0x4bd5a1(0x1c4)]('Tickets', _0x4bd5a1(0x1ba)),
      _0x183cba['removeColumn'](_0x4bd5a1(0x1bd), 'sendInactiveMessage'),
      _0x183cba[_0x4bd5a1(0x1c4)]('Tickets', _0x4bd5a1(0x1b3))
    ]);
  }
};
function a215_0x2b35(_0x5da252, _0x34671f) {
  const _0x360835 = a215_0x3608();
  return (
    (a215_0x2b35 = function (_0x2b35b4, _0x56bf2e) {
      _0x2b35b4 = _0x2b35b4 - 0x1b0;
      let _0xcca064 = _0x360835[_0x2b35b4];
      return _0xcca064;
    }),
    a215_0x2b35(_0x5da252, _0x34671f)
  );
}
function a215_0x3608() {
  const _0x46a204 = [
    'defineProperty',
    '1988480OvohKl',
    '337332XYJFRg',
    '1880JbNcKq',
    '608069gGUGFu',
    'INTEGER',
    'removeColumn',
    '270033fXrSRg',
    '622215AkHjch',
    '1JWwfQo',
    'all',
    'sendInactiveMessage',
    'amountUsedBotQueuesNPS',
    'DataTypes',
    '8cGFERl',
    '4202WMwlBT',
    'exports',
    '10NqQqyI',
    'BOOLEAN',
    'fromMe',
    'addColumn',
    '529102XtTaeq',
    'Tickets'
  ];
  a215_0x3608 = function () {
    return _0x46a204;
  };
  return a215_0x3608();
}
