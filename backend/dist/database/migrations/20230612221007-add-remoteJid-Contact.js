'use strict';
const a189_0x169ae6 = a189_0x3d78;
function a189_0x3d78(_0x9b67b4, _0x546d3b) {
  const _0x356cf5 = a189_0x356c();
  return (
    (a189_0x3d78 = function (_0x3d78f0, _0x2a4549) {
      _0x3d78f0 = _0x3d78f0 - 0x107;
      let _0x4e2179 = _0x356cf5[_0x3d78f0];
      return _0x4e2179;
    }),
    a189_0x3d78(_0x9b67b4, _0x546d3b)
  );
}
function a189_0x356c() {
  const _0x358084 = [
    'removeColumn',
    '281493DtFGSP',
    '194214UMDlfI',
    'addColumn',
    '1348543FjSdci',
    '1012708swcWhw',
    '1705120iUZrMB',
    '276170GCBvAr',
    '1104860qeJNTt',
    'remoteJid',
    'Contacts',
    'sequelize',
    '6PZvDeQ'
  ];
  a189_0x356c = function () {
    return _0x358084;
  };
  return a189_0x356c();
}
(function (_0x460774, _0x3994b2) {
  const _0x236b14 = a189_0x3d78,
    _0x56f8ba = _0x460774();
  while (!![]) {
    try {
      const _0xc0af90 =
        parseInt(_0x236b14(0x109)) / 0x1 +
        (parseInt(_0x236b14(0x10f)) / 0x2) *
          (parseInt(_0x236b14(0x107)) / 0x3) +
        -parseInt(_0x236b14(0x10d)) / 0x4 +
        parseInt(_0x236b14(0x110)) / 0x5 +
        parseInt(_0x236b14(0x10a)) / 0x6 +
        -parseInt(_0x236b14(0x10c)) / 0x7 +
        -parseInt(_0x236b14(0x10e)) / 0x8;
      if (_0xc0af90 === _0x3994b2) break;
      else _0x56f8ba['push'](_0x56f8ba['shift']());
    } catch (_0x3c8947) {
      _0x56f8ba['push'](_0x56f8ba['shift']());
    }
  }
})(a189_0x356c, 0x251e6);
Object['defineProperty'](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a189_0x169ae6(0x113));
module['exports'] = {
  up: _0x14018f => {
    const _0x5b4fb4 = a189_0x169ae6;
    return _0x14018f[_0x5b4fb4(0x10b)](_0x5b4fb4(0x112), 'remoteJid', {
      type: sequelize_1['DataTypes']['STRING'],
      defaultValue: null,
      allowNull: !![]
    });
  },
  down: _0x5c2346 => {
    const _0x4cba9b = a189_0x169ae6;
    return _0x5c2346[_0x4cba9b(0x108)](_0x4cba9b(0x112), _0x4cba9b(0x111));
  }
};
