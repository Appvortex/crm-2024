'use strict';
const a415_0x14f9b2 = a415_0x1d90;
(function (_0x12f6cb, _0x54d368) {
  const _0x487a60 = a415_0x1d90,
    _0x2b2100 = _0x12f6cb();
  while (!![]) {
    try {
      const _0x4fad03 =
        -parseInt(_0x487a60(0x1a0)) / 0x1 +
        -parseInt(_0x487a60(0x1a6)) / 0x2 +
        parseInt(_0x487a60(0x1aa)) / 0x3 +
        (-parseInt(_0x487a60(0x1a1)) / 0x4) *
          (parseInt(_0x487a60(0x19c)) / 0x5) +
        -parseInt(_0x487a60(0x19d)) / 0x6 +
        -parseInt(_0x487a60(0x1a8)) / 0x7 +
        parseInt(_0x487a60(0x1a7)) / 0x8;
      if (_0x4fad03 === _0x54d368) break;
      else _0x2b2100['push'](_0x2b2100['shift']());
    } catch (_0x289a45) {
      _0x2b2100['push'](_0x2b2100['shift']());
    }
  }
})(a415_0x195a, 0x5ac1d);
var __importDefault =
  (this && this[a415_0x14f9b2(0x1a3)]) ||
  function (_0x2ed077) {
    const _0x34755d = a415_0x14f9b2;
    return _0x2ed077 && _0x2ed077[_0x34755d(0x1a4)]
      ? _0x2ed077
      : { default: _0x2ed077 };
  };
function a415_0x1d90(_0x354260, _0x5005c4) {
  const _0x195a08 = a415_0x195a();
  return (
    (a415_0x1d90 = function (_0x1d904b, _0x23850d) {
      _0x1d904b = _0x1d904b - 0x19b;
      let _0x100aac = _0x195a08[_0x1d904b];
      return _0x100aac;
    }),
    a415_0x1d90(_0x354260, _0x5005c4)
  );
}
Object[a415_0x14f9b2(0x1a2)](exports, '__esModule', { value: !![] });
const jsonwebtoken_1 = require(a415_0x14f9b2(0x1a9)),
  ShowUserService_1 = __importDefault(
    require('../UserServices/ShowUserService')
  ),
  auth_1 = __importDefault(require(a415_0x14f9b2(0x19f)));
async function FindUserFromToken(_0x37cada) {
  const _0x1fcd38 = a415_0x14f9b2,
    _0x3e8cd6 = (0x0, jsonwebtoken_1[_0x1fcd38(0x1a5)])(
      _0x37cada,
      auth_1[_0x1fcd38(0x19e)][_0x1fcd38(0x19b)]
    ),
    { id: _0x406203, companyId: _0x327171 } = _0x3e8cd6,
    _0x12192c = await (0x0, ShowUserService_1[_0x1fcd38(0x19e)])(
      _0x406203,
      _0x327171
    );
  return _0x12192c;
}
exports['default'] = FindUserFromToken;
function a415_0x195a() {
  const _0x15d059 = [
    'refreshSecret',
    '205930UkFnFQ',
    '3066888ViJtpd',
    'default',
    '../../config/auth',
    '701288PBxHgV',
    '40FLjLmt',
    'defineProperty',
    '__importDefault',
    '__esModule',
    'verify',
    '364552UWAzbg',
    '16395560BYmtyB',
    '1325240BDupMM',
    'jsonwebtoken',
    '954564vxcsiF'
  ];
  a415_0x195a = function () {
    return _0x15d059;
  };
  return a415_0x195a();
}
