'use strict';
const a59_0x331ba5 = a59_0x8646;
(function (_0x4033db, _0x81ec0a) {
  const _0x204155 = a59_0x8646,
    _0x1b632e = _0x4033db();
  while (!![]) {
    try {
      const _0x39b167 =
        (parseInt(_0x204155(0x187)) / 0x1) *
          (parseInt(_0x204155(0x18b)) / 0x2) +
        (parseInt(_0x204155(0x191)) / 0x3) *
          (-parseInt(_0x204155(0x197)) / 0x4) +
        -parseInt(_0x204155(0x188)) / 0x5 +
        (parseInt(_0x204155(0x193)) / 0x6) *
          (-parseInt(_0x204155(0x19a)) / 0x7) +
        -parseInt(_0x204155(0x18a)) / 0x8 +
        (parseInt(_0x204155(0x18c)) / 0x9) *
          (parseInt(_0x204155(0x18e)) / 0xa) +
        parseInt(_0x204155(0x189)) / 0xb;
      if (_0x39b167 === _0x81ec0a) break;
      else _0x1b632e['push'](_0x1b632e['shift']());
    } catch (_0x594edd) {
      _0x1b632e['push'](_0x1b632e['shift']());
    }
  }
})(a59_0x4151, 0x55e19);
Object[a59_0x331ba5(0x195)](exports, a59_0x331ba5(0x198), { value: !![] });
function a59_0x4151() {
  const _0x20c511 = [
    '3645312mBKRdg',
    '1108430AilAVk',
    '222174chWnxy',
    'exports',
    '70kRLXvb',
    'SET\x20NULL',
    'Users',
    '69NtkGag',
    'removeColumn',
    '1120440ItnbZK',
    'addColumn',
    'defineProperty',
    'Messages',
    '29996cjMGlH',
    '__esModule',
    'DataTypes',
    '7dogBDT',
    'sequelize',
    '1hEMjFi',
    '3361785AnaEwk',
    '12231890ASkdmO'
  ];
  a59_0x4151 = function () {
    return _0x20c511;
  };
  return a59_0x4151();
}
function a59_0x8646(_0x828879, _0x13d34e) {
  const _0x4151b5 = a59_0x4151();
  return (
    (a59_0x8646 = function (_0x864653, _0x3e2ffe) {
      _0x864653 = _0x864653 - 0x187;
      let _0x55dfc5 = _0x4151b5[_0x864653];
      return _0x55dfc5;
    }),
    a59_0x8646(_0x828879, _0x13d34e)
  );
}
const sequelize_1 = require(a59_0x331ba5(0x19b));
module[a59_0x331ba5(0x18d)] = {
  up: _0x61c1c1 => {
    const _0xb508a7 = a59_0x331ba5;
    return _0x61c1c1[_0xb508a7(0x192)](_0xb508a7(0x196), 'userId');
  },
  down: _0x3ab141 => {
    const _0x453ae8 = a59_0x331ba5;
    return _0x3ab141[_0x453ae8(0x194)](_0x453ae8(0x196), 'userId', {
      type: sequelize_1[_0x453ae8(0x199)]['INTEGER'],
      references: { model: _0x453ae8(0x190), key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: _0x453ae8(0x18f)
    });
  }
};
