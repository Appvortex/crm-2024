'use strict';
const a267_0x1500b2 = a267_0x14d9;
(function (_0x34aacc, _0x4bb289) {
  const _0x1fcd89 = a267_0x14d9,
    _0x2872ad = _0x34aacc();
  while (!![]) {
    try {
      const _0x1546ff =
        (-parseInt(_0x1fcd89(0x1a2)) / 0x1) *
          (-parseInt(_0x1fcd89(0x1ae)) / 0x2) +
        (-parseInt(_0x1fcd89(0x19c)) / 0x3) *
          (-parseInt(_0x1fcd89(0x1a8)) / 0x4) +
        parseInt(_0x1fcd89(0x1a5)) / 0x5 +
        -parseInt(_0x1fcd89(0x1a3)) / 0x6 +
        (-parseInt(_0x1fcd89(0x1a1)) / 0x7) *
          (parseInt(_0x1fcd89(0x19d)) / 0x8) +
        -parseInt(_0x1fcd89(0x1aa)) / 0x9 +
        parseInt(_0x1fcd89(0x1a6)) / 0xa;
      if (_0x1546ff === _0x4bb289) break;
      else _0x2872ad['push'](_0x2872ad['shift']());
    } catch (_0x214288) {
      _0x2872ad['push'](_0x2872ad['shift']());
    }
  }
})(a267_0x24f2, 0xdf8dc);
Object[a267_0x1500b2(0x1a7)](exports, a267_0x1500b2(0x19b), { value: !![] });
function a267_0x14d9(_0x43767f, _0x135831) {
  const _0x24f2d0 = a267_0x24f2();
  return (
    (a267_0x14d9 = function (_0x14d9ad, _0xc97d65) {
      _0x14d9ad = _0x14d9ad - 0x19b;
      let _0x5cdd60 = _0x24f2d0[_0x14d9ad];
      return _0x5cdd60;
    }),
    a267_0x14d9(_0x43767f, _0x135831)
  );
}
const sequelize_1 = require('sequelize');
function a267_0x24f2() {
  const _0xeb3af2 = [
    'DataTypes',
    '12236859eBMVbe',
    'exports',
    'removeColumn',
    'enabled',
    '2794IRJJbv',
    '__esModule',
    '102xhvvnV',
    '8xQOeyz',
    'disabled',
    'userClosePendingTicket',
    'Users',
    '5955677hrhugJ',
    '923CQCpfY',
    '8613048aesNbl',
    'addColumn',
    '5840280TVriel',
    '14105250YOlTRP',
    'defineProperty',
    '81604tQnstq'
  ];
  a267_0x24f2 = function () {
    return _0xeb3af2;
  };
  return a267_0x24f2();
}
module[a267_0x1500b2(0x1ab)] = {
  up: _0x21d1e7 => {
    const _0x36fd8c = a267_0x1500b2;
    return (
      _0x21d1e7[_0x36fd8c(0x1a4)]('Users', _0x36fd8c(0x19f), {
        type: sequelize_1['DataTypes']['STRING'],
        allowNull: ![],
        defaultValue: _0x36fd8c(0x1ad)
      }),
      _0x21d1e7[_0x36fd8c(0x1a4)](_0x36fd8c(0x1a0), 'showDashboard', {
        type: sequelize_1[_0x36fd8c(0x1a9)]['STRING'],
        allowNull: ![],
        defaultValue: _0x36fd8c(0x19e)
      })
    );
  },
  down: _0x5df95c => {
    const _0x57628c = a267_0x1500b2;
    return (
      _0x5df95c[_0x57628c(0x1ac)](_0x57628c(0x1a0), _0x57628c(0x19f)),
      _0x5df95c[_0x57628c(0x1ac)](_0x57628c(0x1a0), 'showDashboard')
    );
  }
};
