'use strict';
const a275_0x320b6a = a275_0x2978;
function a275_0x2978(_0x5c486c, _0x1e7906) {
  const _0x3a729d = a275_0x3a72();
  return (
    (a275_0x2978 = function (_0x2978df, _0x3eb08f) {
      _0x2978df = _0x2978df - 0x81;
      let _0x4507b9 = _0x3a729d[_0x2978df];
      return _0x4507b9;
    }),
    a275_0x2978(_0x5c486c, _0x1e7906)
  );
}
(function (_0x543b9a, _0x1814e1) {
  const _0x1dfa22 = a275_0x2978,
    _0x972c3 = _0x543b9a();
  while (!![]) {
    try {
      const _0x2bb522 =
        (-parseInt(_0x1dfa22(0x84)) / 0x1) *
          (-parseInt(_0x1dfa22(0x8e)) / 0x2) +
        (parseInt(_0x1dfa22(0x91)) / 0x3) * (-parseInt(_0x1dfa22(0x85)) / 0x4) +
        (-parseInt(_0x1dfa22(0x83)) / 0x5) * (parseInt(_0x1dfa22(0x82)) / 0x6) +
        -parseInt(_0x1dfa22(0x8a)) / 0x7 +
        -parseInt(_0x1dfa22(0x89)) / 0x8 +
        parseInt(_0x1dfa22(0x93)) / 0x9 +
        parseInt(_0x1dfa22(0x8b)) / 0xa;
      if (_0x2bb522 === _0x1814e1) break;
      else _0x972c3['push'](_0x972c3['shift']());
    } catch (_0x5131fd) {
      _0x972c3['push'](_0x972c3['shift']());
    }
  }
})(a275_0x3a72, 0x4a93e);
function a275_0x3a72() {
  const _0x1a6021 = [
    '1594012ihEWWn',
    '4704560CUmgFc',
    'STRING',
    'sequelize',
    '101414SbIjyL',
    'createTable',
    'DataTypes',
    '5673NOulWX',
    'INTEGER',
    '4088277UqcKlK',
    'defineProperty',
    'ScheduledMessagesEnvios',
    '174HNoiZf',
    '66455fspRdY',
    '8kWHeCa',
    '124BMUBUP',
    'dropTable',
    'exports',
    'DATE',
    '2824952DyQVfP'
  ];
  a275_0x3a72 = function () {
    return _0x1a6021;
  };
  return a275_0x3a72();
}
Object[a275_0x320b6a(0x94)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a275_0x320b6a(0x8d));
module[a275_0x320b6a(0x87)] = {
  async up(_0x1d8626) {
    const _0x77ff88 = a275_0x320b6a;
    await _0x1d8626[_0x77ff88(0x8f)](_0x77ff88(0x81), {
      id: {
        allowNull: ![],
        autoIncrement: !![],
        primaryKey: !![],
        type: sequelize_1[_0x77ff88(0x90)][_0x77ff88(0x92)]
      },
      createdAt: {
        allowNull: ![],
        type: sequelize_1[_0x77ff88(0x90)][_0x77ff88(0x88)]
      },
      updatedAt: {
        allowNull: ![],
        type: sequelize_1['DataTypes'][_0x77ff88(0x88)]
      },
      mediaPath: { type: sequelize_1[_0x77ff88(0x90)][_0x77ff88(0x8c)] },
      mediaName: { type: sequelize_1[_0x77ff88(0x90)]['STRING'] },
      mensagem: { type: sequelize_1['DataTypes']['TEXT'] },
      companyId: { type: sequelize_1[_0x77ff88(0x90)][_0x77ff88(0x92)] },
      data_envio: { type: sequelize_1[_0x77ff88(0x90)]['DATE'] },
      scheduledmessages: { type: sequelize_1['DataTypes'][_0x77ff88(0x92)] },
      key: { type: sequelize_1[_0x77ff88(0x90)][_0x77ff88(0x8c)] }
    });
  },
  async down(_0x5ab472) {
    const _0x4014ed = a275_0x320b6a;
    await _0x5ab472[_0x4014ed(0x86)](_0x4014ed(0x81));
  }
};
