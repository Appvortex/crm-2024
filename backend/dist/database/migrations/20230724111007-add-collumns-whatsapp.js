'use strict';
const a211_0x12feff = a211_0x57b4;
function a211_0x2c84() {
  const _0x280d0c = [
    '2030OImErI',
    'exports',
    'expiresInactiveMessage',
    'whenExpiresTicket',
    'all',
    'removeColumn',
    'STRING',
    '8389143WDqEIi',
    '10616SkLWEv',
    'Whatsapps',
    '__esModule',
    '331714nYbbsL',
    '5311668yFNpnP',
    '18qVbfeD',
    'maxUseBotQueuesNPS',
    'INTEGER',
    '9410632PSyfkr',
    'inactiveMessage',
    'addColumn',
    '1086593UOpESz',
    'timeInactiveMessage',
    'DataTypes',
    'expiresTicketNPS',
    '4865454kTqXdc'
  ];
  a211_0x2c84 = function () {
    return _0x280d0c;
  };
  return a211_0x2c84();
}
(function (_0x46d703, _0xed281c) {
  const _0x37d851 = a211_0x57b4,
    _0x2ab54b = _0x46d703();
  while (!![]) {
    try {
      const _0x2ef82c =
        parseInt(_0x37d851(0x9d)) / 0x1 +
        (parseInt(_0x37d851(0x95)) / 0x2) * (parseInt(_0x37d851(0x97)) / 0x3) +
        (parseInt(_0x37d851(0x92)) / 0x4) * (-parseInt(_0x37d851(0xa2)) / 0x5) +
        -parseInt(_0x37d851(0x96)) / 0x6 +
        -parseInt(_0x37d851(0x91)) / 0x7 +
        parseInt(_0x37d851(0x9a)) / 0x8 +
        parseInt(_0x37d851(0xa1)) / 0x9;
      if (_0x2ef82c === _0xed281c) break;
      else _0x2ab54b['push'](_0x2ab54b['shift']());
    } catch (_0x3320ca) {
      _0x2ab54b['push'](_0x2ab54b['shift']());
    }
  }
})(a211_0x2c84, 0x9b9eb);
Object['defineProperty'](exports, a211_0x12feff(0x94), { value: !![] });
function a211_0x57b4(_0x320a99, _0x2a6756) {
  const _0x2c842f = a211_0x2c84();
  return (
    (a211_0x57b4 = function (_0x57b448, _0x127641) {
      _0x57b448 = _0x57b448 - 0x8c;
      let _0x53f0f3 = _0x2c842f[_0x57b448];
      return _0x53f0f3;
    }),
    a211_0x57b4(_0x320a99, _0x2a6756)
  );
}
const sequelize_1 = require('sequelize');
module[a211_0x12feff(0xa3)] = {
  up: _0xba03ae => {
    const _0x40ccb5 = a211_0x12feff;
    return Promise[_0x40ccb5(0x8e)]([
      _0xba03ae[_0x40ccb5(0x9c)]('Whatsapps', _0x40ccb5(0x8c), {
        type: sequelize_1[_0x40ccb5(0x9f)][_0x40ccb5(0x90)],
        defaultValue: ''
      }),
      _0xba03ae[_0x40ccb5(0x9c)](_0x40ccb5(0x93), _0x40ccb5(0x9b), {
        type: sequelize_1[_0x40ccb5(0x9f)][_0x40ccb5(0x90)],
        defaultValue: ''
      }),
      _0xba03ae[_0x40ccb5(0x9c)]('Whatsapps', _0x40ccb5(0x9e), {
        type: sequelize_1[_0x40ccb5(0x9f)][_0x40ccb5(0x90)],
        defaultValue: ''
      }),
      _0xba03ae[_0x40ccb5(0x9c)]('Whatsapps', _0x40ccb5(0x98), {
        type: sequelize_1[_0x40ccb5(0x9f)][_0x40ccb5(0x99)],
        defaultValue: 0x0
      }),
      _0xba03ae[_0x40ccb5(0x9c)]('Whatsapps', 'whenExpiresTicket', {
        type: sequelize_1['DataTypes']['STRING'],
        defaultValue: ''
      }),
      _0xba03ae['addColumn'](_0x40ccb5(0x93), _0x40ccb5(0xa0), {
        type: sequelize_1[_0x40ccb5(0x9f)]['STRING'],
        defaultValue: ''
      })
    ]);
  },
  down: _0x115c2a => {
    const _0x13bc41 = a211_0x12feff;
    return Promise[_0x13bc41(0x8e)]([
      _0x115c2a[_0x13bc41(0x8f)](_0x13bc41(0x93), 'expiresInactiveMessage'),
      _0x115c2a[_0x13bc41(0x8f)](_0x13bc41(0x93), _0x13bc41(0x9b)),
      _0x115c2a[_0x13bc41(0x8f)](_0x13bc41(0x93), _0x13bc41(0x9e)),
      _0x115c2a[_0x13bc41(0x8f)](_0x13bc41(0x93), _0x13bc41(0x98)),
      _0x115c2a[_0x13bc41(0x8f)]('Whatsapps', _0x13bc41(0x8d)),
      _0x115c2a[_0x13bc41(0x8f)](_0x13bc41(0x93), _0x13bc41(0xa0))
    ]);
  }
};
