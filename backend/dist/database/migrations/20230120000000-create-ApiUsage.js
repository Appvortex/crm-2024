'use strict';
function a169_0x88f2() {
  const _0x3b0529 = [
    'DATE',
    '1685079bpnXro',
    '12860tDNgdh',
    '3646976hYLCwk',
    'sequelize',
    'INTEGER',
    'defineProperty',
    '84858eWgefm',
    '27FPmlgz',
    'DataTypes',
    'TEXT',
    'ApiUsages',
    'dropTable',
    '868zHrKrG',
    '23158260vKYCas',
    '4290164GLZSCe',
    '__esModule',
    '7823940FQuCNW'
  ];
  a169_0x88f2 = function () {
    return _0x3b0529;
  };
  return a169_0x88f2();
}
const a169_0x14ec38 = a169_0x58d6;
(function (_0x2a2a3e, _0x502989) {
  const _0x214f37 = a169_0x58d6,
    _0x4ff44e = _0x2a2a3e();
  while (!![]) {
    try {
      const _0x616673 =
        (parseInt(_0x214f37(0x166)) / 0x1) *
          (parseInt(_0x214f37(0x160)) / 0x2) +
        -parseInt(_0x214f37(0x15f)) / 0x3 +
        parseInt(_0x214f37(0x15b)) / 0x4 +
        parseInt(_0x214f37(0x15d)) / 0x5 +
        (parseInt(_0x214f37(0x165)) / 0x6) *
          (parseInt(_0x214f37(0x159)) / 0x7) +
        -parseInt(_0x214f37(0x161)) / 0x8 +
        -parseInt(_0x214f37(0x15a)) / 0x9;
      if (_0x616673 === _0x502989) break;
      else _0x4ff44e['push'](_0x4ff44e['shift']());
    } catch (_0x36ca27) {
      _0x4ff44e['push'](_0x4ff44e['shift']());
    }
  }
})(a169_0x88f2, 0xedc8e);
Object[a169_0x14ec38(0x164)](exports, a169_0x14ec38(0x15c), { value: !![] });
function a169_0x58d6(_0x5ab2df, _0x12b5fb) {
  const _0x88f240 = a169_0x88f2();
  return (
    (a169_0x58d6 = function (_0x58d6fe, _0x1fa0fd) {
      _0x58d6fe = _0x58d6fe - 0x155;
      let _0x4d6cd3 = _0x88f240[_0x58d6fe];
      return _0x4d6cd3;
    }),
    a169_0x58d6(_0x5ab2df, _0x12b5fb)
  );
}
const sequelize_1 = require(a169_0x14ec38(0x162));
module['exports'] = {
  up: _0x16751e => {
    const _0x1c3946 = a169_0x14ec38;
    return _0x16751e['createTable'](_0x1c3946(0x157), {
      id: {
        type: sequelize_1[_0x1c3946(0x155)][_0x1c3946(0x163)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      companyId: {
        type: sequelize_1[_0x1c3946(0x155)]['INTEGER'],
        defaultValue: 0x0
      },
      dateUsed: {
        type: sequelize_1[_0x1c3946(0x155)][_0x1c3946(0x156)],
        allowNull: ![]
      },
      UsedOnDay: {
        type: sequelize_1[_0x1c3946(0x155)][_0x1c3946(0x163)],
        defaultValue: 0x0
      },
      usedText: {
        type: sequelize_1['DataTypes']['INTEGER'],
        defaultValue: 0x0
      },
      usedPDF: {
        type: sequelize_1[_0x1c3946(0x155)][_0x1c3946(0x163)],
        defaultValue: 0x0
      },
      usedImage: {
        type: sequelize_1[_0x1c3946(0x155)][_0x1c3946(0x163)],
        defaultValue: 0x0
      },
      usedVideo: {
        type: sequelize_1[_0x1c3946(0x155)][_0x1c3946(0x163)],
        defaultValue: 0x0
      },
      usedOther: {
        type: sequelize_1[_0x1c3946(0x155)]['INTEGER'],
        defaultValue: 0x0
      },
      usedCheckNumber: {
        type: sequelize_1[_0x1c3946(0x155)]['INTEGER'],
        defaultValue: 0x0
      },
      createdAt: {
        type: sequelize_1[_0x1c3946(0x155)][_0x1c3946(0x15e)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x1c3946(0x155)][_0x1c3946(0x15e)],
        allowNull: ![]
      }
    });
  },
  down: _0x3b47b2 => {
    const _0x5a9b34 = a169_0x14ec38;
    return _0x3b47b2[_0x5a9b34(0x158)](_0x5a9b34(0x157));
  }
};
