'use strict';
function a440_0x4b5c(_0x4ec628, _0x3967fe) {
  const _0xad5846 = a440_0xad58();
  return (
    (a440_0x4b5c = function (_0x4b5c0c, _0x5a88a0) {
      _0x4b5c0c = _0x4b5c0c - 0x1d7;
      let _0x4b0d34 = _0xad5846[_0x4b5c0c];
      return _0x4b0d34;
    }),
    a440_0x4b5c(_0x4ec628, _0x3967fe)
  );
}
function a440_0xad58() {
  const _0x5cf8b9 = [
    'defineProperty',
    '../../errors/AppError',
    '2410932OueHXz',
    '__esModule',
    '1377125evyuUb',
    'ERR_NO_CHAT_FOUND',
    '11690290eiJSIP',
    '6EPByur',
    '519351HSaWJy',
    '__importDefault',
    'findOne',
    '419346UIYqeq',
    'default',
    '../../models/Chat',
    '74310fCHRNC',
    '4427600tTTYra',
    '35SLtxgu',
    'destroy',
    '9zWxoKS'
  ];
  a440_0xad58 = function () {
    return _0x5cf8b9;
  };
  return a440_0xad58();
}
const a440_0x2ad633 = a440_0x4b5c;
(function (_0x1af436, _0x23e192) {
  const _0x41d360 = a440_0x4b5c,
    _0x333154 = _0x1af436();
  while (!![]) {
    try {
      const _0x315903 =
        -parseInt(_0x41d360(0x1e8)) / 0x1 +
        (-parseInt(_0x41d360(0x1e7)) / 0x2) *
          (parseInt(_0x41d360(0x1d8)) / 0x3) +
        -parseInt(_0x41d360(0x1e2)) / 0x4 +
        parseInt(_0x41d360(0x1e4)) / 0x5 +
        (parseInt(_0x41d360(0x1db)) / 0x6) *
          (-parseInt(_0x41d360(0x1dd)) / 0x7) +
        parseInt(_0x41d360(0x1dc)) / 0x8 +
        (parseInt(_0x41d360(0x1df)) / 0x9) * (parseInt(_0x41d360(0x1e6)) / 0xa);
      if (_0x315903 === _0x23e192) break;
      else _0x333154['push'](_0x333154['shift']());
    } catch (_0x562288) {
      _0x333154['push'](_0x333154['shift']());
    }
  }
})(a440_0xad58, 0x60535);
var __importDefault =
  (this && this[a440_0x2ad633(0x1e9)]) ||
  function (_0x2cead5) {
    const _0x4ef935 = a440_0x2ad633;
    return _0x2cead5 && _0x2cead5[_0x4ef935(0x1e3)]
      ? _0x2cead5
      : { default: _0x2cead5 };
  };
Object[a440_0x2ad633(0x1e0)](exports, '__esModule', { value: !![] });
const Chat_1 = __importDefault(require(a440_0x2ad633(0x1da))),
  AppError_1 = __importDefault(require(a440_0x2ad633(0x1e1))),
  DeleteService = async _0x5777e1 => {
    const _0x254dc9 = a440_0x2ad633,
      _0x402b4a = await Chat_1[_0x254dc9(0x1d9)][_0x254dc9(0x1d7)]({
        where: { id: _0x5777e1 }
      });
    if (!_0x402b4a)
      throw new AppError_1[_0x254dc9(0x1d9)](_0x254dc9(0x1e5), 0x194);
    await _0x402b4a[_0x254dc9(0x1de)]();
  };
exports[a440_0x2ad633(0x1d9)] = DeleteService;
