'use strict';
function a311_0x2c26(_0x30a00d, _0x15717f) {
  const _0x3ccc00 = a311_0x3ccc();
  return (
    (a311_0x2c26 = function (_0x2c2677, _0x3000d8) {
      _0x2c2677 = _0x2c2677 - 0x155;
      let _0x4f8787 = _0x3ccc00[_0x2c2677];
      return _0x4f8787;
    }),
    a311_0x2c26(_0x30a00d, _0x15717f)
  );
}
const a311_0x4f3b96 = a311_0x2c26;
(function (_0x29a72f, _0x50ab0c) {
  const _0x29f1da = a311_0x2c26,
    _0x3e7f3f = _0x29a72f();
  while (!![]) {
    try {
      const _0xaade2 =
        -parseInt(_0x29f1da(0x156)) / 0x1 +
        -parseInt(_0x29f1da(0x163)) / 0x2 +
        (parseInt(_0x29f1da(0x15b)) / 0x3) *
          (-parseInt(_0x29f1da(0x158)) / 0x4) +
        (parseInt(_0x29f1da(0x15c)) / 0x5) *
          (-parseInt(_0x29f1da(0x155)) / 0x6) +
        -parseInt(_0x29f1da(0x15d)) / 0x7 +
        -parseInt(_0x29f1da(0x164)) / 0x8 +
        parseInt(_0x29f1da(0x165)) / 0x9;
      if (_0xaade2 === _0x50ab0c) break;
      else _0x3e7f3f['push'](_0x3e7f3f['shift']());
    } catch (_0x196885) {
      _0x3e7f3f['push'](_0x3e7f3f['shift']());
    }
  }
})(a311_0x3ccc, 0x60d68);
var __importDefault =
  (this && this[a311_0x4f3b96(0x15e)]) ||
  function (_0x3139d7) {
    const _0x25a39 = a311_0x4f3b96;
    return _0x3139d7 && _0x3139d7[_0x25a39(0x157)]
      ? _0x3139d7
      : { default: _0x3139d7 };
  };
Object[a311_0x4f3b96(0x167)](exports, a311_0x4f3b96(0x157), { value: !![] });
const AppError_1 = __importDefault(require(a311_0x4f3b96(0x161))),
  envTokenAuth = (_0x4c46f0, _0x50df2f, _0x3e86e4) => {
    const _0x1b2607 = a311_0x4f3b96;
    try {
      const { token: _0x50fda5 } = _0x4c46f0[_0x1b2607(0x166)],
        { token: _0x44b821 } = _0x4c46f0[_0x1b2607(0x162)];
      if (_0x44b821 === process['env']['ENV_TOKEN']) return _0x3e86e4();
      if (_0x50fda5 === process[_0x1b2607(0x15f)][_0x1b2607(0x159)])
        return _0x3e86e4();
    } catch (_0x488763) {
      console[_0x1b2607(0x160)](_0x488763);
    }
    throw new AppError_1[_0x1b2607(0x15a)]('Token\x20inválido', 0x193);
  };
exports[a311_0x4f3b96(0x15a)] = envTokenAuth;
function a311_0x3ccc() {
  const _0x15ac4f = [
    'query',
    '1151742AStQgV',
    '3426944EgNYVR',
    '29161683zfTZOZ',
    'body',
    'defineProperty',
    '6CJCpPh',
    '170641BnpmdS',
    '__esModule',
    '1566076epwOVP',
    'ENV_TOKEN',
    'default',
    '6YHpchi',
    '3149075inZLTS',
    '1790642jxcpwV',
    '__importDefault',
    'env',
    'log',
    '../errors/AppError'
  ];
  a311_0x3ccc = function () {
    return _0x15ac4f;
  };
  return a311_0x3ccc();
}
