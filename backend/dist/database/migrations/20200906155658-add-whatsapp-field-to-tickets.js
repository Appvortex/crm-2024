'use strict';
function a66_0x4116() {
  const _0x1c1efd = [
    '1058788IRmuDj',
    'Tickets',
    '__esModule',
    'INTEGER',
    '135016bHuElh',
    'removeColumn',
    '135SzkODc',
    'sequelize',
    '1025582qLQwXD',
    '10asrIIa',
    '2983230Pomfzy',
    'addColumn',
    'whatsappId',
    '2652072zGNXVI',
    '532704dHkUOT',
    '5828ZQjDhb',
    '1488aaqSab'
  ];
  a66_0x4116 = function () {
    return _0x1c1efd;
  };
  return a66_0x4116();
}
const a66_0x178576 = a66_0x5647;
(function (_0x4c6289, _0x3568cc) {
  const _0x13bb85 = a66_0x5647,
    _0x45fba0 = _0x4c6289();
  while (!![]) {
    try {
      const _0x356ec5 =
        parseInt(_0x13bb85(0x136)) / 0x1 +
        parseInt(_0x13bb85(0x13f)) / 0x2 +
        (-parseInt(_0x13bb85(0x13e)) / 0x3) *
          (-parseInt(_0x13bb85(0x13d)) / 0x4) +
        (-parseInt(_0x13bb85(0x137)) / 0x5) *
          (parseInt(_0x13bb85(0x13b)) / 0x6) +
        parseInt(_0x13bb85(0x132)) / 0x7 +
        (-parseInt(_0x13bb85(0x13c)) / 0x8) *
          (parseInt(_0x13bb85(0x134)) / 0x9) +
        parseInt(_0x13bb85(0x138)) / 0xa;
      if (_0x356ec5 === _0x3568cc) break;
      else _0x45fba0['push'](_0x45fba0['shift']());
    } catch (_0xd0b064) {
      _0x45fba0['push'](_0x45fba0['shift']());
    }
  }
})(a66_0x4116, 0xadedf);
Object['defineProperty'](exports, a66_0x178576(0x141), { value: !![] });
function a66_0x5647(_0x28a3b8, _0x5d0858) {
  const _0x41169c = a66_0x4116();
  return (
    (a66_0x5647 = function (_0x5647e7, _0x408d8b) {
      _0x5647e7 = _0x5647e7 - 0x131;
      let _0x82634e = _0x41169c[_0x5647e7];
      return _0x82634e;
    }),
    a66_0x5647(_0x28a3b8, _0x5d0858)
  );
}
const sequelize_1 = require(a66_0x178576(0x135));
module['exports'] = {
  up: _0x3d5f7c => {
    const _0x268b57 = a66_0x178576;
    return _0x3d5f7c[_0x268b57(0x139)](_0x268b57(0x140), 'whatsappId', {
      type: sequelize_1['DataTypes'][_0x268b57(0x131)],
      references: { model: 'Whatsapps', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET\x20NULL'
    });
  },
  down: _0x1fc1f6 => {
    const _0x215f61 = a66_0x178576;
    return _0x1fc1f6[_0x215f61(0x133)]('Tickets', _0x215f61(0x13a));
  }
};
