'use strict';
function a115_0x3739() {
  const _0x288010 = [
    'INTEGER',
    'defineProperty',
    'Companies',
    '1363416vdrzEg',
    '7yIOXJe',
    '4633144TiXeRD',
    'Users',
    '22fHLtLS',
    '82690NUzmAL',
    'Schedules',
    '4288188oKabBN',
    'SET\x20NULL',
    'CASCADE',
    '372029eHewrY',
    'Contacts',
    'DATE',
    '1749591bHsAyN',
    '10CztpIR',
    '__esModule',
    '950376QjkQJs',
    '2bkHFHE',
    'DataTypes',
    '116psfavI',
    'TEXT'
  ];
  a115_0x3739 = function () {
    return _0x288010;
  };
  return a115_0x3739();
}
function a115_0x28b2(_0x3cd716, _0x356671) {
  const _0x373925 = a115_0x3739();
  return (
    (a115_0x28b2 = function (_0x28b278, _0x2bea26) {
      _0x28b278 = _0x28b278 - 0x8d;
      let _0x501635 = _0x373925[_0x28b278];
      return _0x501635;
    }),
    a115_0x28b2(_0x3cd716, _0x356671)
  );
}
const a115_0x48519c = a115_0x28b2;
(function (_0x20e22f, _0x12a152) {
  const _0x5475b3 = a115_0x28b2,
    _0x3001eb = _0x20e22f();
  while (!![]) {
    try {
      const _0x56c01e =
        (parseInt(_0x5475b3(0x96)) / 0x1) * (parseInt(_0x5475b3(0x9d)) / 0x2) +
        parseInt(_0x5475b3(0x9c)) / 0x3 +
        (-parseInt(_0x5475b3(0x9f)) / 0x4) * (parseInt(_0x5475b3(0x91)) / 0x5) +
        parseInt(_0x5475b3(0xa4)) / 0x6 +
        (-parseInt(_0x5475b3(0x8d)) / 0x7) *
          (-parseInt(_0x5475b3(0x8e)) / 0x8) +
        (-parseInt(_0x5475b3(0x99)) / 0x9) *
          (-parseInt(_0x5475b3(0x9a)) / 0xa) +
        (-parseInt(_0x5475b3(0x90)) / 0xb) * (parseInt(_0x5475b3(0x93)) / 0xc);
      if (_0x56c01e === _0x12a152) break;
      else _0x3001eb['push'](_0x3001eb['shift']());
    } catch (_0x3072a1) {
      _0x3001eb['push'](_0x3001eb['shift']());
    }
  }
})(a115_0x3739, 0x78ec3);
Object[a115_0x48519c(0xa2)](exports, a115_0x48519c(0x9b), { value: !![] });
const sequelize_1 = require('sequelize');
module['exports'] = {
  up: _0x3aab4b => {
    const _0x50242f = a115_0x48519c;
    return _0x3aab4b['createTable'](_0x50242f(0x92), {
      id: {
        type: sequelize_1[_0x50242f(0x9e)]['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      body: { type: sequelize_1['DataTypes'][_0x50242f(0xa0)], allowNull: ![] },
      sendAt: {
        type: sequelize_1['DataTypes'][_0x50242f(0x98)],
        allowNull: !![]
      },
      sentAt: { type: sequelize_1[_0x50242f(0x9e)]['DATE'], allowNull: !![] },
      contactId: {
        type: sequelize_1[_0x50242f(0x9e)][_0x50242f(0xa1)],
        references: { model: _0x50242f(0x97), key: 'id' },
        onUpdate: _0x50242f(0x95),
        onDelete: _0x50242f(0x95),
        allowNull: !![]
      },
      ticketId: {
        type: sequelize_1[_0x50242f(0x9e)]['INTEGER'],
        references: { model: 'Tickets', key: 'id' },
        onUpdate: _0x50242f(0x94),
        onDelete: _0x50242f(0x94),
        allowNull: !![]
      },
      userId: {
        type: sequelize_1[_0x50242f(0x9e)][_0x50242f(0xa1)],
        references: { model: _0x50242f(0x8f), key: 'id' },
        onUpdate: 'SET\x20NULL',
        onDelete: _0x50242f(0x94),
        allowNull: !![]
      },
      companyId: {
        type: sequelize_1[_0x50242f(0x9e)][_0x50242f(0xa1)],
        references: { model: _0x50242f(0xa3), key: 'id' },
        onUpdate: _0x50242f(0x95),
        onDelete: _0x50242f(0x95),
        allowNull: !![]
      },
      createdAt: { type: sequelize_1['DataTypes']['DATE'], allowNull: ![] },
      updatedAt: {
        type: sequelize_1[_0x50242f(0x9e)][_0x50242f(0x98)],
        allowNull: ![]
      }
    });
  },
  down: _0x3e5589 => {
    const _0x166c4c = a115_0x48519c;
    return _0x3e5589['dropTable'](_0x166c4c(0x92));
  }
};
