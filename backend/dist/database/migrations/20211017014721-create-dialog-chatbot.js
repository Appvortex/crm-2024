'use strict';
const a112_0x5d4c3c = a112_0x1531;
function a112_0x1531(_0xa5e71c, _0x201b02) {
  const _0x1846e1 = a112_0x1846();
  return (
    (a112_0x1531 = function (_0x15310d, _0x558155) {
      _0x15310d = _0x15310d - 0x162;
      let _0x38384c = _0x1846e1[_0x15310d];
      return _0x38384c;
    }),
    a112_0x1531(_0xa5e71c, _0x201b02)
  );
}
function a112_0x1846() {
  const _0x229426 = [
    'DialogChatBots',
    'exports',
    '120618YvHADJ',
    'sequelize',
    'createTable',
    'DataTypes',
    '__esModule',
    'CASCADE',
    'Chatbots',
    'defineProperty',
    '171zvVbIb',
    '160520eCHQoR',
    '30177SpZvqO',
    'INTEGER',
    'Contacts',
    '22678296anhpUR',
    'SET\x20NULL',
    '11dmNWfA',
    'DATE',
    'dropTable',
    '3864320FhRDTb',
    '2PrqlaC',
    '210eRMtBr',
    '25480pDYroD',
    '2037910nceQHS',
    '4OegsqI'
  ];
  a112_0x1846 = function () {
    return _0x229426;
  };
  return a112_0x1846();
}
(function (_0x3a3db5, _0x477de4) {
  const _0x264f16 = a112_0x1531,
    _0x165481 = _0x3a3db5();
  while (!![]) {
    try {
      const _0x5c2764 =
        (-parseInt(_0x264f16(0x17a)) / 0x1) *
          (parseInt(_0x264f16(0x173)) / 0x2) +
        (parseInt(_0x264f16(0x16a)) / 0x3) *
          (-parseInt(_0x264f16(0x177)) / 0x4) +
        (parseInt(_0x264f16(0x175)) / 0x5) *
          (-parseInt(_0x264f16(0x174)) / 0x6) +
        -parseInt(_0x264f16(0x176)) / 0x7 +
        -parseInt(_0x264f16(0x172)) / 0x8 +
        (-parseInt(_0x264f16(0x168)) / 0x9) *
          (parseInt(_0x264f16(0x169)) / 0xa) +
        (-parseInt(_0x264f16(0x16f)) / 0xb) *
          (-parseInt(_0x264f16(0x16d)) / 0xc);
      if (_0x5c2764 === _0x477de4) break;
      else _0x165481['push'](_0x165481['shift']());
    } catch (_0x2e9278) {
      _0x165481['push'](_0x165481['shift']());
    }
  }
})(a112_0x1846, 0x7a79f);
Object[a112_0x5d4c3c(0x167)](exports, a112_0x5d4c3c(0x164), { value: !![] });
const sequelize_1 = require(a112_0x5d4c3c(0x17b));
module[a112_0x5d4c3c(0x179)] = {
  up: _0x333fcc => {
    const _0x443e91 = a112_0x5d4c3c;
    return _0x333fcc[_0x443e91(0x162)](_0x443e91(0x178), {
      id: {
        type: sequelize_1[_0x443e91(0x163)]['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      awaiting: {
        type: sequelize_1['DataTypes'][_0x443e91(0x16b)],
        defaultValue: 0x0,
        allowNull: ![]
      },
      contactId: {
        type: sequelize_1[_0x443e91(0x163)][_0x443e91(0x16b)],
        references: { model: _0x443e91(0x16c), key: 'id' },
        onUpdate: _0x443e91(0x165),
        onDelete: _0x443e91(0x165)
      },
      chatbotId: {
        type: sequelize_1[_0x443e91(0x163)][_0x443e91(0x16b)],
        references: { model: _0x443e91(0x166), key: 'id' },
        onUpdate: _0x443e91(0x165),
        onDelete: _0x443e91(0x16e)
      },
      createdAt: {
        type: sequelize_1[_0x443e91(0x163)][_0x443e91(0x170)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x443e91(0x163)][_0x443e91(0x170)],
        allowNull: ![]
      }
    });
  },
  down: _0x12ca7e => {
    const _0x42033c = a112_0x5d4c3c;
    return _0x12ca7e[_0x42033c(0x171)](_0x42033c(0x178));
  }
};
