'use strict';
const a236_0x5d4d36 = a236_0x5b8a;
(function (_0x25cc8c, _0x535e16) {
  const _0x346ac3 = a236_0x5b8a,
    _0x3c19a = _0x25cc8c();
  while (!![]) {
    try {
      const _0x26d319 =
        -parseInt(_0x346ac3(0x82)) / 0x1 +
        (-parseInt(_0x346ac3(0x89)) / 0x2) *
          (-parseInt(_0x346ac3(0x88)) / 0x3) +
        -parseInt(_0x346ac3(0x7c)) / 0x4 +
        (-parseInt(_0x346ac3(0x8e)) / 0x5) * (parseInt(_0x346ac3(0x87)) / 0x6) +
        -parseInt(_0x346ac3(0x83)) / 0x7 +
        parseInt(_0x346ac3(0x8c)) / 0x8 +
        (-parseInt(_0x346ac3(0x8f)) / 0x9) * (-parseInt(_0x346ac3(0x8b)) / 0xa);
      if (_0x26d319 === _0x535e16) break;
      else _0x3c19a['push'](_0x3c19a['shift']());
    } catch (_0x3eb04a) {
      _0x3c19a['push'](_0x3c19a['shift']());
    }
  }
})(a236_0xf70d, 0xf154b);
Object['defineProperty'](exports, a236_0x5d4d36(0x7b), { value: !![] });
const sequelize_1 = require(a236_0x5d4d36(0x80));
module['exports'] = {
  up: _0x2d0000 => {
    const _0x46d065 = a236_0x5d4d36;
    return _0x2d0000[_0x46d065(0x7f)](_0x46d065(0x8d), {
      id: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7e)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      companyId: {
        type: sequelize_1[_0x46d065(0x84)]['INTEGER'],
        references: { model: _0x46d065(0x8a), key: 'id' },
        onUpdate: _0x46d065(0x81),
        onDelete: 'CASCADE',
        allowNull: ![]
      },
      hoursCloseTicketsAuto: {
        type: sequelize_1['DataTypes'][_0x46d065(0x7d)],
        allowNull: ![]
      },
      chatBotType: {
        type: sequelize_1[_0x46d065(0x84)]['STRING'],
        allowNull: ![]
      },
      acceptCallWhatsapp: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      userRandom: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      sendGreetingMessageOneQueues: {
        type: sequelize_1['DataTypes']['STRING'],
        allowNull: ![]
      },
      sendSignMessage: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      sendFarewellWaitingTicket: {
        type: sequelize_1['DataTypes'][_0x46d065(0x7d)],
        allowNull: ![]
      },
      userRating: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      sendGreetingAccepted: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      CheckMsgIsGroup: {
        type: sequelize_1[_0x46d065(0x84)]['STRING'],
        allowNull: ![]
      },
      sendQueuePosition: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      scheduleType: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      acceptAudioMessageContact: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      enableLGPD: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      sendMsgTransfTicket: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      requiredTag: {
        type: sequelize_1['DataTypes'][_0x46d065(0x7d)],
        allowNull: ![]
      },
      lgpdDeleteMessage: {
        type: sequelize_1['DataTypes'][_0x46d065(0x7d)],
        allowNull: ![]
      },
      lgpdHideNumber: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      lgpdConsent: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x7d)],
        allowNull: ![]
      },
      lgpdLink: {
        type: sequelize_1['DataTypes'][_0x46d065(0x7d)],
        allowNull: !![]
      },
      lgpdMessage: {
        type: sequelize_1[_0x46d065(0x84)][_0x46d065(0x85)],
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x46d065(0x86)],
        allowNull: ![]
      },
      updatedAt: { type: sequelize_1[_0x46d065(0x84)]['DATE'], allowNull: ![] }
    });
  },
  down: _0x5ab4db => {
    const _0x2c48f8 = a236_0x5d4d36;
    return _0x5ab4db['dropTable'](_0x2c48f8(0x8d));
  }
};
function a236_0x5b8a(_0xe785d8, _0x24fa42) {
  const _0xf70dd8 = a236_0xf70d();
  return (
    (a236_0x5b8a = function (_0x5b8a5a, _0x53ddbd) {
      _0x5b8a5a = _0x5b8a5a - 0x7b;
      let _0x7ed5d4 = _0xf70dd8[_0x5b8a5a];
      return _0x7ed5d4;
    }),
    a236_0x5b8a(_0xe785d8, _0x24fa42)
  );
}
function a236_0xf70d() {
  const _0x4bfada = [
    '8091936cnHYGr',
    'CompaniesSettings',
    '8611045ppcJDj',
    '153HjObii',
    '__esModule',
    '2777340YdkVUj',
    'STRING',
    'INTEGER',
    'createTable',
    'sequelize',
    'CASCADE',
    '1617516OZyrYc',
    '4490381LuOXKm',
    'DataTypes',
    'TEXT',
    'DATE',
    '6tOmytM',
    '1077azWrHm',
    '5558jjJSzm',
    'Companies',
    '2149930jdovzE'
  ];
  a236_0xf70d = function () {
    return _0x4bfada;
  };
  return a236_0xf70d();
}
