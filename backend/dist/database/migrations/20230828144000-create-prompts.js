'use strict';
const a233_0x310dc0 = a233_0x3cf9;
(function (_0x2f34dd, _0x208b92) {
  const _0x39b9b4 = a233_0x3cf9,
    _0x308d79 = _0x2f34dd();
  while (!![]) {
    try {
      const _0x293b8f =
        -parseInt(_0x39b9b4(0x1ec)) / 0x1 +
        (parseInt(_0x39b9b4(0x1f0)) / 0x2) *
          (parseInt(_0x39b9b4(0x1eb)) / 0x3) +
        -parseInt(_0x39b9b4(0x1e7)) / 0x4 +
        (-parseInt(_0x39b9b4(0x1f4)) / 0x5) *
          (parseInt(_0x39b9b4(0x1ee)) / 0x6) +
        (-parseInt(_0x39b9b4(0x1f3)) / 0x7) *
          (-parseInt(_0x39b9b4(0x1e8)) / 0x8) +
        (-parseInt(_0x39b9b4(0x1f1)) / 0x9) *
          (parseInt(_0x39b9b4(0x1e6)) / 0xa) +
        parseInt(_0x39b9b4(0x1df)) / 0xb;
      if (_0x293b8f === _0x208b92) break;
      else _0x308d79['push'](_0x308d79['shift']());
    } catch (_0x1dc62b) {
      _0x308d79['push'](_0x308d79['shift']());
    }
  }
})(a233_0x504c, 0x31039);
function a233_0x3cf9(_0x25faa1, _0x4c8325) {
  const _0x504c06 = a233_0x504c();
  return (
    (a233_0x3cf9 = function (_0x3cf959, _0x315911) {
      _0x3cf959 = _0x3cf959 - 0x1df;
      let _0x17485f = _0x504c06[_0x3cf959];
      return _0x17485f;
    }),
    a233_0x3cf9(_0x25faa1, _0x4c8325)
  );
}
function a233_0x504c() {
  const _0x5899b9 = [
    'defineProperty',
    'INTEGER',
    'showAllTables',
    '__esModule',
    '285490YXVsWU',
    '794668YGYdvp',
    '223464nPFwPd',
    'dropTable',
    'DATE',
    '148761VhtSJl',
    '333902cLnBDL',
    'Companies',
    '6aKkGmF',
    'Prompts',
    '6WlzEsy',
    '9jawUoP',
    'NO\x20ACTION',
    '49TTMsWK',
    '817555XZLzCq',
    'TEXT',
    'sequelize',
    '6392078gKsSRI',
    'createTable',
    'DataTypes'
  ];
  a233_0x504c = function () {
    return _0x5899b9;
  };
  return a233_0x504c();
}
Object[a233_0x310dc0(0x1e2)](exports, a233_0x310dc0(0x1e5), { value: !![] });
const sequelize_1 = require(a233_0x310dc0(0x1f6));
module['exports'] = {
  up: async _0x36df40 => {
    const _0x2a1f81 = a233_0x310dc0,
      _0x217bbb = _0x2a1f81(0x1ef),
      _0x57a593 = await _0x36df40[_0x2a1f81(0x1e4)]();
    if (!_0x57a593['includes'](_0x217bbb))
      return _0x36df40[_0x2a1f81(0x1e0)](_0x217bbb, {
        id: {
          type: sequelize_1['DataTypes'][_0x2a1f81(0x1e3)],
          autoIncrement: !![],
          primaryKey: !![],
          allowNull: ![]
        },
        name: {
          type: sequelize_1['DataTypes'][_0x2a1f81(0x1f5)],
          allowNull: ![]
        },
        apiKey: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1f5)],
          allowNull: ![]
        },
        prompt: { type: sequelize_1[_0x2a1f81(0x1e1)]['TEXT'], allowNull: ![] },
        maxTokens: {
          type: sequelize_1[_0x2a1f81(0x1e1)]['INTEGER'],
          allowNull: ![],
          defaultValue: 0x64
        },
        maxMessages: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1e3)],
          allowNull: ![],
          defaultValue: 0xa
        },
        temperature: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1e3)],
          allowNull: ![],
          defaultValue: 0x1
        },
        promptTokens: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1e3)],
          allowNull: ![],
          defaultValue: 0x0
        },
        completionTokens: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1e3)],
          allowNull: ![],
          defaultValue: 0x0
        },
        totalTokens: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1e3)],
          allowNull: ![],
          defaultValue: 0x0
        },
        voice: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1f5)],
          allowNull: !![]
        },
        voiceKey: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1f5)],
          allowNull: !![]
        },
        voiceRegion: {
          type: sequelize_1['DataTypes']['TEXT'],
          allowNull: !![]
        },
        queueId: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1e3)],
          references: { model: 'Queues', key: 'id' },
          onUpdate: _0x2a1f81(0x1f2),
          onDelete: _0x2a1f81(0x1f2),
          allowNull: ![]
        },
        companyId: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1e3)],
          references: { model: _0x2a1f81(0x1ed), key: 'id' },
          onUpdate: 'NO\x20ACTION',
          onDelete: _0x2a1f81(0x1f2),
          allowNull: ![]
        },
        createdAt: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1ea)](0x6),
          allowNull: ![]
        },
        updatedAt: {
          type: sequelize_1[_0x2a1f81(0x1e1)][_0x2a1f81(0x1ea)](0x6),
          allowNull: ![]
        }
      });
  },
  down: _0xcc3c01 => {
    const _0x48bb6c = a233_0x310dc0;
    return _0xcc3c01[_0x48bb6c(0x1e9)](_0x48bb6c(0x1ef));
  }
};
