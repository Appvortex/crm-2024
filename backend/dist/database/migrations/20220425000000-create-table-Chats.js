'use strict';
const a141_0x2adb83 = a141_0x3a77;
(function (_0x246181, _0x142050) {
  const _0x14174e = a141_0x3a77,
    _0x368f14 = _0x246181();
  while (!![]) {
    try {
      const _0xf14a1e =
        (-parseInt(_0x14174e(0x7e)) / 0x1) * (parseInt(_0x14174e(0x82)) / 0x2) +
        (parseInt(_0x14174e(0x85)) / 0x3) * (-parseInt(_0x14174e(0x7a)) / 0x4) +
        (parseInt(_0x14174e(0x80)) / 0x5) * (parseInt(_0x14174e(0x78)) / 0x6) +
        (parseInt(_0x14174e(0x7c)) / 0x7) * (parseInt(_0x14174e(0x74)) / 0x8) +
        -parseInt(_0x14174e(0x7f)) / 0x9 +
        (-parseInt(_0x14174e(0x75)) / 0xa) * (parseInt(_0x14174e(0x70)) / 0xb) +
        (-parseInt(_0x14174e(0x77)) / 0xc) * (-parseInt(_0x14174e(0x84)) / 0xd);
      if (_0xf14a1e === _0x142050) break;
      else _0x368f14['push'](_0x368f14['shift']());
    } catch (_0x4d3e38) {
      _0x368f14['push'](_0x368f14['shift']());
    }
  }
})(a141_0x4dfd, 0x3c8f6);
function a141_0x3a77(_0x4cf37e, _0x11f6ee) {
  const _0x4dfdc9 = a141_0x4dfd();
  return (
    (a141_0x3a77 = function (_0x3a779a, _0x308042) {
      _0x3a779a = _0x3a779a - 0x70;
      let _0x366e61 = _0x4dfdc9[_0x3a779a];
      return _0x366e61;
    }),
    a141_0x3a77(_0x4cf37e, _0x11f6ee)
  );
}
Object['defineProperty'](exports, a141_0x2adb83(0x76), { value: !![] });
function a141_0x4dfd() {
  const _0x51b554 = [
    'DATE',
    '36mwZnhL',
    'TEXT',
    '468405GbfuNf',
    'CASCADE',
    '226510nrBAwu',
    '4371957YFuqlS',
    '30wNRPwb',
    'INTEGER',
    '4CjREAL',
    'DataTypes',
    '13xItQfo',
    '152793TxAzHL',
    'createTable',
    'STRING',
    '25861zLUACE',
    'dropTable',
    'Companies',
    'Chats',
    '16nJJOYl',
    '1870eGMFmq',
    '__esModule',
    '20976564aOjCnh',
    '202986GjZiUg'
  ];
  a141_0x4dfd = function () {
    return _0x51b554;
  };
  return a141_0x4dfd();
}
const sequelize_1 = require('sequelize');
module['exports'] = {
  up: _0x1df753 => {
    const _0x178f63 = a141_0x2adb83;
    return _0x1df753[_0x178f63(0x86)](_0x178f63(0x73), {
      id: {
        type: sequelize_1['DataTypes'][_0x178f63(0x81)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      title: {
        type: sequelize_1['DataTypes'][_0x178f63(0x7b)],
        defaultValue: '',
        allowNull: !![]
      },
      uuid: {
        type: sequelize_1[_0x178f63(0x83)][_0x178f63(0x87)],
        defaultValue: '',
        allowNull: !![]
      },
      ownerId: {
        type: sequelize_1[_0x178f63(0x83)][_0x178f63(0x81)],
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: ![]
      },
      lastMessage: {
        type: sequelize_1[_0x178f63(0x83)][_0x178f63(0x7b)],
        allowNull: !![]
      },
      companyId: {
        type: sequelize_1[_0x178f63(0x83)][_0x178f63(0x81)],
        references: { model: _0x178f63(0x72), key: 'id' },
        onUpdate: _0x178f63(0x7d),
        onDelete: _0x178f63(0x7d),
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x178f63(0x83)][_0x178f63(0x79)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1['DataTypes'][_0x178f63(0x79)],
        allowNull: ![]
      }
    });
  },
  down: _0x1864e6 => {
    const _0x402176 = a141_0x2adb83;
    return _0x1864e6[_0x402176(0x71)](_0x402176(0x73));
  }
};
