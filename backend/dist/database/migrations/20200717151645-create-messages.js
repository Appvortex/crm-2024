'use strict';
const a55_0x386e2f = a55_0x40f9;
(function (_0x49b833, _0x11cfda) {
  const _0x51748d = a55_0x40f9,
    _0x3ef594 = _0x49b833();
  while (!![]) {
    try {
      const _0x5dbec9 =
        (parseInt(_0x51748d(0x11c)) / 0x1) *
          (-parseInt(_0x51748d(0x118)) / 0x2) +
        -parseInt(_0x51748d(0x12b)) / 0x3 +
        (parseInt(_0x51748d(0x11a)) / 0x4) *
          (-parseInt(_0x51748d(0x116)) / 0x5) +
        (-parseInt(_0x51748d(0x115)) / 0x6) *
          (parseInt(_0x51748d(0x11b)) / 0x7) +
        parseInt(_0x51748d(0x113)) / 0x8 +
        -parseInt(_0x51748d(0x12a)) / 0x9 +
        parseInt(_0x51748d(0x126)) / 0xa;
      if (_0x5dbec9 === _0x11cfda) break;
      else _0x3ef594['push'](_0x3ef594['shift']());
    } catch (_0x4e7193) {
      _0x3ef594['push'](_0x3ef594['shift']());
    }
  }
})(a55_0x14e2, 0xce42b);
Object[a55_0x386e2f(0x122)](exports, a55_0x386e2f(0x11f), { value: !![] });
const sequelize_1 = require(a55_0x386e2f(0x129));
function a55_0x40f9(_0x585e5e, _0x3916c2) {
  const _0x14e2ab = a55_0x14e2();
  return (
    (a55_0x40f9 = function (_0x40f90a, _0x262eb1) {
      _0x40f90a = _0x40f90a - 0x113;
      let _0x516f8f = _0x14e2ab[_0x40f90a];
      return _0x516f8f;
    }),
    a55_0x40f9(_0x585e5e, _0x3916c2)
  );
}
module['exports'] = {
  up: _0x4a539e => {
    const _0x159c28 = a55_0x386e2f;
    return _0x4a539e[_0x159c28(0x11d)](_0x159c28(0x117), {
      id: {
        type: sequelize_1[_0x159c28(0x11e)][_0x159c28(0x128)],
        primaryKey: !![],
        allowNull: ![]
      },
      body: {
        type: sequelize_1[_0x159c28(0x11e)][_0x159c28(0x12c)],
        allowNull: ![]
      },
      ack: {
        type: sequelize_1[_0x159c28(0x11e)]['INTEGER'],
        allowNull: ![],
        defaultValue: 0x0
      },
      read: {
        type: sequelize_1[_0x159c28(0x11e)][_0x159c28(0x114)],
        allowNull: ![],
        defaultValue: ![]
      },
      mediaType: { type: sequelize_1[_0x159c28(0x11e)][_0x159c28(0x128)] },
      mediaUrl: { type: sequelize_1[_0x159c28(0x11e)][_0x159c28(0x128)] },
      userId: {
        type: sequelize_1[_0x159c28(0x11e)][_0x159c28(0x121)],
        references: { model: _0x159c28(0x125), key: 'id' },
        onUpdate: _0x159c28(0x120),
        onDelete: _0x159c28(0x123)
      },
      ticketId: {
        type: sequelize_1[_0x159c28(0x11e)][_0x159c28(0x121)],
        references: { model: _0x159c28(0x124), key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: _0x159c28(0x120),
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x159c28(0x11e)][_0x159c28(0x119)](0x6),
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x159c28(0x11e)]['DATE'](0x6),
        allowNull: ![]
      }
    });
  },
  down: _0x24d75b => {
    const _0x3ee314 = a55_0x386e2f;
    return _0x24d75b[_0x3ee314(0x127)](_0x3ee314(0x117));
  }
};
function a55_0x14e2() {
  const _0x237dad = [
    '2bHhRrI',
    'DATE',
    '8LXnqnN',
    '1119895AQaCCA',
    '717159ejVLtY',
    'createTable',
    'DataTypes',
    '__esModule',
    'CASCADE',
    'INTEGER',
    'defineProperty',
    'SET\x20NULL',
    'Tickets',
    'Users',
    '55658760EFlqcL',
    'dropTable',
    'STRING',
    'sequelize',
    '12551841DYLwSZ',
    '2624553VtRKmO',
    'TEXT',
    '878048yYuaKl',
    'BOOLEAN',
    '36nqqNrD',
    '2210550wmNHNK',
    'Messages'
  ];
  a55_0x14e2 = function () {
    return _0x237dad;
  };
  return a55_0x14e2();
}
