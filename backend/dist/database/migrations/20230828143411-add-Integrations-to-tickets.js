'use strict';
const a231_0x310a4d = a231_0x2532;
function a231_0xda50() {
  const _0x311838 = [
    '61293andemU',
    'all',
    'Tickets',
    'exports',
    '4819870fcRqea',
    '4241iCNwoK',
    '200TyKttf',
    '138fIkYfk',
    '__esModule',
    'useIntegration',
    'removeColumn',
    'defineProperty',
    '87773qegegI',
    'sequelize',
    'integrationId',
    'INTEGER',
    'addColumn',
    '7106598GoFZhh',
    '168bJlDMv',
    'DataTypes',
    'QueueIntegrations',
    '9445887hdAKyU',
    '2716200cjKqog'
  ];
  a231_0xda50 = function () {
    return _0x311838;
  };
  return a231_0xda50();
}
function a231_0x2532(_0x37337c, _0x1d64b0) {
  const _0xda5098 = a231_0xda50();
  return (
    (a231_0x2532 = function (_0x25320a, _0x4f8e75) {
      _0x25320a = _0x25320a - 0x1e5;
      let _0x4dbb5d = _0xda5098[_0x25320a];
      return _0x4dbb5d;
    }),
    a231_0x2532(_0x37337c, _0x1d64b0)
  );
}
(function (_0x24b3bd, _0x14db10) {
  const _0x15d162 = a231_0x2532,
    _0x1f79ec = _0x24b3bd();
  while (!![]) {
    try {
      const _0xed21af =
        (parseInt(_0x15d162(0x1e5)) / 0x1) *
          (-parseInt(_0x15d162(0x1e7)) / 0x2) +
        (parseInt(_0x15d162(0x1f7)) / 0x3) *
          (parseInt(_0x15d162(0x1f2)) / 0x4) +
        -parseInt(_0x15d162(0x1f6)) / 0x5 +
        parseInt(_0x15d162(0x1f1)) / 0x6 +
        (-parseInt(_0x15d162(0x1ec)) / 0x7) *
          (-parseInt(_0x15d162(0x1e6)) / 0x8) +
        -parseInt(_0x15d162(0x1f5)) / 0x9 +
        parseInt(_0x15d162(0x1fb)) / 0xa;
      if (_0xed21af === _0x14db10) break;
      else _0x1f79ec['push'](_0x1f79ec['shift']());
    } catch (_0x245c17) {
      _0x1f79ec['push'](_0x1f79ec['shift']());
    }
  }
})(a231_0xda50, 0xe8909);
Object[a231_0x310a4d(0x1eb)](exports, a231_0x310a4d(0x1e8), { value: !![] });
const sequelize_1 = require(a231_0x310a4d(0x1ed));
module[a231_0x310a4d(0x1fa)] = {
  up: _0xf81981 => {
    const _0x356698 = a231_0x310a4d;
    return (
      _0xf81981[_0x356698(0x1f0)]('Tickets', _0x356698(0x1e9), {
        type: sequelize_1[_0x356698(0x1f3)]['BOOLEAN'],
        defaultValue: ![],
        allowNull: !![]
      }),
      _0xf81981[_0x356698(0x1f0)](_0x356698(0x1f9), 'integrationId', {
        references: { model: _0x356698(0x1f4), key: 'id' },
        type: sequelize_1[_0x356698(0x1f3)][_0x356698(0x1ef)],
        defaultValue: null,
        allowNull: !![]
      })
    );
  },
  down: _0x2d7726 => {
    const _0x1e5cc4 = a231_0x310a4d;
    return Promise[_0x1e5cc4(0x1f8)]([
      _0x2d7726[_0x1e5cc4(0x1ea)](_0x1e5cc4(0x1f9), 'useIntegration'),
      _0x2d7726[_0x1e5cc4(0x1ea)](_0x1e5cc4(0x1f9), _0x1e5cc4(0x1ee))
    ]);
  }
};
