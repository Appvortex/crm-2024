'use strict';
function a130_0x4546() {
  const _0x497f03 = [
    '2485659slOzxf',
    'Whatsapps',
    'defineProperty',
    'Companies',
    'DATE',
    'ContactLists',
    'CASCADE',
    '151155TZgnLf',
    'Campaigns',
    'STRING',
    '128408eSOBVz',
    'INTEGER',
    '1140794oYSbjL',
    'exports',
    '18TNAsBH',
    'sequelize',
    'SET\x20NULL',
    'TEXT',
    '__esModule',
    '28duZEyN',
    'BOOLEAN',
    '1013112pXGDuL',
    'DataTypes',
    '1407728WIOJcs',
    'dropTable',
    '183942vsyNdz'
  ];
  a130_0x4546 = function () {
    return _0x497f03;
  };
  return a130_0x4546();
}
const a130_0x209146 = a130_0x7bf0;
function a130_0x7bf0(_0x352c9c, _0x2b7aa3) {
  const _0x454603 = a130_0x4546();
  return (
    (a130_0x7bf0 = function (_0x7bf04d, _0x2ced1a) {
      _0x7bf04d = _0x7bf04d - 0x7b;
      let _0x27843d = _0x454603[_0x7bf04d];
      return _0x27843d;
    }),
    a130_0x7bf0(_0x352c9c, _0x2b7aa3)
  );
}
(function (_0x12e67d, _0x519522) {
  const _0x152088 = a130_0x7bf0,
    _0x4493bf = _0x12e67d();
  while (!![]) {
    try {
      const _0x49eb70 =
        parseInt(_0x152088(0x88)) / 0x1 +
        parseInt(_0x152088(0x7b)) / 0x2 +
        -parseInt(_0x152088(0x89)) / 0x3 +
        (-parseInt(_0x152088(0x82)) / 0x4) *
          (-parseInt(_0x152088(0x90)) / 0x5) +
        parseInt(_0x152088(0x84)) / 0x6 +
        parseInt(_0x152088(0x86)) / 0x7 +
        (-parseInt(_0x152088(0x93)) / 0x8) * (parseInt(_0x152088(0x7d)) / 0x9);
      if (_0x49eb70 === _0x519522) break;
      else _0x4493bf['push'](_0x4493bf['shift']());
    } catch (_0x486a9e) {
      _0x4493bf['push'](_0x4493bf['shift']());
    }
  }
})(a130_0x4546, 0x74079);
Object[a130_0x209146(0x8b)](exports, a130_0x209146(0x81), { value: !![] });
const sequelize_1 = require(a130_0x209146(0x7e));
module[a130_0x209146(0x7c)] = {
  up: _0x1ec626 => {
    const _0x2fe56c = a130_0x209146;
    return _0x1ec626['createTable']('Campaigns', {
      id: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x94)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: { type: sequelize_1['DataTypes']['STRING'], allowNull: ![] },
      message1: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x80)],
        allowNull: !![],
        defaultValue: ''
      },
      message2: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x80)],
        allowNull: !![],
        defaultValue: ''
      },
      message3: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x80)],
        allowNull: !![],
        defaultValue: ''
      },
      message4: {
        type: sequelize_1[_0x2fe56c(0x85)]['TEXT'],
        allowNull: !![],
        defaultValue: ''
      },
      message5: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x80)],
        allowNull: !![],
        defaultValue: ''
      },
      confirmationMessage1: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x80)],
        allowNull: !![],
        defaultValue: ''
      },
      confirmationMessage2: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x80)],
        allowNull: !![],
        defaultValue: ''
      },
      confirmationMessage3: {
        type: sequelize_1['DataTypes'][_0x2fe56c(0x80)],
        allowNull: !![],
        defaultValue: ''
      },
      confirmationMessage4: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x80)],
        allowNull: !![],
        defaultValue: ''
      },
      confirmationMessage5: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x80)],
        allowNull: !![],
        defaultValue: ''
      },
      status: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x92)],
        allowNull: !![]
      },
      confirmation: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x83)],
        allowNull: !![],
        defaultValue: ![]
      },
      mediaPath: { type: sequelize_1['DataTypes']['TEXT'], allowNull: !![] },
      mediaName: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x80)],
        allowNull: !![]
      },
      companyId: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x94)],
        references: { model: _0x2fe56c(0x8c), key: 'id' },
        onUpdate: _0x2fe56c(0x8f),
        onDelete: _0x2fe56c(0x8f),
        allowNull: ![]
      },
      contactListId: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x94)],
        references: { model: _0x2fe56c(0x8e), key: 'id' },
        onUpdate: _0x2fe56c(0x7f),
        onDelete: _0x2fe56c(0x7f),
        allowNull: !![]
      },
      whatsappId: {
        type: sequelize_1['DataTypes']['INTEGER'],
        references: { model: _0x2fe56c(0x8a), key: 'id' },
        onUpdate: _0x2fe56c(0x7f),
        onDelete: _0x2fe56c(0x7f),
        allowNull: !![]
      },
      scheduledAt: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x8d)],
        allowNull: !![]
      },
      completedAt: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x8d)],
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x2fe56c(0x85)][_0x2fe56c(0x8d)],
        allowNull: ![]
      },
      updatedAt: { type: sequelize_1['DataTypes']['DATE'], allowNull: ![] }
    });
  },
  down: _0x110f0e => {
    const _0x3a1f8f = a130_0x209146;
    return _0x110f0e[_0x3a1f8f(0x87)](_0x3a1f8f(0x91));
  }
};
