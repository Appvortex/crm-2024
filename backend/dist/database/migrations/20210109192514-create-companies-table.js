'use strict';
const a83_0xfefdb2 = a83_0x1056;
(function (_0x2ae134, _0x419550) {
  const _0xe1a692 = a83_0x1056,
    _0x5c3d62 = _0x2ae134();
  while (!![]) {
    try {
      const _0x22109c =
        parseInt(_0xe1a692(0x141)) / 0x1 +
        (parseInt(_0xe1a692(0x13b)) / 0x2) *
          (-parseInt(_0xe1a692(0x140)) / 0x3) +
        (parseInt(_0xe1a692(0x134)) / 0x4) *
          (-parseInt(_0xe1a692(0x13a)) / 0x5) +
        parseInt(_0xe1a692(0x136)) / 0x6 +
        (-parseInt(_0xe1a692(0x13f)) / 0x7) *
          (-parseInt(_0xe1a692(0x143)) / 0x8) +
        -parseInt(_0xe1a692(0x13e)) / 0x9 +
        parseInt(_0xe1a692(0x142)) / 0xa;
      if (_0x22109c === _0x419550) break;
      else _0x5c3d62['push'](_0x5c3d62['shift']());
    } catch (_0x3d24ac) {
      _0x5c3d62['push'](_0x5c3d62['shift']());
    }
  }
})(a83_0x15d4, 0xb9b20);
function a83_0x15d4() {
  const _0xf0bd77 = [
    'sequelize',
    'defineProperty',
    '4964166isvzQt',
    '359009eSecQu',
    '14907iLsqCy',
    '771904wetXZV',
    '19736720HjKnln',
    '8POhvSE',
    'createTable',
    'DataTypes',
    'Companies',
    '3124UMQCnx',
    'DATE',
    '438720PfyHdp',
    'dropTable',
    'INTEGER',
    'STRING',
    '9655XVxfvI',
    '20TbCpni'
  ];
  a83_0x15d4 = function () {
    return _0xf0bd77;
  };
  return a83_0x15d4();
}
Object[a83_0xfefdb2(0x13d)](exports, '__esModule', { value: !![] });
function a83_0x1056(_0x3bb69f, _0x45b520) {
  const _0x15d4cb = a83_0x15d4();
  return (
    (a83_0x1056 = function (_0x105616, _0x38d9c3) {
      _0x105616 = _0x105616 - 0x134;
      let _0x1e56ee = _0x15d4cb[_0x105616];
      return _0x1e56ee;
    }),
    a83_0x1056(_0x3bb69f, _0x45b520)
  );
}
const sequelize_1 = require(a83_0xfefdb2(0x13c));
module['exports'] = {
  up: _0x7c49da => {
    const _0x1a4d31 = a83_0xfefdb2;
    return _0x7c49da[_0x1a4d31(0x144)](_0x1a4d31(0x146), {
      id: {
        type: sequelize_1[_0x1a4d31(0x145)][_0x1a4d31(0x138)],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      },
      name: {
        type: sequelize_1[_0x1a4d31(0x145)][_0x1a4d31(0x139)],
        allowNull: ![],
        unique: !![]
      },
      phone: {
        type: sequelize_1[_0x1a4d31(0x145)][_0x1a4d31(0x139)],
        allowNull: !![]
      },
      email: {
        type: sequelize_1[_0x1a4d31(0x145)][_0x1a4d31(0x139)],
        allowNull: !![]
      },
      createdAt: {
        type: sequelize_1[_0x1a4d31(0x145)][_0x1a4d31(0x135)],
        allowNull: ![]
      },
      updatedAt: { type: sequelize_1['DataTypes']['DATE'], allowNull: ![] }
    });
  },
  down: _0x69b2e6 => {
    const _0x4d9d06 = a83_0xfefdb2;
    return _0x69b2e6[_0x4d9d06(0x137)]('Companies');
  }
};
