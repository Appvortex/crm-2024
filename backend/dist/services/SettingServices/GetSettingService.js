'use strict';
const a590_0xcf140b = a590_0x4587;
function a590_0x4587(_0x46fbda, _0xcac400) {
  const _0x5c43db = a590_0x5c43();
  return (
    (a590_0x4587 = function (_0x458785, _0x255e2b) {
      _0x458785 = _0x458785 - 0x12e;
      let _0x42a317 = _0x5c43db[_0x458785];
      return _0x42a317;
    }),
    a590_0x4587(_0x46fbda, _0xcac400)
  );
}
function a590_0x5c43() {
  const _0x394a8c = [
    '8WNaOeh',
    '__esModule',
    '1700934olHjYH',
    '713877RQxcvZ',
    '2227508QAVrED',
    '3886939APxbrV',
    'default',
    '__importDefault',
    '157332DaTEVM',
    '19MHxYve',
    'defineProperty',
    'findOne',
    '../../models/Setting',
    '30366567TTDSsj',
    '8043925MArKzQ'
  ];
  a590_0x5c43 = function () {
    return _0x394a8c;
  };
  return a590_0x5c43();
}
(function (_0x4ecc85, _0x47a95d) {
  const _0x164de3 = a590_0x4587,
    _0x505f27 = _0x4ecc85();
  while (!![]) {
    try {
      const _0x7e2f90 =
        (-parseInt(_0x164de3(0x12f)) / 0x1) *
          (-parseInt(_0x164de3(0x12e)) / 0x2) +
        -parseInt(_0x164de3(0x138)) / 0x3 +
        parseInt(_0x164de3(0x139)) / 0x4 +
        parseInt(_0x164de3(0x134)) / 0x5 +
        parseInt(_0x164de3(0x137)) / 0x6 +
        (parseInt(_0x164de3(0x13a)) / 0x7) *
          (parseInt(_0x164de3(0x135)) / 0x8) +
        -parseInt(_0x164de3(0x133)) / 0x9;
      if (_0x7e2f90 === _0x47a95d) break;
      else _0x505f27['push'](_0x505f27['shift']());
    } catch (_0x2b2f21) {
      _0x505f27['push'](_0x505f27['shift']());
    }
  }
})(a590_0x5c43, 0xd8914);
var __importDefault =
  (this && this[a590_0xcf140b(0x13c)]) ||
  function (_0x3c85e3) {
    const _0x4d000c = a590_0xcf140b;
    return _0x3c85e3 && _0x3c85e3[_0x4d000c(0x136)]
      ? _0x3c85e3
      : { default: _0x3c85e3 };
  };
Object[a590_0xcf140b(0x130)](exports, a590_0xcf140b(0x136), { value: !![] });
const Setting_1 = __importDefault(require(a590_0xcf140b(0x132))),
  GetSettingService = async ({ key: _0x28f67f }) => {
    const _0x4d7af = a590_0xcf140b,
      _0x4df4d3 = await Setting_1[_0x4d7af(0x13b)][_0x4d7af(0x131)]({
        where: { key: _0x28f67f }
      });
    if (_0x4df4d3 === null) return 'enabled';
    return _0x4df4d3;
  };
exports[a590_0xcf140b(0x13b)] = GetSettingService;
