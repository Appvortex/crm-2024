'use strict';
const a518_0x1c9087 = a518_0x8b5f;
(function (_0xa4266a, _0x593c2d) {
  const _0x538d92 = a518_0x8b5f,
    _0x7bc3e3 = _0xa4266a();
  while (!![]) {
    try {
      const _0x2ffcb7 =
        (-parseInt(_0x538d92(0x18d)) / 0x1) *
          (-parseInt(_0x538d92(0x18b)) / 0x2) +
        -parseInt(_0x538d92(0x188)) / 0x3 +
        -parseInt(_0x538d92(0x185)) / 0x4 +
        parseInt(_0x538d92(0x180)) / 0x5 +
        parseInt(_0x538d92(0x182)) / 0x6 +
        (parseInt(_0x538d92(0x189)) / 0x7) *
          (-parseInt(_0x538d92(0x184)) / 0x8) +
        parseInt(_0x538d92(0x186)) / 0x9;
      if (_0x2ffcb7 === _0x593c2d) break;
      else _0x7bc3e3['push'](_0x7bc3e3['shift']());
    } catch (_0x271949) {
      _0x7bc3e3['push'](_0x7bc3e3['shift']());
    }
  }
})(a518_0x4d49, 0xca71f);
var __importDefault =
  (this && this[a518_0x1c9087(0x183)]) ||
  function (_0x484c6a) {
    const _0x5af749 = a518_0x1c9087;
    return _0x484c6a && _0x484c6a[_0x5af749(0x18a)]
      ? _0x484c6a
      : { default: _0x484c6a };
  };
Object[a518_0x1c9087(0x18c)](exports, a518_0x1c9087(0x18a), { value: !![] });
function a518_0x8b5f(_0x43fd2b, _0x131ce7) {
  const _0x4d492f = a518_0x4d49();
  return (
    (a518_0x8b5f = function (_0x8b5f63, _0x56ee5c) {
      _0x8b5f63 = _0x8b5f63 - 0x180;
      let _0x5a48a8 = _0x4d492f[_0x8b5f63];
      return _0x5a48a8;
    }),
    a518_0x8b5f(_0x43fd2b, _0x131ce7)
  );
}
function a518_0x4d49() {
  const _0x3de921 = [
    'default',
    '3450675ncZtvE',
    '796453otyeVZ',
    '__esModule',
    '210668KRtdYl',
    'defineProperty',
    '12JkExRM',
    'ASC',
    '5273825ABnWRy',
    'findAll',
    '613614UalZoq',
    '__importDefault',
    '104SCXnzK',
    '2838912oHbUQQ',
    '15725277AupcQX'
  ];
  a518_0x4d49 = function () {
    return _0x3de921;
  };
  return a518_0x4d49();
}
const Invoices_1 = __importDefault(require('../../models/Invoices')),
  FindAllPlanService = async _0x29a76a => {
    const _0x375f8e = a518_0x1c9087,
      _0x596f96 = await Invoices_1['default'][_0x375f8e(0x181)]({
        where: { companyId: _0x29a76a },
        order: [['id', _0x375f8e(0x18e)]]
      });
    return _0x596f96;
  };
exports[a518_0x1c9087(0x187)] = FindAllPlanService;
