'use strict';
function a157_0x110c(_0x2c2369, _0x27b8a1) {
  const _0x4876c3 = a157_0x4876();
  return (
    (a157_0x110c = function (_0x110cf7, _0x4a4243) {
      _0x110cf7 = _0x110cf7 - 0x126;
      let _0x4ed663 = _0x4876c3[_0x110cf7];
      return _0x4ed663;
    }),
    a157_0x110c(_0x2c2369, _0x27b8a1)
  );
}
const a157_0x1b4434 = a157_0x110c;
(function (_0x89aa4b, _0x5a0ec7) {
  const _0x5007f3 = a157_0x110c,
    _0x3de886 = _0x89aa4b();
  while (!![]) {
    try {
      const _0x13f28f =
        parseInt(_0x5007f3(0x12e)) / 0x1 +
        (-parseInt(_0x5007f3(0x126)) / 0x2) *
          (-parseInt(_0x5007f3(0x12c)) / 0x3) +
        -parseInt(_0x5007f3(0x130)) / 0x4 +
        parseInt(_0x5007f3(0x12b)) / 0x5 +
        parseInt(_0x5007f3(0x12a)) / 0x6 +
        (-parseInt(_0x5007f3(0x131)) / 0x7) *
          (parseInt(_0x5007f3(0x128)) / 0x8) +
        (parseInt(_0x5007f3(0x134)) / 0x9) *
          (-parseInt(_0x5007f3(0x129)) / 0xa);
      if (_0x13f28f === _0x5a0ec7) break;
      else _0x3de886['push'](_0x3de886['shift']());
    } catch (_0x28f6be) {
      _0x3de886['push'](_0x3de886['shift']());
    }
  }
})(a157_0x4876, 0x7b103);
function a157_0x4876() {
  const _0x48fefd = [
    '6GTsDSH',
    '__esModule',
    '8ybUvoY',
    '217570fAoSxd',
    '1861350LRKXKZ',
    '3171910TdgjnD',
    '77106KPcHZX',
    'sequelize',
    '518682LobWJd',
    'facebookUserId',
    '1514448qBDZAb',
    '4451713HJqdRY',
    'exports',
    'defineProperty',
    '9VpngUg'
  ];
  a157_0x4876 = function () {
    return _0x48fefd;
  };
  return a157_0x4876();
}
Object[a157_0x1b4434(0x133)](exports, a157_0x1b4434(0x127), { value: !![] });
const sequelize_1 = require(a157_0x1b4434(0x12d));
module[a157_0x1b4434(0x132)] = {
  up: _0xbc69e7 => {
    const _0x2582bd = a157_0x1b4434;
    return _0xbc69e7['addColumn']('Whatsapps', _0x2582bd(0x12f), {
      type: sequelize_1['DataTypes']['TEXT'],
      allowNull: !![]
    });
  },
  down: _0x1a4b6e => {
    const _0x289b4d = a157_0x1b4434;
    return _0x1a4b6e['removeColumn']('Whatsapps', _0x289b4d(0x12f));
  }
};
