'use strict';
const a54_0x173ea5 = a54_0x395b;
(function (_0x284df1, _0x1afdf9) {
  const _0x4ee4a1 = a54_0x395b,
    _0x3040c8 = _0x284df1();
  while (!![]) {
    try {
      const _0x4e8ee9 =
        (parseInt(_0x4ee4a1(0x1ca)) / 0x1) *
          (-parseInt(_0x4ee4a1(0x1b4)) / 0x2) +
        (-parseInt(_0x4ee4a1(0x1c7)) / 0x3) *
          (-parseInt(_0x4ee4a1(0x1c8)) / 0x4) +
        -parseInt(_0x4ee4a1(0x1c9)) / 0x5 +
        parseInt(_0x4ee4a1(0x1b6)) / 0x6 +
        parseInt(_0x4ee4a1(0x1bc)) / 0x7 +
        (parseInt(_0x4ee4a1(0x1be)) / 0x8) *
          (parseInt(_0x4ee4a1(0x1bd)) / 0x9) +
        -parseInt(_0x4ee4a1(0x1cc)) / 0xa;
      if (_0x4e8ee9 === _0x1afdf9) break;
      else _0x3040c8['push'](_0x3040c8['shift']());
    } catch (_0xab6073) {
      _0x3040c8['push'](_0x3040c8['shift']());
    }
  }
})(a54_0x1b9b, 0x617eb);
function a54_0x395b(_0x2f6730, _0x374228) {
  const _0x1b9bf0 = a54_0x1b9b();
  return (
    (a54_0x395b = function (_0x395b8c, _0x43405d) {
      _0x395b8c = _0x395b8c - 0x1b4;
      let _0x60f9c2 = _0x1b9bf0[_0x395b8c];
      return _0x60f9c2;
    }),
    a54_0x395b(_0x2f6730, _0x374228)
  );
}
Object[a54_0x173ea5(0x1ba)](exports, a54_0x173ea5(0x1b5), { value: !![] });
const sequelize_1 = require(a54_0x173ea5(0x1c6));
function a54_0x1b9b() {
  const _0x3b61c7 = [
    'defineProperty',
    'Tickets',
    '3869621yDWSaw',
    '9YuECrd',
    '1146128mwaqwp',
    'DataTypes',
    'createTable',
    'CASCADE',
    'pending',
    'Contacts',
    'INTEGER',
    'SET\x20NULL',
    'sequelize',
    '45ztiOWU',
    '198156BCwLnF',
    '10740MIKYLS',
    '457mHDpRG',
    'exports',
    '3616640kGHJAJ',
    '3350VNdcEC',
    '__esModule',
    '536832yLAREe',
    'DATE',
    'STRING',
    'Users'
  ];
  a54_0x1b9b = function () {
    return _0x3b61c7;
  };
  return a54_0x1b9b();
}
module[a54_0x173ea5(0x1cb)] = {
  up: _0x6366d3 => {
    const _0x37dd58 = a54_0x173ea5;
    return _0x6366d3[_0x37dd58(0x1c0)](_0x37dd58(0x1bb), {
      id: {
        type: sequelize_1['DataTypes'][_0x37dd58(0x1c4)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      status: {
        type: sequelize_1['DataTypes'][_0x37dd58(0x1b8)],
        defaultValue: _0x37dd58(0x1c2),
        allowNull: ![]
      },
      lastMessage: { type: sequelize_1[_0x37dd58(0x1bf)][_0x37dd58(0x1b8)] },
      contactId: {
        type: sequelize_1[_0x37dd58(0x1bf)][_0x37dd58(0x1c4)],
        references: { model: _0x37dd58(0x1c3), key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: _0x37dd58(0x1c1)
      },
      userId: {
        type: sequelize_1['DataTypes'][_0x37dd58(0x1c4)],
        references: { model: _0x37dd58(0x1b9), key: 'id' },
        onUpdate: _0x37dd58(0x1c1),
        onDelete: _0x37dd58(0x1c5)
      },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x37dd58(0x1b7)](0x6),
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x37dd58(0x1bf)][_0x37dd58(0x1b7)](0x6),
        allowNull: ![]
      }
    });
  },
  down: _0x8354c9 => {
    const _0x20c926 = a54_0x173ea5;
    return _0x8354c9['dropTable'](_0x20c926(0x1bb));
  }
};
