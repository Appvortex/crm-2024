'use strict';
function a241_0xec3f(_0x2ea6fa, _0x692b43) {
  const _0x2f0e12 = a241_0x2f0e();
  return (
    (a241_0xec3f = function (_0xec3f2f, _0x4b3bf5) {
      _0xec3f2f = _0xec3f2f - 0x134;
      let _0x2b1b23 = _0x2f0e12[_0xec3f2f];
      return _0x2b1b23;
    }),
    a241_0xec3f(_0x2ea6fa, _0x692b43)
  );
}
const a241_0x1eb037 = a241_0xec3f;
function a241_0x2f0e() {
  const _0x138791 = [
    '779140ehRDxM',
    '3wgFhWW',
    'exports',
    'DATE',
    '670XFLwcE',
    'Users',
    'CASCADE',
    'dropTable',
    'defineProperty',
    'STRING',
    '2302412nMtPdS',
    '2oVCxsH',
    'INTEGER',
    '886252qDYTCp',
    '348938xuDqLA',
    'DataTypes',
    '1592016DWbNXu',
    'Tickets',
    'sequelize',
    '1407030Pbgkvb',
    '__esModule',
    'createTable',
    'LogTickets',
    '61605WEzMuU'
  ];
  a241_0x2f0e = function () {
    return _0x138791;
  };
  return a241_0x2f0e();
}
(function (_0x4169f3, _0x4402bc) {
  const _0x59448c = a241_0xec3f,
    _0x261a08 = _0x4169f3();
  while (!![]) {
    try {
      const _0x5ac8fe =
        (-parseInt(_0x59448c(0x138)) / 0x1) *
          (-parseInt(_0x59448c(0x13b)) / 0x2) +
        (parseInt(_0x59448c(0x146)) / 0x3) *
          (-parseInt(_0x59448c(0x13a)) / 0x4) +
        parseInt(_0x59448c(0x145)) / 0x5 +
        parseInt(_0x59448c(0x140)) / 0x6 +
        parseInt(_0x59448c(0x137)) / 0x7 +
        -parseInt(_0x59448c(0x13d)) / 0x8 +
        (-parseInt(_0x59448c(0x144)) / 0x9) *
          (parseInt(_0x59448c(0x149)) / 0xa);
      if (_0x5ac8fe === _0x4402bc) break;
      else _0x261a08['push'](_0x261a08['shift']());
    } catch (_0x80b41e) {
      _0x261a08['push'](_0x261a08['shift']());
    }
  }
})(a241_0x2f0e, 0x2e24f);
Object[a241_0x1eb037(0x135)](exports, a241_0x1eb037(0x141), { value: !![] });
const sequelize_1 = require(a241_0x1eb037(0x13f));
module[a241_0x1eb037(0x147)] = {
  up: _0x2d76f2 => {
    const _0x403ec6 = a241_0x1eb037;
    return _0x2d76f2[_0x403ec6(0x142)](_0x403ec6(0x143), {
      id: {
        type: sequelize_1[_0x403ec6(0x13c)][_0x403ec6(0x139)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      userId: {
        type: sequelize_1[_0x403ec6(0x13c)]['INTEGER'],
        references: { model: _0x403ec6(0x14a), key: 'id' },
        onUpdate: _0x403ec6(0x14b),
        onDelete: 'CASCADE',
        allowNull: !![],
        defaultValue: null
      },
      ticketId: {
        type: sequelize_1[_0x403ec6(0x13c)][_0x403ec6(0x139)],
        references: { model: _0x403ec6(0x13e), key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: _0x403ec6(0x14b),
        allowNull: ![]
      },
      queueId: {
        type: sequelize_1['DataTypes'][_0x403ec6(0x139)],
        references: { model: 'Queues', key: 'id' },
        onUpdate: _0x403ec6(0x14b),
        onDelete: _0x403ec6(0x14b),
        defaultValue: null,
        allowNull: !![]
      },
      type: {
        type: sequelize_1[_0x403ec6(0x13c)][_0x403ec6(0x136)],
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x403ec6(0x13c)][_0x403ec6(0x148)],
        allowNull: ![]
      },
      updatedAt: { type: sequelize_1[_0x403ec6(0x13c)]['DATE'], allowNull: ![] }
    });
  },
  down: _0xf71518 => {
    const _0x539ce0 = a241_0x1eb037;
    return _0xf71518[_0x539ce0(0x134)](_0x539ce0(0x143));
  }
};
