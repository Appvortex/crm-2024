'use strict';
const a314_0x55f419 = a314_0x1b40;
function a314_0x262d() {
  const _0x1ad2d0 = [
    '1229772dtFBMU',
    '1321677EbgWpj',
    'token',
    '6168612gXomOX',
    'defineProperty',
    '../errors/AppError',
    '328mIYgzq',
    '__importDefault',
    'Invalid\x20token.\x20We\x27ll\x20try\x20to\x20assign\x20a\x20new\x20one\x20on\x20next\x20request',
    '__esModule',
    '3214275fyAvOB',
    'ERR_SESSION_EXPIRED',
    '10NeoxRh',
    '470852SoTZRr',
    'default',
    'split',
    '110700otvFiK',
    '2186488BZdBzJ',
    'authorization'
  ];
  a314_0x262d = function () {
    return _0x1ad2d0;
  };
  return a314_0x262d();
}
(function (_0x527a7d, _0x442e2a) {
  const _0x4921ba = a314_0x1b40,
    _0x687499 = _0x527a7d();
  while (!![]) {
    try {
      const _0x4b879c =
        -parseInt(_0x4921ba(0x1b5)) / 0x1 +
        -parseInt(_0x4921ba(0x1a8)) / 0x2 +
        parseInt(_0x4921ba(0x1b2)) / 0x3 +
        (-parseInt(_0x4921ba(0x1a6)) / 0x4) *
          (parseInt(_0x4921ba(0x1b4)) / 0x5) +
        parseInt(_0x4921ba(0x1ab)) / 0x6 +
        parseInt(_0x4921ba(0x1a9)) / 0x7 +
        (-parseInt(_0x4921ba(0x1ae)) / 0x8) *
          (-parseInt(_0x4921ba(0x1a5)) / 0x9);
      if (_0x4b879c === _0x442e2a) break;
      else _0x687499['push'](_0x687499['shift']());
    } catch (_0x4f0f49) {
      _0x687499['push'](_0x687499['shift']());
    }
  }
})(a314_0x262d, 0x95d18);
function a314_0x1b40(_0x32a289, _0x858dd9) {
  const _0x262d1e = a314_0x262d();
  return (
    (a314_0x1b40 = function (_0x1b40e2, _0x12d21f) {
      _0x1b40e2 = _0x1b40e2 - 0x1a5;
      let _0x4e9459 = _0x262d1e[_0x1b40e2];
      return _0x4e9459;
    }),
    a314_0x1b40(_0x32a289, _0x858dd9)
  );
}
var __importDefault =
  (this && this[a314_0x55f419(0x1af)]) ||
  function (_0x38a774) {
    const _0x4085bb = a314_0x55f419;
    return _0x38a774 && _0x38a774[_0x4085bb(0x1b1)]
      ? _0x38a774
      : { default: _0x38a774 };
  };
Object[a314_0x55f419(0x1ac)](exports, a314_0x55f419(0x1b1), { value: !![] });
const AppError_1 = __importDefault(require(a314_0x55f419(0x1ad))),
  Whatsapp_1 = __importDefault(require('../models/Whatsapp')),
  isAuthApi = async (_0x3b8d3c, _0x4ff918, _0x4d9f77) => {
    const _0x1ea4b0 = a314_0x55f419,
      _0x16c3e0 = _0x3b8d3c['headers'][_0x1ea4b0(0x1a7)];
    if (!_0x16c3e0) throw new AppError_1['default'](_0x1ea4b0(0x1b3), 0x191);
    const [, _0x482aa9] = _0x16c3e0[_0x1ea4b0(0x1b7)]('\x20');
    try {
      const _0x4b5e5b = await Whatsapp_1[_0x1ea4b0(0x1b6)]['findOne']({
          where: { token: _0x482aa9 }
        }),
        _0x3aafd0 = _0x4b5e5b?.[_0x1ea4b0(0x1aa)];
      if (!_0x3aafd0)
        throw new AppError_1[_0x1ea4b0(0x1b6)]('ERR_SESSION_EXPIRED', 0x191);
      if (_0x3aafd0 !== _0x482aa9)
        throw new AppError_1['default']('ERR_SESSION_EXPIRED', 0x191);
    } catch (_0x91bd5e) {
      throw new AppError_1[_0x1ea4b0(0x1b6)](_0x1ea4b0(0x1b0), 0x193);
    }
    return _0x4d9f77();
  };
exports[a314_0x55f419(0x1b6)] = isAuthApi;
