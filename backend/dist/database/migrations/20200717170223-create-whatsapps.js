'use strict';
function a56_0x1880() {
  const _0x5b86f9 = [
    'DATE',
    '395627ENYkIL',
    '3004770yOwpkR',
    'BOOLEAN',
    '164547Sljnbd',
    '442561GZjUXP',
    'Whatsapps',
    '__esModule',
    'TEXT',
    'STRING',
    'INTEGER',
    'sequelize',
    '12VJDYSZ',
    '4891912RQDCCG',
    '619415TrBhXC',
    '9awhFLP',
    'DataTypes',
    '437582jNZgOx'
  ];
  a56_0x1880 = function () {
    return _0x5b86f9;
  };
  return a56_0x1880();
}
const a56_0x2d12d7 = a56_0x4d5d;
(function (_0x46cd65, _0x4c976f) {
  const _0x42ab14 = a56_0x4d5d,
    _0x532ed5 = _0x46cd65();
  while (!![]) {
    try {
      const _0x361701 =
        -parseInt(_0x42ab14(0x1b0)) / 0x1 +
        (-parseInt(_0x42ab14(0x1ae)) / 0x2) *
          (parseInt(_0x42ab14(0x1ac)) / 0x3) +
        (parseInt(_0x42ab14(0x1a9)) / 0x4) *
          (parseInt(_0x42ab14(0x1ab)) / 0x5) +
        parseInt(_0x42ab14(0x1b1)) / 0x6 +
        -parseInt(_0x42ab14(0x1b4)) / 0x7 +
        parseInt(_0x42ab14(0x1aa)) / 0x8 +
        -parseInt(_0x42ab14(0x1b3)) / 0x9;
      if (_0x361701 === _0x4c976f) break;
      else _0x532ed5['push'](_0x532ed5['shift']());
    } catch (_0x3d1615) {
      _0x532ed5['push'](_0x532ed5['shift']());
    }
  }
})(a56_0x1880, 0x558db);
function a56_0x4d5d(_0x324c67, _0x538af5) {
  const _0x188079 = a56_0x1880();
  return (
    (a56_0x4d5d = function (_0x4d5d76, _0x143dc7) {
      _0x4d5d76 = _0x4d5d76 - 0x1a3;
      let _0x4ac6bf = _0x188079[_0x4d5d76];
      return _0x4ac6bf;
    }),
    a56_0x4d5d(_0x324c67, _0x538af5)
  );
}
Object['defineProperty'](exports, a56_0x2d12d7(0x1a4), { value: !![] });
const sequelize_1 = require(a56_0x2d12d7(0x1a8));
module['exports'] = {
  up: _0x31edac => {
    const _0x34b53b = a56_0x2d12d7;
    return _0x31edac['createTable'](_0x34b53b(0x1a3), {
      id: {
        type: sequelize_1['DataTypes'][_0x34b53b(0x1a7)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      session: { type: sequelize_1[_0x34b53b(0x1ad)][_0x34b53b(0x1a5)] },
      qrcode: { type: sequelize_1[_0x34b53b(0x1ad)]['TEXT'] },
      status: { type: sequelize_1[_0x34b53b(0x1ad)]['STRING'] },
      battery: { type: sequelize_1[_0x34b53b(0x1ad)][_0x34b53b(0x1a6)] },
      plugged: { type: sequelize_1[_0x34b53b(0x1ad)][_0x34b53b(0x1b2)] },
      createdAt: {
        type: sequelize_1[_0x34b53b(0x1ad)][_0x34b53b(0x1af)],
        allowNull: ![]
      },
      updatedAt: { type: sequelize_1[_0x34b53b(0x1ad)]['DATE'], allowNull: ![] }
    });
  },
  down: _0x5d7afc => {
    return _0x5d7afc['dropTable']('Whatsapps');
  }
};
