'use strict';
const a168_0xd579ef = a168_0x4d92;
(function (_0x2725eb, _0x2e4f47) {
  const _0x230456 = a168_0x4d92,
    _0x4f94ab = _0x2725eb();
  while (!![]) {
    try {
      const _0x2bb80f =
        (parseInt(_0x230456(0x14c)) / 0x1) *
          (parseInt(_0x230456(0x152)) / 0x2) +
        -parseInt(_0x230456(0x147)) / 0x3 +
        parseInt(_0x230456(0x14e)) / 0x4 +
        (parseInt(_0x230456(0x157)) / 0x5) *
          (-parseInt(_0x230456(0x156)) / 0x6) +
        (parseInt(_0x230456(0x149)) / 0x7) *
          (-parseInt(_0x230456(0x155)) / 0x8) +
        (-parseInt(_0x230456(0x151)) / 0x9) *
          (parseInt(_0x230456(0x153)) / 0xa) +
        (parseInt(_0x230456(0x145)) / 0xb) * (parseInt(_0x230456(0x14f)) / 0xc);
      if (_0x2bb80f === _0x2e4f47) break;
      else _0x4f94ab['push'](_0x4f94ab['shift']());
    } catch (_0x123a2a) {
      _0x4f94ab['push'](_0x4f94ab['shift']());
    }
  }
})(a168_0x5662, 0x92bce);
function a168_0x5662() {
  const _0x4dd2ee = [
    'FLOAT',
    '2412680WEQMZq',
    '1352838hzqWuR',
    '5rgGMBy',
    'dropTable',
    'DataTypes',
    'CASCADE',
    'DATE',
    '18282tXDvCG',
    'createTable',
    '357966zxxOgJ',
    'STRING',
    '7mmKpko',
    '__esModule',
    'INTEGER',
    '12611KcroiZ',
    'Invoices',
    '3656632bpecYH',
    '2868lyzbNa',
    'BOOLEAN',
    '4905QsvGDP',
    '124inuvev',
    '15520SxbgSq'
  ];
  a168_0x5662 = function () {
    return _0x4dd2ee;
  };
  return a168_0x5662();
}
function a168_0x4d92(_0x1a401e, _0x39ebb4) {
  const _0x5662cf = a168_0x5662();
  return (
    (a168_0x4d92 = function (_0x4d92aa, _0x280bba) {
      _0x4d92aa = _0x4d92aa - 0x145;
      let _0x45fb9f = _0x5662cf[_0x4d92aa];
      return _0x45fb9f;
    }),
    a168_0x4d92(_0x1a401e, _0x39ebb4)
  );
}
Object['defineProperty'](exports, a168_0xd579ef(0x14a), { value: !![] });
const sequelize_1 = require('sequelize');
module['exports'] = {
  up: _0x23f349 => {
    const _0x3b2380 = a168_0xd579ef;
    return _0x23f349[_0x3b2380(0x146)]('Invoices', {
      id: {
        type: sequelize_1[_0x3b2380(0x159)]['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      companyId: {
        type: sequelize_1[_0x3b2380(0x159)][_0x3b2380(0x14b)],
        references: { model: 'Companies', key: 'id' },
        onUpdate: _0x3b2380(0x15a),
        onDelete: 'SET\x20NULL',
        allowNull: ![]
      },
      dueDate: { type: sequelize_1['DataTypes']['STRING'] },
      detail: { type: sequelize_1[_0x3b2380(0x159)][_0x3b2380(0x148)] },
      status: { type: sequelize_1[_0x3b2380(0x159)]['STRING'] },
      value: { type: sequelize_1[_0x3b2380(0x159)][_0x3b2380(0x154)] },
      users: {
        type: sequelize_1['DataTypes'][_0x3b2380(0x14b)],
        defaultValue: 0x0
      },
      connections: {
        type: sequelize_1['DataTypes']['INTEGER'],
        defaultValue: 0x0
      },
      queues: {
        type: sequelize_1[_0x3b2380(0x159)]['INTEGER'],
        defaultValue: 0x0
      },
      useWhatsapp: {
        type: sequelize_1[_0x3b2380(0x159)][_0x3b2380(0x150)],
        defaultValue: !![]
      },
      useFacebook: {
        type: sequelize_1[_0x3b2380(0x159)][_0x3b2380(0x150)],
        defaultValue: !![]
      },
      useInstagram: {
        type: sequelize_1[_0x3b2380(0x159)][_0x3b2380(0x150)],
        defaultValue: !![]
      },
      useCampaigns: {
        type: sequelize_1['DataTypes']['BOOLEAN'],
        defaultValue: !![]
      },
      useSchedules: {
        type: sequelize_1[_0x3b2380(0x159)]['BOOLEAN'],
        defaultValue: !![]
      },
      useInternalChat: {
        type: sequelize_1['DataTypes'][_0x3b2380(0x150)],
        defaultValue: !![]
      },
      useExternalApi: {
        type: sequelize_1[_0x3b2380(0x159)][_0x3b2380(0x150)],
        defaultValue: !![]
      },
      createdAt: {
        type: sequelize_1['DataTypes'][_0x3b2380(0x15b)],
        allowNull: ![]
      },
      updatedAt: {
        type: sequelize_1[_0x3b2380(0x159)][_0x3b2380(0x15b)],
        allowNull: ![]
      }
    });
  },
  down: _0x588463 => {
    const _0x24216d = a168_0xd579ef;
    return _0x588463[_0x24216d(0x158)](_0x24216d(0x14d));
  }
};
