'use strict';
function a190_0x29f3() {
  const _0xbb18e4 = [
    'defineProperty',
    'Users',
    'sequelize',
    'SET\x20NULL',
    'DataTypes',
    '2383970ZylGAD',
    'addColumn',
    '__esModule',
    'whatsappId',
    '150lCcvOW',
    '468RtTnBS',
    '144297kfuQZE',
    'CASCADE',
    '468276uvmVtp',
    'exports',
    '2019280IZLfOW',
    '2313000vQowmT',
    'Whatsapps',
    '33866ZqMCiR',
    '40BRdczt',
    '910UCRxLd',
    '33VEnmQJ'
  ];
  a190_0x29f3 = function () {
    return _0xbb18e4;
  };
  return a190_0x29f3();
}
const a190_0x50d54b = a190_0x4681;
(function (_0x13748c, _0x1246ea) {
  const _0x5e1048 = a190_0x4681,
    _0x3a2144 = _0x13748c();
  while (!![]) {
    try {
      const _0x483efb =
        parseInt(_0x5e1048(0x143)) / 0x1 +
        (parseInt(_0x5e1048(0x134)) / 0x2) *
          (parseInt(_0x5e1048(0x140)) / 0x3) +
        -parseInt(_0x5e1048(0x146)) / 0x4 +
        -parseInt(_0x5e1048(0x145)) / 0x5 +
        (-parseInt(_0x5e1048(0x13f)) / 0x6) *
          (-parseInt(_0x5e1048(0x148)) / 0x7) +
        (-parseInt(_0x5e1048(0x133)) / 0x8) *
          (parseInt(_0x5e1048(0x141)) / 0x9) +
        (parseInt(_0x5e1048(0x13b)) / 0xa) * (parseInt(_0x5e1048(0x135)) / 0xb);
      if (_0x483efb === _0x1246ea) break;
      else _0x3a2144['push'](_0x3a2144['shift']());
    } catch (_0x4e24c9) {
      _0x3a2144['push'](_0x3a2144['shift']());
    }
  }
})(a190_0x29f3, 0x4c726);
Object[a190_0x50d54b(0x136)](exports, a190_0x50d54b(0x13d), { value: !![] });
const sequelize_1 = require(a190_0x50d54b(0x138));
function a190_0x4681(_0x2fc47b, _0x332557) {
  const _0x29f3be = a190_0x29f3();
  return (
    (a190_0x4681 = function (_0x4681b6, _0x24254b) {
      _0x4681b6 = _0x4681b6 - 0x133;
      let _0x5e7e45 = _0x29f3be[_0x4681b6];
      return _0x5e7e45;
    }),
    a190_0x4681(_0x2fc47b, _0x332557)
  );
}
module[a190_0x50d54b(0x144)] = {
  up: _0x42302f => {
    const _0x24212e = a190_0x50d54b;
    return _0x42302f[_0x24212e(0x13c)]('Users', _0x24212e(0x13e), {
      type: sequelize_1[_0x24212e(0x13a)]['INTEGER'],
      references: { model: _0x24212e(0x147), key: 'id' },
      onUpdate: _0x24212e(0x142),
      onDelete: _0x24212e(0x139),
      allowNull: !![]
    });
  },
  down: _0x47b1e1 => {
    const _0x4041cc = a190_0x50d54b;
    return _0x47b1e1['removeColumn'](_0x4041cc(0x137), _0x4041cc(0x13e));
  }
};
