'use strict';
const a102_0x34c2ed = a102_0x4fd5;
(function (_0x437e12, _0x88a727) {
  const _0x3fa41b = a102_0x4fd5,
    _0x3b8c00 = _0x437e12();
  while (!![]) {
    try {
      const _0x45d338 =
        parseInt(_0x3fa41b(0x164)) / 0x1 +
        (-parseInt(_0x3fa41b(0x169)) / 0x2) *
          (parseInt(_0x3fa41b(0x163)) / 0x3) +
        parseInt(_0x3fa41b(0x15f)) / 0x4 +
        (-parseInt(_0x3fa41b(0x16a)) / 0x5) *
          (-parseInt(_0x3fa41b(0x15e)) / 0x6) +
        parseInt(_0x3fa41b(0x15b)) / 0x7 +
        parseInt(_0x3fa41b(0x15a)) / 0x8 +
        (parseInt(_0x3fa41b(0x16c)) / 0x9) *
          (-parseInt(_0x3fa41b(0x158)) / 0xa);
      if (_0x45d338 === _0x88a727) break;
      else _0x3b8c00['push'](_0x3b8c00['shift']());
    } catch (_0x3ba6a1) {
      _0x3b8c00['push'](_0x3b8c00['shift']());
    }
  }
})(a102_0xec0b, 0x297fa);
function a102_0xec0b() {
  const _0x52a442 = [
    '1679265YJPXDZ',
    'dropTable',
    '20FtFCdc',
    'exports',
    '1524944BNQMTj',
    '1428700wplypN',
    'DataTypes',
    'DATE',
    '54474IvWkLC',
    '407792nFrxfX',
    'createTable',
    'Users',
    'Tickets',
    '3zyVXAm',
    '279262ksbMOi',
    'INTEGER',
    'TicketTraking',
    'SET\x20NULL',
    'defineProperty',
    '520034cQjxcW',
    '15SiAtVL',
    '__esModule'
  ];
  a102_0xec0b = function () {
    return _0x52a442;
  };
  return a102_0xec0b();
}
function a102_0x4fd5(_0x57a690, _0x3de215) {
  const _0xec0be5 = a102_0xec0b();
  return (
    (a102_0x4fd5 = function (_0x4fd54e, _0x1225e1) {
      _0x4fd54e = _0x4fd54e - 0x157;
      let _0x55e674 = _0xec0be5[_0x4fd54e];
      return _0x55e674;
    }),
    a102_0x4fd5(_0x57a690, _0x3de215)
  );
}
Object[a102_0x34c2ed(0x168)](exports, a102_0x34c2ed(0x16b), { value: !![] });
const sequelize_1 = require('sequelize');
module[a102_0x34c2ed(0x159)] = {
  up: _0x2d320a => {
    const _0x316fde = a102_0x34c2ed;
    return _0x2d320a[_0x316fde(0x160)](_0x316fde(0x166), {
      id: {
        type: sequelize_1['DataTypes']['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      ticketId: {
        type: sequelize_1[_0x316fde(0x15c)][_0x316fde(0x165)],
        references: { model: _0x316fde(0x162), key: 'id' },
        onDelete: _0x316fde(0x167)
      },
      companyId: {
        type: sequelize_1[_0x316fde(0x15c)][_0x316fde(0x165)],
        references: { model: 'Companies', key: 'id' },
        onDelete: _0x316fde(0x167)
      },
      whatsappId: {
        type: sequelize_1[_0x316fde(0x15c)][_0x316fde(0x165)],
        references: { model: 'Whatsapps', key: 'id' },
        onDelete: _0x316fde(0x167),
        allowNull: !![]
      },
      userId: {
        type: sequelize_1[_0x316fde(0x15c)][_0x316fde(0x165)],
        references: { model: _0x316fde(0x161), key: 'id' },
        onDelete: _0x316fde(0x167),
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x316fde(0x15c)][_0x316fde(0x15d)],
        allowNull: !![]
      },
      updatedAt: {
        type: sequelize_1[_0x316fde(0x15c)][_0x316fde(0x15d)],
        allowNull: !![]
      },
      queuedAt: {
        type: sequelize_1['DataTypes'][_0x316fde(0x15d)],
        allowNull: !![]
      },
      startedAt: {
        type: sequelize_1[_0x316fde(0x15c)][_0x316fde(0x15d)],
        allowNull: !![]
      },
      finishedAt: {
        type: sequelize_1[_0x316fde(0x15c)]['DATE'],
        allowNull: !![]
      }
    });
  },
  down: _0x1cd2fd => {
    const _0x428b2a = a102_0x34c2ed;
    return _0x1cd2fd[_0x428b2a(0x157)](_0x428b2a(0x166));
  }
};
