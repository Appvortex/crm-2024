'use strict';
function a53_0x1840() {
  const _0x461563 = [
    '9497280sbPQpl',
    'dropTable',
    'Contacts',
    '1229060CAdqpn',
    'STRING',
    'INTEGER',
    'defineProperty',
    '21640289wzTfsi',
    '12AMHrsY',
    '1835610TMcuyx',
    '6OgTbeT',
    'sequelize',
    '2krOzMK',
    '8ZiUspM',
    'DataTypes',
    'DATE',
    '1356129oUaafT',
    '3128555PSLFUa',
    '4511612zNAPnp'
  ];
  a53_0x1840 = function () {
    return _0x461563;
  };
  return a53_0x1840();
}
const a53_0x26b499 = a53_0x492d;
function a53_0x492d(_0x1a000b, _0x21fb81) {
  const _0x184081 = a53_0x1840();
  return (
    (a53_0x492d = function (_0x492d3e, _0x11f30a) {
      _0x492d3e = _0x492d3e - 0x180;
      let _0x5e996b = _0x184081[_0x492d3e];
      return _0x5e996b;
    }),
    a53_0x492d(_0x1a000b, _0x21fb81)
  );
}
(function (_0x255580, _0xca477a) {
  const _0x50739b = a53_0x492d,
    _0x20037e = _0x255580();
  while (!![]) {
    try {
      const _0xd3e6d7 =
        (parseInt(_0x50739b(0x186)) / 0x1) *
          (parseInt(_0x50739b(0x189)) / 0x2) +
        (parseInt(_0x50739b(0x187)) / 0x3) *
          (parseInt(_0x50739b(0x180)) / 0x4) +
        (parseInt(_0x50739b(0x18e)) / 0x5) *
          (-parseInt(_0x50739b(0x185)) / 0x6) +
        parseInt(_0x50739b(0x18f)) / 0x7 +
        (-parseInt(_0x50739b(0x18a)) / 0x8) *
          (-parseInt(_0x50739b(0x18d)) / 0x9) +
        parseInt(_0x50739b(0x190)) / 0xa +
        -parseInt(_0x50739b(0x184)) / 0xb;
      if (_0xd3e6d7 === _0xca477a) break;
      else _0x20037e['push'](_0x20037e['shift']());
    } catch (_0x3a29e0) {
      _0x20037e['push'](_0x20037e['shift']());
    }
  }
})(a53_0x1840, 0xee5d8);
Object[a53_0x26b499(0x183)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a53_0x26b499(0x188));
module['exports'] = {
  up: _0x12d27c => {
    const _0xb0c643 = a53_0x26b499;
    return _0x12d27c['createTable']('Contacts', {
      id: {
        type: sequelize_1['DataTypes'][_0xb0c643(0x182)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: {
        type: sequelize_1['DataTypes'][_0xb0c643(0x181)],
        allowNull: ![]
      },
      number: {
        type: sequelize_1[_0xb0c643(0x18b)][_0xb0c643(0x181)],
        allowNull: ![]
      },
      profilePicUrl: { type: sequelize_1[_0xb0c643(0x18b)][_0xb0c643(0x181)] },
      createdAt: {
        type: sequelize_1[_0xb0c643(0x18b)]['DATE'],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0xb0c643(0x18b)][_0xb0c643(0x18c)],
        allowNull: ![]
      }
    });
  },
  down: _0x3e4e4d => {
    const _0x108ccc = a53_0x26b499;
    return _0x3e4e4d[_0x108ccc(0x191)](_0x108ccc(0x192));
  }
};
