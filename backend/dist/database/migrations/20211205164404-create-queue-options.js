'use strict';
const a113_0x20734c = a113_0x326e;
(function (_0x25acc3, _0x48a265) {
  const _0x2b9012 = a113_0x326e,
    _0x4e21c4 = _0x25acc3();
  while (!![]) {
    try {
      const _0xee6238 =
        parseInt(_0x2b9012(0x75)) / 0x1 +
        (-parseInt(_0x2b9012(0x77)) / 0x2) * (parseInt(_0x2b9012(0x70)) / 0x3) +
        parseInt(_0x2b9012(0x78)) / 0x4 +
        parseInt(_0x2b9012(0x79)) / 0x5 +
        (-parseInt(_0x2b9012(0x80)) / 0x6) * (parseInt(_0x2b9012(0x71)) / 0x7) +
        (parseInt(_0x2b9012(0x82)) / 0x8) * (-parseInt(_0x2b9012(0x73)) / 0x9) +
        (parseInt(_0x2b9012(0x74)) / 0xa) * (-parseInt(_0x2b9012(0x7d)) / 0xb);
      if (_0xee6238 === _0x48a265) break;
      else _0x4e21c4['push'](_0x4e21c4['shift']());
    } catch (_0x4d6afe) {
      _0x4e21c4['push'](_0x4e21c4['shift']());
    }
  }
})(a113_0x56be, 0x278a7);
function a113_0x326e(_0x10d6c7, _0x1690cb) {
  const _0x56bec2 = a113_0x56be();
  return (
    (a113_0x326e = function (_0x326e07, _0x5c5925) {
      _0x326e07 = _0x326e07 - 0x70;
      let _0x505686 = _0x56bec2[_0x326e07];
      return _0x505686;
    }),
    a113_0x326e(_0x10d6c7, _0x1690cb)
  );
}
function a113_0x56be() {
  const _0x532158 = [
    '22zlSZEC',
    '1238264KNkrfU',
    '1560865BSSXBs',
    'CASCADE',
    'sequelize',
    'DATE',
    '90189ICVfaS',
    'QueueOptions',
    'exports',
    '4194ijyASC',
    'INTEGER',
    '136Mijpzd',
    'STRING',
    'Queues',
    '40419OOTPNx',
    '2870jzRalp',
    'DataTypes',
    '51255ofPxPZ',
    '50wVlxre',
    '112823zmwVTL',
    'TEXT'
  ];
  a113_0x56be = function () {
    return _0x532158;
  };
  return a113_0x56be();
}
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a113_0x20734c(0x7b));
module[a113_0x20734c(0x7f)] = {
  up: _0x18d92b => {
    const _0x2b22e2 = a113_0x20734c;
    return _0x18d92b['createTable']('QueueOptions', {
      id: {
        type: sequelize_1[_0x2b22e2(0x72)][_0x2b22e2(0x81)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      title: {
        type: sequelize_1['DataTypes'][_0x2b22e2(0x83)],
        allowNull: ![]
      },
      message: { type: sequelize_1['DataTypes']['TEXT'], allowNull: !![] },
      option: {
        type: sequelize_1[_0x2b22e2(0x72)][_0x2b22e2(0x76)],
        allowNull: !![]
      },
      queueId: {
        type: sequelize_1[_0x2b22e2(0x72)][_0x2b22e2(0x81)],
        references: { model: _0x2b22e2(0x84), key: 'id' },
        onUpdate: _0x2b22e2(0x7a),
        onDelete: _0x2b22e2(0x7a)
      },
      parentId: {
        type: sequelize_1['DataTypes'][_0x2b22e2(0x81)],
        references: { model: _0x2b22e2(0x7e), key: 'id' },
        onUpdate: _0x2b22e2(0x7a),
        onDelete: _0x2b22e2(0x7a),
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x2b22e2(0x72)][_0x2b22e2(0x7c)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x2b22e2(0x72)][_0x2b22e2(0x7c)],
        allowNull: ![]
      }
    });
  },
  down: _0x3e5670 => {
    const _0x5c7db1 = a113_0x20734c;
    return _0x3e5670['dropTable'](_0x5c7db1(0x7e));
  }
};
