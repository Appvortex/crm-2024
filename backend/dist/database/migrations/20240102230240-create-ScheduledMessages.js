'use strict';
const a274_0x3ce235 = a274_0x497d;
(function (_0x1962ed, _0x5e9ec6) {
  const _0x23d84b = a274_0x497d,
    _0x46e310 = _0x1962ed();
  while (!![]) {
    try {
      const _0xacc6b2 =
        -parseInt(_0x23d84b(0x13d)) / 0x1 +
        parseInt(_0x23d84b(0x14b)) / 0x2 +
        -parseInt(_0x23d84b(0x149)) / 0x3 +
        (parseInt(_0x23d84b(0x141)) / 0x4) *
          (parseInt(_0x23d84b(0x147)) / 0x5) +
        (-parseInt(_0x23d84b(0x13b)) / 0x6) *
          (-parseInt(_0x23d84b(0x138)) / 0x7) +
        (parseInt(_0x23d84b(0x148)) / 0x8) *
          (parseInt(_0x23d84b(0x142)) / 0x9) +
        (-parseInt(_0x23d84b(0x13e)) / 0xa) *
          (parseInt(_0x23d84b(0x145)) / 0xb);
      if (_0xacc6b2 === _0x5e9ec6) break;
      else _0x46e310['push'](_0x46e310['shift']());
    } catch (_0x18590b) {
      _0x46e310['push'](_0x46e310['shift']());
    }
  }
})(a274_0x5149, 0x757dc);
Object['defineProperty'](exports, a274_0x3ce235(0x14a), { value: !![] });
function a274_0x5149() {
  const _0x53c6f0 = [
    'INTEGER',
    'exports',
    '6809eKZicL',
    'sequelize',
    '1222860bsusOa',
    '8nMyGfZ',
    '2127423zLEHUq',
    '__esModule',
    '463500ofeTwG',
    'DATE',
    '217287hKUCFL',
    'BOOLEAN',
    'DataTypes',
    '108ixiZZE',
    'dropTable',
    '272972oiJEqW',
    '14150AuPoiP',
    'ScheduledMessages',
    'STRING',
    '12kHMjgn',
    '7335342pAcQts'
  ];
  a274_0x5149 = function () {
    return _0x53c6f0;
  };
  return a274_0x5149();
}
function a274_0x497d(_0x4812c0, _0x3e533d) {
  const _0x5149c5 = a274_0x5149();
  return (
    (a274_0x497d = function (_0x497d23, _0x380d2b) {
      _0x497d23 = _0x497d23 - 0x137;
      let _0x507530 = _0x5149c5[_0x497d23];
      return _0x507530;
    }),
    a274_0x497d(_0x4812c0, _0x3e533d)
  );
}
const sequelize_1 = require(a274_0x3ce235(0x146));
module[a274_0x3ce235(0x144)] = {
  async up(_0x10a2ee) {
    const _0x48ed69 = a274_0x3ce235;
    await _0x10a2ee['createTable'](_0x48ed69(0x13f), {
      id: {
        allowNull: ![],
        autoIncrement: !![],
        primaryKey: !![],
        type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x143)]
      },
      data_mensagem_programada: {
        type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x137)]
      },
      id_conexao: { type: sequelize_1[_0x48ed69(0x13a)]['STRING'] },
      intervalo: { type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x140)] },
      valor_intervalo: {
        type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x140)]
      },
      mensagem: { type: sequelize_1[_0x48ed69(0x13a)]['TEXT'] },
      tipo_dias_envio: {
        type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x140)]
      },
      mostrar_usuario_mensagem: {
        type: sequelize_1['DataTypes'][_0x48ed69(0x139)],
        defaultValue: ![]
      },
      criar_ticket: {
        type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x139)],
        defaultValue: ![]
      },
      contatos: { type: sequelize_1[_0x48ed69(0x13a)]['JSONB'] },
      tags: { type: sequelize_1['DataTypes']['JSONB'] },
      companyId: { type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x143)] },
      nome: { type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x140)] },
      createdAt: {
        allowNull: ![],
        type: sequelize_1[_0x48ed69(0x13a)]['DATE']
      },
      updatedAt: {
        allowNull: ![],
        type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x137)]
      },
      mediaPath: { type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x140)] },
      mediaName: { type: sequelize_1[_0x48ed69(0x13a)]['STRING'] },
      tipo_arquivo: { type: sequelize_1[_0x48ed69(0x13a)][_0x48ed69(0x140)] },
      usuario_envio: { type: sequelize_1[_0x48ed69(0x13a)]['STRING'] },
      enviar_quantas_vezes: { type: sequelize_1['DataTypes'][_0x48ed69(0x140)] }
    });
  },
  async down(_0x4e48b5) {
    const _0x3e0828 = a274_0x3ce235;
    await _0x4e48b5[_0x3e0828(0x13c)](_0x3e0828(0x13f));
  }
};
