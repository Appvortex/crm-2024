'use strict';
function a133_0x4e51() {
  const _0x3a30a8 = [
    'dropTable',
    'CASCADE',
    '302234KShfbY',
    '2531160ORSUiB',
    'INTEGER',
    'createTable',
    'exports',
    '60404lnehtl',
    '12DOPyVF',
    'BOOLEAN',
    'TEXT',
    'ContactListItems',
    '1089246QBWISa',
    '1682175JflGyR',
    '284528TKWGQi',
    'DataTypes',
    'STRING',
    'CampaignShipping',
    '1855728jefxRx',
    'sequelize',
    'SET\x20NULL',
    'Campaigns',
    '__esModule',
    'DATE'
  ];
  a133_0x4e51 = function () {
    return _0x3a30a8;
  };
  return a133_0x4e51();
}
const a133_0x437b77 = a133_0x42e7;
(function (_0x58f65b, _0xc25f49) {
  const _0x2f42b8 = a133_0x42e7,
    _0x52e7a6 = _0x58f65b();
  while (!![]) {
    try {
      const _0x221de4 =
        parseInt(_0x2f42b8(0x148)) / 0x1 +
        (parseInt(_0x2f42b8(0x14d)) / 0x2) *
          (-parseInt(_0x2f42b8(0x14e)) / 0x3) +
        parseInt(_0x2f42b8(0x154)) / 0x4 +
        parseInt(_0x2f42b8(0x153)) / 0x5 +
        parseInt(_0x2f42b8(0x152)) / 0x6 +
        -parseInt(_0x2f42b8(0x158)) / 0x7 +
        -parseInt(_0x2f42b8(0x149)) / 0x8;
      if (_0x221de4 === _0xc25f49) break;
      else _0x52e7a6['push'](_0x52e7a6['shift']());
    } catch (_0x34a463) {
      _0x52e7a6['push'](_0x52e7a6['shift']());
    }
  }
})(a133_0x4e51, 0x2e26b);
function a133_0x42e7(_0x453df2, _0x5b5fe5) {
  const _0x4e519b = a133_0x4e51();
  return (
    (a133_0x42e7 = function (_0x42e7ee, _0x5b48f6) {
      _0x42e7ee = _0x42e7ee - 0x144;
      let _0x5c2eec = _0x4e519b[_0x42e7ee];
      return _0x5c2eec;
    }),
    a133_0x42e7(_0x453df2, _0x5b5fe5)
  );
}
Object['defineProperty'](exports, a133_0x437b77(0x144), { value: !![] });
const sequelize_1 = require(a133_0x437b77(0x159));
module[a133_0x437b77(0x14c)] = {
  up: _0x553773 => {
    const _0x2a67a6 = a133_0x437b77;
    return _0x553773[_0x2a67a6(0x14b)]('CampaignShipping', {
      id: {
        type: sequelize_1[_0x2a67a6(0x155)]['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      jobId: { type: sequelize_1['DataTypes']['STRING'], allowNull: !![] },
      number: {
        type: sequelize_1[_0x2a67a6(0x155)][_0x2a67a6(0x156)],
        allowNull: ![]
      },
      message: {
        type: sequelize_1['DataTypes'][_0x2a67a6(0x150)],
        allowNull: ![]
      },
      confirmationMessage: {
        type: sequelize_1[_0x2a67a6(0x155)][_0x2a67a6(0x150)],
        allowNull: !![]
      },
      confirmation: {
        type: sequelize_1['DataTypes'][_0x2a67a6(0x14f)],
        allowNull: !![]
      },
      contactId: {
        type: sequelize_1[_0x2a67a6(0x155)][_0x2a67a6(0x14a)],
        references: { model: _0x2a67a6(0x151), key: 'id' },
        onUpdate: _0x2a67a6(0x15a),
        onDelete: 'SET\x20NULL',
        allowNull: !![]
      },
      campaignId: {
        type: sequelize_1[_0x2a67a6(0x155)][_0x2a67a6(0x14a)],
        references: { model: _0x2a67a6(0x15b), key: 'id' },
        onUpdate: _0x2a67a6(0x147),
        onDelete: _0x2a67a6(0x147),
        allowNull: ![]
      },
      confirmationRequestedAt: {
        type: sequelize_1['DataTypes'][_0x2a67a6(0x145)],
        allowNull: !![]
      },
      confirmedAt: {
        type: sequelize_1['DataTypes'][_0x2a67a6(0x145)],
        allowNull: !![]
      },
      deliveredAt: {
        type: sequelize_1[_0x2a67a6(0x155)][_0x2a67a6(0x145)],
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x2a67a6(0x155)]['DATE'],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x2a67a6(0x155)][_0x2a67a6(0x145)],
        allowNull: ![]
      }
    });
  },
  down: _0xc124bf => {
    const _0x2049e1 = a133_0x437b77;
    return _0xc124bf[_0x2049e1(0x146)](_0x2049e1(0x157));
  }
};
