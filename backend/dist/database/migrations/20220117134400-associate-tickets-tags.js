'use strict';
function a120_0x3a53() {
  const _0x348a5f = [
    '27dywpVx',
    'INTEGER',
    '770TjlSJN',
    '1642360kIRgll',
    '640595HsRMGm',
    'defineProperty',
    '15646pcRXlw',
    '1746621BMhSwM',
    '101PlCeDI',
    '1856670JwNhyc',
    'sequelize',
    'exports',
    'DATE',
    '15477kwHwQE',
    'dropTable',
    'Tickets',
    '6VDMEZq',
    '__esModule',
    'createTable',
    '21732bAlHrk',
    'DataTypes',
    'CASCADE',
    '40616pzBXZW'
  ];
  a120_0x3a53 = function () {
    return _0x348a5f;
  };
  return a120_0x3a53();
}
const a120_0x1b6c1d = a120_0x31eb;
function a120_0x31eb(_0x2fb2d6, _0x52c773) {
  const _0x3a5365 = a120_0x3a53();
  return (
    (a120_0x31eb = function (_0x31eb28, _0x41e535) {
      _0x31eb28 = _0x31eb28 - 0x91;
      let _0x5111d8 = _0x3a5365[_0x31eb28];
      return _0x5111d8;
    }),
    a120_0x31eb(_0x2fb2d6, _0x52c773)
  );
}
(function (_0x1e0237, _0x3148e3) {
  const _0x64f99b = a120_0x31eb,
    _0x2a344d = _0x1e0237();
  while (!![]) {
    try {
      const _0x5c0b50 =
        (-parseInt(_0x64f99b(0x94)) / 0x1) *
          (-parseInt(_0x64f99b(0x92)) / 0x2) +
        parseInt(_0x64f99b(0x93)) / 0x3 +
        parseInt(_0x64f99b(0xa6)) / 0x4 +
        (parseInt(_0x64f99b(0xa7)) / 0x5) * (parseInt(_0x64f99b(0x9c)) / 0x6) +
        (parseInt(_0x64f99b(0xa5)) / 0x7) * (parseInt(_0x64f99b(0xa2)) / 0x8) +
        (-parseInt(_0x64f99b(0xa3)) / 0x9) *
          (-parseInt(_0x64f99b(0x95)) / 0xa) +
        (-parseInt(_0x64f99b(0x99)) / 0xb) * (parseInt(_0x64f99b(0x9f)) / 0xc);
      if (_0x5c0b50 === _0x3148e3) break;
      else _0x2a344d['push'](_0x2a344d['shift']());
    } catch (_0x59c371) {
      _0x2a344d['push'](_0x2a344d['shift']());
    }
  }
})(a120_0x3a53, 0x74ce1);
Object[a120_0x1b6c1d(0x91)](exports, a120_0x1b6c1d(0x9d), { value: !![] });
const sequelize_1 = require(a120_0x1b6c1d(0x96));
module[a120_0x1b6c1d(0x97)] = {
  up: _0x1512da => {
    const _0x1090d4 = a120_0x1b6c1d;
    return _0x1512da[_0x1090d4(0x9e)]('TicketTags', {
      ticketId: {
        type: sequelize_1[_0x1090d4(0xa0)]['INTEGER'],
        references: { model: _0x1090d4(0x9b), key: 'id' },
        onUpdate: _0x1090d4(0xa1),
        onDelete: _0x1090d4(0xa1),
        allowNull: ![]
      },
      tagId: {
        type: sequelize_1[_0x1090d4(0xa0)][_0x1090d4(0xa4)],
        references: { model: 'Tags', key: 'id' },
        onUpdate: _0x1090d4(0xa1),
        onDelete: _0x1090d4(0xa1),
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x1090d4(0x98)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1['DataTypes'][_0x1090d4(0x98)],
        allowNull: ![]
      }
    });
  },
  down: _0x2f4e1d => {
    const _0x5daa0f = a120_0x1b6c1d;
    return _0x2f4e1d[_0x5daa0f(0x9a)]('TicketTags');
  }
};
