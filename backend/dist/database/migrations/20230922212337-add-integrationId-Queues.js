'use strict';
const a242_0x483932 = a242_0x1941;
function a242_0x39f2() {
  const _0x9ae15a = [
    '1268416rwIsRV',
    '5seCRoH',
    'QueueIntegrations',
    '3785084YcnOAU',
    '__esModule',
    'addColumn',
    '493980nVbIYM',
    '153QBKsVP',
    'integrationId',
    '5501193Sqeamc',
    '5212134HdZDzx',
    'sequelize',
    'CASCADE',
    '261982UGbOrf',
    'exports',
    'DataTypes',
    'INTEGER',
    'Whatsapps',
    '128eXpFyg',
    'Queues',
    'defineProperty',
    'SET\x20NULL',
    'removeColumn',
    '2352092UMiuJS'
  ];
  a242_0x39f2 = function () {
    return _0x9ae15a;
  };
  return a242_0x39f2();
}
(function (_0x1b271d, _0x1bb522) {
  const _0x10a05c = a242_0x1941,
    _0x448908 = _0x1b271d();
  while (!![]) {
    try {
      const _0x37c5fb =
        parseInt(_0x10a05c(0xf8)) / 0x1 +
        parseInt(_0x10a05c(0xf7)) / 0x2 +
        -parseInt(_0x10a05c(0x101)) / 0x3 +
        (parseInt(_0x10a05c(0xfb)) / 0x4) * (parseInt(_0x10a05c(0xf9)) / 0x5) +
        parseInt(_0x10a05c(0x102)) / 0x6 +
        (parseInt(_0x10a05c(0x105)) / 0x7) *
          (-parseInt(_0x10a05c(0x10a)) / 0x8) +
        (-parseInt(_0x10a05c(0xff)) / 0x9) * (parseInt(_0x10a05c(0xfe)) / 0xa);
      if (_0x37c5fb === _0x1bb522) break;
      else _0x448908['push'](_0x448908['shift']());
    } catch (_0x5cfa70) {
      _0x448908['push'](_0x448908['shift']());
    }
  }
})(a242_0x39f2, 0xf0fe5);
function a242_0x1941(_0x5a89ba, _0x16db06) {
  const _0x39f284 = a242_0x39f2();
  return (
    (a242_0x1941 = function (_0x19414b, _0x2eed98) {
      _0x19414b = _0x19414b - 0xf5;
      let _0x1e3284 = _0x39f284[_0x19414b];
      return _0x1e3284;
    }),
    a242_0x1941(_0x5a89ba, _0x16db06)
  );
}
Object[a242_0x483932(0x10c)](exports, a242_0x483932(0xfc), { value: !![] });
const sequelize_1 = require(a242_0x483932(0x103));
module[a242_0x483932(0x106)] = {
  up: _0xc1a364 => {
    const _0x436392 = a242_0x483932;
    return (
      _0xc1a364[_0x436392(0xfd)](_0x436392(0x10b), _0x436392(0x100), {
        type: sequelize_1[_0x436392(0x107)][_0x436392(0x108)],
        references: { model: _0x436392(0xfa), key: 'id' },
        onUpdate: _0x436392(0x104),
        onDelete: 'SET\x20NULL'
      }),
      _0xc1a364[_0x436392(0xfd)](_0x436392(0x109), _0x436392(0x100), {
        type: sequelize_1[_0x436392(0x107)][_0x436392(0x108)],
        references: { model: _0x436392(0xfa), key: 'id' },
        onUpdate: _0x436392(0x104),
        onDelete: _0x436392(0xf5)
      })
    );
  },
  down: _0x2d35a0 => {
    const _0x28bf3b = a242_0x483932;
    return (
      _0x2d35a0[_0x28bf3b(0xf6)]('Queues', _0x28bf3b(0x100)),
      _0x2d35a0[_0x28bf3b(0xf6)](_0x28bf3b(0x109), _0x28bf3b(0x100))
    );
  }
};
