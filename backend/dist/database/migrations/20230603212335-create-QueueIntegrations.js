'use strict';
const a186_0x46c18b = a186_0x92a8;
(function (_0x450dfa, _0x23d1fb) {
  const _0x544086 = a186_0x92a8,
    _0x3a0f6c = _0x450dfa();
  while (!![]) {
    try {
      const _0x10b8d9 =
        -parseInt(_0x544086(0x1bb)) / 0x1 +
        (parseInt(_0x544086(0x1b6)) / 0x2) *
          (-parseInt(_0x544086(0x1ae)) / 0x3) +
        -parseInt(_0x544086(0x1be)) / 0x4 +
        (parseInt(_0x544086(0x1b4)) / 0x5) *
          (parseInt(_0x544086(0x1bc)) / 0x6) +
        (parseInt(_0x544086(0x1b9)) / 0x7) *
          (parseInt(_0x544086(0x1b1)) / 0x8) +
        (-parseInt(_0x544086(0x1bf)) / 0x9) *
          (-parseInt(_0x544086(0x1b0)) / 0xa) +
        parseInt(_0x544086(0x1af)) / 0xb;
      if (_0x10b8d9 === _0x23d1fb) break;
      else _0x3a0f6c['push'](_0x3a0f6c['shift']());
    } catch (_0x509aaa) {
      _0x3a0f6c['push'](_0x3a0f6c['shift']());
    }
  }
})(a186_0x244c, 0xd4f75);
function a186_0x244c() {
  const _0x252e56 = [
    '175aKxFFp',
    'INTEGER',
    '713391ZvUnMU',
    '26850tWNwWG',
    'dropTable',
    '883716fmUhbU',
    '7176348CzXFuc',
    'STRING',
    '2058969iRZRqZ',
    '6000313hOpqDP',
    '20deMZGe',
    '69912HomRCu',
    'sequelize',
    'createTable',
    '150nQGAzB',
    'DataTypes',
    '2ZUqOZy',
    'DATE',
    'QueueIntegrations'
  ];
  a186_0x244c = function () {
    return _0x252e56;
  };
  return a186_0x244c();
}
function a186_0x92a8(_0x3727a8, _0x447390) {
  const _0x244ccb = a186_0x244c();
  return (
    (a186_0x92a8 = function (_0x92a885, _0x58567d) {
      _0x92a885 = _0x92a885 - 0x1ae;
      let _0xd32508 = _0x244ccb[_0x92a885];
      return _0xd32508;
    }),
    a186_0x92a8(_0x3727a8, _0x447390)
  );
}
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a186_0x46c18b(0x1b2));
module['exports'] = {
  up: _0x1e41a0 => {
    const _0x30617d = a186_0x46c18b;
    return _0x1e41a0[_0x30617d(0x1b3)](_0x30617d(0x1b8), {
      id: {
        type: sequelize_1[_0x30617d(0x1b5)][_0x30617d(0x1ba)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      type: {
        type: sequelize_1[_0x30617d(0x1b5)][_0x30617d(0x1c0)],
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x30617d(0x1b5)][_0x30617d(0x1c0)],
        allowNull: ![],
        unique: !![]
      },
      projectName: {
        type: sequelize_1['DataTypes'][_0x30617d(0x1c0)],
        allowNull: ![],
        unique: !![]
      },
      jsonContent: {
        type: sequelize_1[_0x30617d(0x1b5)]['TEXT'],
        allowNull: ![]
      },
      language: {
        type: sequelize_1[_0x30617d(0x1b5)][_0x30617d(0x1c0)],
        allowNull: ![]
      },
      createdAt: {
        type: sequelize_1[_0x30617d(0x1b5)][_0x30617d(0x1b7)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1['DataTypes'][_0x30617d(0x1b7)],
        allowNull: ![]
      }
    });
  },
  down: _0x267289 => {
    const _0x55b1f6 = a186_0x46c18b;
    return _0x267289[_0x55b1f6(0x1bd)](_0x55b1f6(0x1b8));
  }
};
