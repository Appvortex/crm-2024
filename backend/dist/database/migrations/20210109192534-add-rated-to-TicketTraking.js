'use strict';
function a105_0x46eb() {
  const _0x18c351 = [
    'all',
    '382545NUnwOA',
    'BOOLEAN',
    'sequelize',
    'DataTypes',
    'rated',
    '55RsDOGN',
    '469784tSULEu',
    '41515sWWUiB',
    'exports',
    'ratingAt',
    'removeColumn',
    'defineProperty',
    '14IXSyNi',
    'addColumn',
    '344760SdoOaC',
    '140019LRCJYT',
    '7tfBeoi',
    'TicketTraking',
    '185574eGbkDf',
    '747110KQtVbV',
    '__esModule',
    '9EdaGzu',
    'DATE',
    '12CzhajS'
  ];
  a105_0x46eb = function () {
    return _0x18c351;
  };
  return a105_0x46eb();
}
function a105_0x582d(_0x3c55d4, _0x1712a6) {
  const _0x46eb2c = a105_0x46eb();
  return (
    (a105_0x582d = function (_0x582df2, _0x3666c3) {
      _0x582df2 = _0x582df2 - 0x7c;
      let _0x3ac24c = _0x46eb2c[_0x582df2];
      return _0x3ac24c;
    }),
    a105_0x582d(_0x3c55d4, _0x1712a6)
  );
}
const a105_0x2715ce = a105_0x582d;
(function (_0x198baa, _0xc87d13) {
  const _0x21f7f0 = a105_0x582d,
    _0x56a661 = _0x198baa();
  while (!![]) {
    try {
      const _0x481b40 =
        parseInt(_0x21f7f0(0x84)) / 0x1 +
        (parseInt(_0x21f7f0(0x89)) / 0x2) * (-parseInt(_0x21f7f0(0x8c)) / 0x3) +
        (parseInt(_0x21f7f0(0x94)) / 0x4) * (parseInt(_0x21f7f0(0x7d)) / 0x5) +
        (-parseInt(_0x21f7f0(0x8f)) / 0x6) * (parseInt(_0x21f7f0(0x8d)) / 0x7) +
        (parseInt(_0x21f7f0(0x83)) / 0x8) * (parseInt(_0x21f7f0(0x92)) / 0x9) +
        parseInt(_0x21f7f0(0x90)) / 0xa +
        (parseInt(_0x21f7f0(0x82)) / 0xb) * (parseInt(_0x21f7f0(0x8b)) / 0xc);
      if (_0x481b40 === _0xc87d13) break;
      else _0x56a661['push'](_0x56a661['shift']());
    } catch (_0x322030) {
      _0x56a661['push'](_0x56a661['shift']());
    }
  }
})(a105_0x46eb, 0x2e816);
Object[a105_0x2715ce(0x88)](exports, a105_0x2715ce(0x91), { value: !![] });
const sequelize_1 = require(a105_0x2715ce(0x7f));
module[a105_0x2715ce(0x85)] = {
  up: _0x45cc62 => {
    const _0xb1387e = a105_0x2715ce;
    return Promise['all']([
      _0x45cc62['addColumn']('TicketTraking', _0xb1387e(0x86), {
        type: sequelize_1[_0xb1387e(0x80)][_0xb1387e(0x93)],
        allowNull: !![],
        defaultValue: null
      }),
      _0x45cc62[_0xb1387e(0x8a)]('TicketTraking', _0xb1387e(0x81), {
        type: sequelize_1['DataTypes'][_0xb1387e(0x7e)],
        defaultValue: ![]
      })
    ]);
  },
  down: _0x23c211 => {
    const _0x22bcff = a105_0x2715ce;
    return Promise[_0x22bcff(0x7c)]([
      _0x23c211[_0x22bcff(0x87)](_0x22bcff(0x8e), _0x22bcff(0x86)),
      _0x23c211[_0x22bcff(0x87)](_0x22bcff(0x8e), 'rated')
    ]);
  }
};
