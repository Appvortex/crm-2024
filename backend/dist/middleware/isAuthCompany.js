'use strict';
const a313_0x172f03 = a313_0x3614;
(function (_0x2c2025, _0x44d1c8) {
  const _0x18ce15 = a313_0x3614,
    _0x7f82e = _0x2c2025();
  while (!![]) {
    try {
      const _0x45a400 =
        -parseInt(_0x18ce15(0x155)) / 0x1 +
        (parseInt(_0x18ce15(0x158)) / 0x2) *
          (-parseInt(_0x18ce15(0x15a)) / 0x3) +
        parseInt(_0x18ce15(0x151)) / 0x4 +
        (-parseInt(_0x18ce15(0x160)) / 0x5) *
          (-parseInt(_0x18ce15(0x164)) / 0x6) +
        -parseInt(_0x18ce15(0x162)) / 0x7 +
        parseInt(_0x18ce15(0x15f)) / 0x8 +
        parseInt(_0x18ce15(0x15e)) / 0x9;
      if (_0x45a400 === _0x44d1c8) break;
      else _0x7f82e['push'](_0x7f82e['shift']());
    } catch (_0x53d299) {
      _0x7f82e['push'](_0x7f82e['shift']());
    }
  }
})(a313_0x4b8e, 0x4f3a9);
var __importDefault =
  (this && this[a313_0x172f03(0x152)]) ||
  function (_0x431341) {
    return _0x431341 && _0x431341['__esModule']
      ? _0x431341
      : { default: _0x431341 };
  };
function a313_0x4b8e() {
  const _0x137850 = [
    '495568GmOXSL',
    '__importDefault',
    'ERR_SESSION_EXPIRED',
    'headers',
    '237408tblHnZ',
    'authorization',
    'defineProperty',
    '354CZuhch',
    '../errors/AppError',
    '5490jXEXIv',
    '__esModule',
    'Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request',
    'default',
    '9059742QJRWjE',
    '2884616WjKpcd',
    '5giBPeL',
    'COMPANY_TOKEN',
    '4503849tufRKO',
    'split',
    '228834iUfgqg'
  ];
  a313_0x4b8e = function () {
    return _0x137850;
  };
  return a313_0x4b8e();
}
Object[a313_0x172f03(0x157)](exports, a313_0x172f03(0x15b), { value: !![] });
const AppError_1 = __importDefault(require(a313_0x172f03(0x159))),
  isAuthCompany = async (_0x2c5c2b, _0x4b3604, _0x3cc773) => {
    const _0x174b8d = a313_0x172f03,
      _0x258f37 = _0x2c5c2b[_0x174b8d(0x154)][_0x174b8d(0x156)];
    if (!_0x258f37)
      throw new AppError_1[_0x174b8d(0x15d)](_0x174b8d(0x153), 0x191);
    const [, _0xdacdae] = _0x258f37[_0x174b8d(0x163)]('\x20');
    try {
      const _0x5a6cf9 = process['env'][_0x174b8d(0x161)];
      if (!_0x5a6cf9)
        throw new AppError_1[_0x174b8d(0x15d)]('ERR_SESSION_EXPIRED', 0x191);
      if (_0x5a6cf9 !== _0xdacdae)
        throw new AppError_1[_0x174b8d(0x15d)](_0x174b8d(0x153), 0x191);
    } catch (_0x4ff6a1) {
      throw new AppError_1[_0x174b8d(0x15d)](_0x174b8d(0x15c), 0x193);
    }
    return _0x3cc773();
  };
function a313_0x3614(_0x2981e9, _0xdb86a) {
  const _0x4b8e54 = a313_0x4b8e();
  return (
    (a313_0x3614 = function (_0x361465, _0x5c47f0) {
      _0x361465 = _0x361465 - 0x151;
      let _0x4e6def = _0x4b8e54[_0x361465];
      return _0x4e6def;
    }),
    a313_0x3614(_0x2981e9, _0xdb86a)
  );
}
exports[a313_0x172f03(0x15d)] = isAuthCompany;
