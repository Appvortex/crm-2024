'use strict';
const a289_0x55a3fa = a289_0x1249;
(function (_0x446273, _0x2fc4b1) {
  const _0x1aa80c = a289_0x1249,
    _0x50bd5e = _0x446273();
  while (!![]) {
    try {
      const _0x32b6b8 =
        (parseInt(_0x1aa80c(0x1a7)) / 0x1) *
          (-parseInt(_0x1aa80c(0x1a4)) / 0x2) +
        parseInt(_0x1aa80c(0x1a3)) / 0x3 +
        parseInt(_0x1aa80c(0x196)) / 0x4 +
        (-parseInt(_0x1aa80c(0x195)) / 0x5) *
          (-parseInt(_0x1aa80c(0x198)) / 0x6) +
        -parseInt(_0x1aa80c(0x1a6)) / 0x7 +
        (parseInt(_0x1aa80c(0x199)) / 0x8) *
          (parseInt(_0x1aa80c(0x1a1)) / 0x9) +
        (parseInt(_0x1aa80c(0x19a)) / 0xa) *
          (-parseInt(_0x1aa80c(0x1a2)) / 0xb);
      if (_0x32b6b8 === _0x2fc4b1) break;
      else _0x50bd5e['push'](_0x50bd5e['shift']());
    } catch (_0x2b7c59) {
      _0x50bd5e['push'](_0x50bd5e['shift']());
    }
  }
})(a289_0x16a6, 0x3dc3e);
var __importDefault =
  (this && this[a289_0x55a3fa(0x1a8)]) ||
  function (_0x255fc0) {
    const _0x207686 = a289_0x55a3fa;
    return _0x255fc0 && _0x255fc0[_0x207686(0x1a5)]
      ? _0x255fc0
      : { default: _0x255fc0 };
  };
function a289_0x1249(_0x2fb3c4, _0x2c7c26) {
  const _0x16a63b = a289_0x16a6();
  return (
    (a289_0x1249 = function (_0x1249e9, _0x510b77) {
      _0x1249e9 = _0x1249e9 - 0x195;
      let _0x21bad8 = _0x16a63b[_0x1249e9];
      return _0x21bad8;
    }),
    a289_0x1249(_0x2fb3c4, _0x2c7c26)
  );
}
function a289_0x16a6() {
  const _0x13efa5 = [
    '434858uCakyn',
    '__esModule',
    '3300626LRcygZ',
    '1dpypGY',
    '__importDefault',
    '4645bGGGNR',
    '751424hfdaHM',
    'ERR_NO_DEF_WAPP_FOUND\x20in\x20COMPANY\x20',
    '2526KDKHqB',
    '7432XXNEOy',
    '100CZjnms',
    'CONNECTED',
    'defineProperty',
    'findOne',
    'status',
    'default',
    '../errors/AppError',
    '4545UmpdQS',
    '557040oZkIKC',
    '1200681zkWvUG'
  ];
  a289_0x16a6 = function () {
    return _0x13efa5;
  };
  return a289_0x16a6();
}
Object[a289_0x55a3fa(0x19c)](exports, a289_0x55a3fa(0x1a5), { value: !![] });
const AppError_1 = __importDefault(require(a289_0x55a3fa(0x1a0))),
  Whatsapp_1 = __importDefault(require('../models/Whatsapp')),
  GetDefaultWhatsAppByUser_1 = __importDefault(
    require('./GetDefaultWhatsAppByUser')
  ),
  GetDefaultWhatsApp = async (_0x183fc4, _0x2b80b8) => {
    const _0x182b19 = a289_0x55a3fa;
    let _0x3ccb52;
    const _0x155c6d = await Whatsapp_1[_0x182b19(0x19f)][_0x182b19(0x19d)]({
      where: { isDefault: !![], companyId: _0x183fc4 }
    });
    if (_0x155c6d?.[_0x182b19(0x19e)] === 'CONNECTED') _0x3ccb52 = _0x155c6d;
    else {
      const _0x1fd5b8 = await Whatsapp_1['default'][_0x182b19(0x19d)]({
        where: { status: 'CONNECTED', companyId: _0x183fc4 }
      });
      _0x3ccb52 = _0x1fd5b8;
    }
    if (_0x2b80b8) {
      const _0x1c309e = await (0x0,
      GetDefaultWhatsAppByUser_1[_0x182b19(0x19f)])(_0x2b80b8);
      if (_0x1c309e?.[_0x182b19(0x19e)] === _0x182b19(0x19b))
        _0x3ccb52 = _0x1c309e;
      else {
        const _0x40e5ab = await Whatsapp_1[_0x182b19(0x19f)][_0x182b19(0x19d)]({
          where: { status: _0x182b19(0x19b), companyId: _0x183fc4 }
        });
        _0x3ccb52 = _0x40e5ab;
      }
    }
    if (!_0x3ccb52)
      throw new AppError_1['default'](_0x182b19(0x197) + _0x183fc4);
    return _0x3ccb52;
  };
exports[a289_0x55a3fa(0x19f)] = GetDefaultWhatsApp;
