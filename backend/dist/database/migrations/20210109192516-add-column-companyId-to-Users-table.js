'use strict';
function a85_0xf010() {
  const _0x13d7fd = [
    '2759624UFPJXc',
    'CASCADE',
    '2798365AyUzVz',
    '245545JhbPKw',
    'removeColumn',
    '30631698TwIcHn',
    '3086211KlojJt',
    'Companies',
    'Users',
    '1596QrrsGC',
    'sequelize',
    '1204308RZVNxe',
    'defineProperty',
    'INTEGER',
    '2uBAaFp',
    'companyId',
    '25808hFPOBX',
    'exports'
  ];
  a85_0xf010 = function () {
    return _0x13d7fd;
  };
  return a85_0xf010();
}
const a85_0x2f00f3 = a85_0x37a8;
(function (_0x4f63fd, _0x2315b1) {
  const _0x3034a0 = a85_0x37a8,
    _0x43e016 = _0x4f63fd();
  while (!![]) {
    try {
      const _0x59c756 =
        (-parseInt(_0x3034a0(0x1d3)) / 0x1) *
          (-parseInt(_0x3034a0(0x1cc)) / 0x2) +
        -parseInt(_0x3034a0(0x1d6)) / 0x3 +
        -parseInt(_0x3034a0(0x1d0)) / 0x4 +
        -parseInt(_0x3034a0(0x1d2)) / 0x5 +
        parseInt(_0x3034a0(0x1c9)) / 0x6 +
        (parseInt(_0x3034a0(0x1c7)) / 0x7) *
          (-parseInt(_0x3034a0(0x1ce)) / 0x8) +
        parseInt(_0x3034a0(0x1d5)) / 0x9;
      if (_0x59c756 === _0x2315b1) break;
      else _0x43e016['push'](_0x43e016['shift']());
    } catch (_0x47ecdd) {
      _0x43e016['push'](_0x43e016['shift']());
    }
  }
})(a85_0xf010, 0xcc165);
function a85_0x37a8(_0x16b5b5, _0x375f00) {
  const _0xf01007 = a85_0xf010();
  return (
    (a85_0x37a8 = function (_0x37a8e8, _0x556048) {
      _0x37a8e8 = _0x37a8e8 - 0x1c6;
      let _0x12e046 = _0xf01007[_0x37a8e8];
      return _0x12e046;
    }),
    a85_0x37a8(_0x16b5b5, _0x375f00)
  );
}
Object[a85_0x2f00f3(0x1ca)](exports, '__esModule', { value: !![] });
const sequelize_1 = require(a85_0x2f00f3(0x1c8));
module[a85_0x2f00f3(0x1cf)] = {
  up: _0x2f77ee => {
    const _0x3a038b = a85_0x2f00f3;
    return _0x2f77ee['addColumn']('Users', _0x3a038b(0x1cd), {
      type: sequelize_1['DataTypes'][_0x3a038b(0x1cb)],
      references: { model: _0x3a038b(0x1d7), key: 'id' },
      onUpdate: _0x3a038b(0x1d1),
      onDelete: 'SET\x20NULL'
    });
  },
  down: _0x5e0e50 => {
    const _0x38f34e = a85_0x2f00f3;
    return _0x5e0e50[_0x38f34e(0x1d4)](_0x38f34e(0x1c6), 'companyId');
  }
};
