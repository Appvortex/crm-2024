'use strict';
const a95_0x4a5e = a95_0x4694;
(function (_0x3c6d6b, _0x4874c8) {
  const _0x1a1947 = a95_0x4694,
    _0x51fb07 = _0x3c6d6b();
  while (!![]) {
    try {
      const _0x457061 =
        (-parseInt(_0x1a1947(0x193)) / 0x1) *
          (-parseInt(_0x1a1947(0x1a0)) / 0x2) +
        (-parseInt(_0x1a1947(0x198)) / 0x3) *
          (parseInt(_0x1a1947(0x195)) / 0x4) +
        (parseInt(_0x1a1947(0x18b)) / 0x5) *
          (-parseInt(_0x1a1947(0x19d)) / 0x6) +
        -parseInt(_0x1a1947(0x18e)) / 0x7 +
        (-parseInt(_0x1a1947(0x188)) / 0x8) *
          (parseInt(_0x1a1947(0x19f)) / 0x9) +
        parseInt(_0x1a1947(0x19a)) / 0xa +
        (-parseInt(_0x1a1947(0x19c)) / 0xb) *
          (-parseInt(_0x1a1947(0x19b)) / 0xc);
      if (_0x457061 === _0x4874c8) break;
      else _0x51fb07['push'](_0x51fb07['shift']());
    } catch (_0x59c728) {
      _0x51fb07['push'](_0x51fb07['shift']());
    }
  }
})(a95_0x2735, 0x29dbb);
function a95_0x4694(_0xfc1f35, _0x425b93) {
  const _0x2735d4 = a95_0x2735();
  return (
    (a95_0x4694 = function (_0x469409, _0x433c0e) {
      _0x469409 = _0x469409 - 0x187;
      let _0x10fd1b = _0x2735d4[_0x469409];
      return _0x10fd1b;
    }),
    a95_0x4694(_0xfc1f35, _0x425b93)
  );
}
function a95_0x2735() {
  const _0x4fbda5 = [
    '144cnbWMO',
    'dropTable',
    '13599QzkKQe',
    '1862WrShLO',
    'sequelize',
    '344vUiZQC',
    'Contacts',
    'defineProperty',
    '34180dDbBAJ',
    'DataTypes',
    'exports',
    '739655uKtENm',
    'CASCADE',
    'INTEGER',
    'createTable',
    'TicketNotes',
    '147YQdMxs',
    'SET\x20NULL',
    '156EVanWy',
    'STRING',
    'DATE',
    '2049cotEKb',
    '__esModule',
    '1333940DmbCaK',
    '33876yhhmGO',
    '1023JeVwbs'
  ];
  a95_0x2735 = function () {
    return _0x4fbda5;
  };
  return a95_0x2735();
}
Object[a95_0x4a5e(0x18a)](exports, a95_0x4a5e(0x199), { value: !![] });
const sequelize_1 = require(a95_0x4a5e(0x187));
module[a95_0x4a5e(0x18d)] = {
  up: _0x36b200 => {
    const _0x3e1821 = a95_0x4a5e;
    return _0x36b200[_0x3e1821(0x191)](_0x3e1821(0x192), {
      id: {
        type: sequelize_1[_0x3e1821(0x18c)]['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      note: {
        type: sequelize_1[_0x3e1821(0x18c)][_0x3e1821(0x196)],
        allowNull: ![]
      },
      userId: {
        type: sequelize_1[_0x3e1821(0x18c)][_0x3e1821(0x190)],
        references: { model: 'Users', key: 'id' },
        onUpdate: _0x3e1821(0x18f),
        onDelete: 'SET\x20NULL'
      },
      contactId: {
        type: sequelize_1[_0x3e1821(0x18c)][_0x3e1821(0x190)],
        references: { model: _0x3e1821(0x189), key: 'id' },
        onUpdate: _0x3e1821(0x18f),
        onDelete: _0x3e1821(0x18f),
        allowNull: ![]
      },
      ticketId: {
        type: sequelize_1[_0x3e1821(0x18c)][_0x3e1821(0x190)],
        references: { model: 'Tickets', key: 'id' },
        onUpdate: _0x3e1821(0x18f),
        onDelete: _0x3e1821(0x194)
      },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x3e1821(0x197)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x3e1821(0x18c)][_0x3e1821(0x197)],
        allowNull: ![]
      }
    });
  },
  down: _0x144b03 => {
    const _0x3e8ee4 = a95_0x4a5e;
    return _0x144b03[_0x3e8ee4(0x19e)]('Plans');
  }
};
