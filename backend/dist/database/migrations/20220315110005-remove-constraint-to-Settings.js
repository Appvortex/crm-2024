'use strict';
const a132_0x14e013 = a132_0x4299;
(function (_0x567309, _0x11d587) {
  const _0x1e2a6c = a132_0x4299,
    _0x1757ee = _0x567309();
  while (!![]) {
    try {
      const _0x560d05 =
        (-parseInt(_0x1e2a6c(0xc4)) / 0x1) * (parseInt(_0x1e2a6c(0xc6)) / 0x2) +
        parseInt(_0x1e2a6c(0xc9)) / 0x3 +
        (-parseInt(_0x1e2a6c(0xcb)) / 0x4) *
          (-parseInt(_0x1e2a6c(0xba)) / 0x5) +
        (-parseInt(_0x1e2a6c(0xca)) / 0x6) * (parseInt(_0x1e2a6c(0xc2)) / 0x7) +
        (-parseInt(_0x1e2a6c(0xcc)) / 0x8) *
          (-parseInt(_0x1e2a6c(0xcf)) / 0x9) +
        (-parseInt(_0x1e2a6c(0xce)) / 0xa) *
          (-parseInt(_0x1e2a6c(0xc5)) / 0xb) +
        parseInt(_0x1e2a6c(0xbf)) / 0xc;
      if (_0x560d05 === _0x11d587) break;
      else _0x1757ee['push'](_0x1757ee['shift']());
    } catch (_0x39f76c) {
      _0x1757ee['push'](_0x1757ee['shift']());
    }
  }
})(a132_0x5361, 0x1e334);
Object[a132_0x14e013(0xc1)](exports, '__esModule', { value: !![] });
function a132_0x4299(_0x361fa8, _0x5c25f6) {
  const _0x536184 = a132_0x5361();
  return (
    (a132_0x4299 = function (_0x4299fb, _0x3ecccf) {
      _0x4299fb = _0x4299fb - 0xb6;
      let _0x3c49ac = _0x536184[_0x4299fb];
      return _0x3c49ac;
    }),
    a132_0x4299(_0x361fa8, _0x5c25f6)
  );
}
function a132_0x5361() {
  const _0x11a534 = [
    'all',
    '1420430kJewUK',
    '9rdLxdB',
    'DELETE\x20FROM\x20\x22Settings\x22',
    'Settings',
    'key',
    'primary\x20key',
    '85eYgkGM',
    'query',
    'removeColumn',
    'sequelize',
    'addConstraint',
    '691248YrhIYg',
    'Settings_pkey',
    'defineProperty',
    '1422162Dxazvh',
    'addColumn',
    '1pqrfrC',
    '11EgaXAS',
    '447446Wqlsjq',
    'DataTypes',
    'removeConstraint',
    '538752SoQVpR',
    '6VbcYdS',
    '23668tYlOLg',
    '566152RzKULm'
  ];
  a132_0x5361 = function () {
    return _0x11a534;
  };
  return a132_0x5361();
}
const sequelize_1 = require(a132_0x14e013(0xbd));
module['exports'] = {
  up: _0xe1b023 => {
    const _0x1cdd49 = a132_0x14e013;
    return Promise[_0x1cdd49(0xcd)]([
      _0xe1b023['sequelize'][_0x1cdd49(0xbb)](
        'DELETE\x20FROM\x20\x22Settings\x22'
      ),
      _0xe1b023[_0x1cdd49(0xc8)](_0x1cdd49(0xb7), _0x1cdd49(0xc0)),
      _0xe1b023[_0x1cdd49(0xc3)](_0x1cdd49(0xb7), 'id', {
        type: sequelize_1[_0x1cdd49(0xc7)]['INTEGER'],
        autoIncrement: !![],
        primaryKey: !![],
        allowNull: ![]
      })
    ]);
  },
  down: _0x4c758c => {
    const _0x4a31ee = a132_0x14e013;
    return Promise[_0x4a31ee(0xcd)]([
      _0x4c758c[_0x4a31ee(0xbd)][_0x4a31ee(0xbb)](_0x4a31ee(0xb6)),
      _0x4c758c[_0x4a31ee(0xbc)]('Settings', 'id'),
      _0x4c758c[_0x4a31ee(0xbe)]('Settings', [_0x4a31ee(0xb8)], {
        type: _0x4a31ee(0xb9),
        name: _0x4a31ee(0xc0)
      })
    ]);
  }
};
