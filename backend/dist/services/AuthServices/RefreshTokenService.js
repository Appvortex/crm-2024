'use strict';
const a416_0x7a714e = a416_0x4a80;
(function (_0x4c9fda, _0x5a930a) {
  const _0x3fdc12 = a416_0x4a80,
    _0x4e2bf4 = _0x4c9fda();
  while (!![]) {
    try {
      const _0x182877 =
        -parseInt(_0x3fdc12(0x1d4)) / 0x1 +
        (parseInt(_0x3fdc12(0x1d0)) / 0x2) *
          (-parseInt(_0x3fdc12(0x1d3)) / 0x3) +
        (parseInt(_0x3fdc12(0x1df)) / 0x4) *
          (-parseInt(_0x3fdc12(0x1d5)) / 0x5) +
        (-parseInt(_0x3fdc12(0x1cf)) / 0x6) *
          (parseInt(_0x3fdc12(0x1db)) / 0x7) +
        (parseInt(_0x3fdc12(0x1de)) / 0x8) *
          (-parseInt(_0x3fdc12(0x1cd)) / 0x9) +
        (parseInt(_0x3fdc12(0x1dc)) / 0xa) *
          (-parseInt(_0x3fdc12(0x1dd)) / 0xb) +
        parseInt(_0x3fdc12(0x1c6)) / 0xc;
      if (_0x182877 === _0x5a930a) break;
      else _0x4e2bf4['push'](_0x4e2bf4['shift']());
    } catch (_0x2f4aa3) {
      _0x4e2bf4['push'](_0x4e2bf4['shift']());
    }
  }
})(a416_0x5063, 0xc4e76);
var __importDefault =
  (this && this[a416_0x7a714e(0x1d8)]) ||
  function (_0x3eb00d) {
    return _0x3eb00d && _0x3eb00d['__esModule']
      ? _0x3eb00d
      : { default: _0x3eb00d };
  };
Object[a416_0x7a714e(0x1d7)](exports, a416_0x7a714e(0x1cc), { value: !![] }),
  (exports[a416_0x7a714e(0x1da)] = void 0x0);
function a416_0x5063() {
  const _0x106340 = [
    'defineProperty',
    '__importDefault',
    'createRefreshToken',
    'RefreshTokenService',
    '1631uzCSfz',
    '10EvSgks',
    '330286rDemve',
    '8wmnkwc',
    '166844jbCgdy',
    'clearCookie',
    '../UserServices/ShowUserService',
    'verify',
    '51612024NwzkBc',
    'default',
    'jsonwebtoken',
    '../../config/auth',
    '../../helpers/CreateTokens',
    'tokenVersion',
    '__esModule',
    '13251555UUcOov',
    '../../errors/AppError',
    '20346VYGOYA',
    '14KMhxGW',
    'jrt',
    'ERR_SESSION_EXPIRED',
    '37671bhIMaY',
    '655240AWmzXE',
    '55mfUESb',
    'createAccessToken'
  ];
  a416_0x5063 = function () {
    return _0x106340;
  };
  return a416_0x5063();
}
function a416_0x4a80(_0x5ca1e0, _0x3e9c9e) {
  const _0x5063c1 = a416_0x5063();
  return (
    (a416_0x4a80 = function (_0x4a8094, _0x307914) {
      _0x4a8094 = _0x4a8094 - 0x1c6;
      let _0x5c25bc = _0x5063c1[_0x4a8094];
      return _0x5c25bc;
    }),
    a416_0x4a80(_0x5ca1e0, _0x3e9c9e)
  );
}
const jsonwebtoken_1 = require(a416_0x7a714e(0x1c8)),
  AppError_1 = __importDefault(require(a416_0x7a714e(0x1ce))),
  ShowUserService_1 = __importDefault(require(a416_0x7a714e(0x1e1))),
  auth_1 = __importDefault(require(a416_0x7a714e(0x1c9))),
  CreateTokens_1 = require(a416_0x7a714e(0x1ca)),
  RefreshTokenService = async (_0x22a67e, _0x35d613) => {
    const _0x4dd2df = a416_0x7a714e;
    try {
      const _0x2cc482 = (0x0, jsonwebtoken_1[_0x4dd2df(0x1e2)])(
          _0x35d613,
          auth_1['default']['refreshSecret']
        ),
        {
          id: _0x4dcfec,
          tokenVersion: _0x37d285,
          companyId: _0x50a3d9
        } = _0x2cc482,
        _0x7b84d4 = await (0x0, ShowUserService_1['default'])(
          _0x4dcfec,
          _0x50a3d9
        );
      if (_0x7b84d4[_0x4dd2df(0x1cb)] !== _0x37d285) {
        _0x22a67e[_0x4dd2df(0x1e0)](_0x4dd2df(0x1d1));
        throw new AppError_1[_0x4dd2df(0x1c7)]('ERR_SESSION_EXPIRED', 0x191);
      }
      const _0x325a29 = (0x0, CreateTokens_1[_0x4dd2df(0x1d6)])(_0x7b84d4),
        _0x57d2a2 = (0x0, CreateTokens_1[_0x4dd2df(0x1d9)])(_0x7b84d4);
      return { user: _0x7b84d4, newToken: _0x325a29, refreshToken: _0x57d2a2 };
    } catch (_0xbad5c8) {
      _0x22a67e[_0x4dd2df(0x1e0)](_0x4dd2df(0x1d1));
      throw new AppError_1[_0x4dd2df(0x1c7)](_0x4dd2df(0x1d2), 0x191);
    }
  };
exports[a416_0x7a714e(0x1da)] = RefreshTokenService;
