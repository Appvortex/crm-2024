'use strict';
const a32_0x1f107d = a32_0x478d;
(function (_0x45c04b, _0x3123f2) {
  const _0x47ffe1 = a32_0x478d,
    _0x2e26c8 = _0x45c04b();
  while (!![]) {
    try {
      const _0x4e38e3 =
        (parseInt(_0x47ffe1(0x13b)) / 0x1) *
          (parseInt(_0x47ffe1(0x13c)) / 0x2) +
        (parseInt(_0x47ffe1(0x132)) / 0x3) *
          (parseInt(_0x47ffe1(0x130)) / 0x4) +
        -parseInt(_0x47ffe1(0x137)) / 0x5 +
        -parseInt(_0x47ffe1(0x124)) / 0x6 +
        parseInt(_0x47ffe1(0x12a)) / 0x7 +
        (parseInt(_0x47ffe1(0x12c)) / 0x8) *
          (-parseInt(_0x47ffe1(0x133)) / 0x9) +
        parseInt(_0x47ffe1(0x138)) / 0xa;
      if (_0x4e38e3 === _0x3123f2) break;
      else _0x2e26c8['push'](_0x2e26c8['shift']());
    } catch (_0x4d3cdf) {
      _0x2e26c8['push'](_0x2e26c8['shift']());
    }
  }
})(a32_0x48ba, 0x7692f);
function a32_0x48ba() {
  const _0x321c68 = [
    'store',
    'company-',
    'send',
    'RefreshTokenService',
    'update',
    '2708125eSZqvU',
    '__esModule',
    '3736HQOPFU',
    'remove',
    'body',
    'user',
    '108liPjqz',
    'jrt',
    '106083TbaNET',
    '18684VmmOfg',
    '../services/AuthServices/FindUserFromToken',
    'companyId',
    '../models/User',
    '2783480UAivwX',
    '6961660icDnSI',
    'json',
    'default',
    '34EtnfNL',
    '47032vPgvKn',
    '../errors/AppError',
    'emit',
    'email',
    'cookies',
    'defineProperty',
    '../libs/socket',
    'SendRefreshToken',
    '../helpers/SendRefreshToken',
    '4952790WuQudP'
  ];
  a32_0x48ba = function () {
    return _0x321c68;
  };
  return a32_0x48ba();
}
function a32_0x478d(_0x394f2b, _0x49b150) {
  const _0x48ba2b = a32_0x48ba();
  return (
    (a32_0x478d = function (_0x478dca, _0x56927a) {
      _0x478dca = _0x478dca - 0x123;
      let _0x27336c = _0x48ba2b[_0x478dca];
      return _0x27336c;
    }),
    a32_0x478d(_0x394f2b, _0x49b150)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x352b77) {
    const _0x579c43 = a32_0x478d;
    return _0x352b77 && _0x352b77[_0x579c43(0x12b)]
      ? _0x352b77
      : { default: _0x352b77 };
  };
Object[a32_0x1f107d(0x141)](exports, a32_0x1f107d(0x12b), { value: !![] }),
  (exports[a32_0x1f107d(0x12d)] =
    exports['me'] =
    exports[a32_0x1f107d(0x129)] =
    exports[a32_0x1f107d(0x125)] =
      void 0x0);
const AppError_1 = __importDefault(require(a32_0x1f107d(0x13d))),
  socket_1 = require(a32_0x1f107d(0x142)),
  AuthUserService_1 = __importDefault(
    require('../services/UserServices/AuthUserService')
  ),
  SendRefreshToken_1 = require(a32_0x1f107d(0x123)),
  RefreshTokenService_1 = require('../services/AuthServices/RefreshTokenService'),
  FindUserFromToken_1 = __importDefault(require(a32_0x1f107d(0x134))),
  User_1 = __importDefault(require(a32_0x1f107d(0x136))),
  store = async (_0x1100fa, _0x15c171) => {
    const _0x153ea2 = a32_0x1f107d,
      { email: _0x5d7361, password: _0x2dc284 } = _0x1100fa[_0x153ea2(0x12e)],
      {
        token: _0x717806,
        serializedUser: _0x326154,
        refreshToken: _0x2467a7
      } = await (0x0, AuthUserService_1[_0x153ea2(0x13a)])({
        email: _0x5d7361,
        password: _0x2dc284
      });
    (0x0, SendRefreshToken_1[_0x153ea2(0x143)])(_0x15c171, _0x2467a7);
    const _0x270571 = (0x0, socket_1['getIO'])();
    return (
      _0x270571[_0x153ea2(0x13e)](
        _0x153ea2(0x126) + _0x326154[_0x153ea2(0x135)] + '-auth',
        {
          action: _0x153ea2(0x129),
          user: {
            id: _0x326154['id'],
            email: _0x326154[_0x153ea2(0x13f)],
            companyId: _0x326154[_0x153ea2(0x135)]
          }
        }
      ),
      _0x15c171['status'](0xc8)[_0x153ea2(0x139)]({
        token: _0x717806,
        user: _0x326154
      })
    );
  };
exports['store'] = store;
const update = async (_0xba747b, _0x54a2b7) => {
  const _0x36b861 = a32_0x1f107d,
    _0x16558b = _0xba747b['cookies'][_0x36b861(0x131)];
  if (!_0x16558b)
    throw new AppError_1[_0x36b861(0x13a)]('ERR_SESSION_EXPIRED', 0x191);
  const {
    user: _0x91a40,
    newToken: _0x30d604,
    refreshToken: _0x2438d6
  } = await (0x0, RefreshTokenService_1[_0x36b861(0x128)])(
    _0x54a2b7,
    _0x16558b
  );
  return (
    (0x0, SendRefreshToken_1['SendRefreshToken'])(_0x54a2b7, _0x2438d6),
    _0x54a2b7[_0x36b861(0x139)]({ token: _0x30d604, user: _0x91a40 })
  );
};
exports[a32_0x1f107d(0x129)] = update;
const me = async (_0x56a15b, _0x20db7a) => {
  const _0x4f6777 = a32_0x1f107d,
    _0x4a80b2 = _0x56a15b[_0x4f6777(0x140)][_0x4f6777(0x131)],
    _0x3eee93 = await (0x0, FindUserFromToken_1['default'])(_0x4a80b2),
    { id: _0x3000ec, profile: _0xc0b003, super: _0x2cd245 } = _0x3eee93;
  if (!_0x4a80b2)
    throw new AppError_1[_0x4f6777(0x13a)]('ERR_SESSION_EXPIRED', 0x191);
  return _0x20db7a[_0x4f6777(0x139)]({
    id: _0x3000ec,
    profile: _0xc0b003,
    super: _0x2cd245
  });
};
exports['me'] = me;
const remove = async (_0x3beda2, _0x258069) => {
  const _0x30d835 = a32_0x1f107d,
    { id: _0x306f3e } = _0x3beda2[_0x30d835(0x12f)];
  if (_0x306f3e) {
    const _0x48140e = await User_1[_0x30d835(0x13a)]['findByPk'](_0x306f3e);
    await _0x48140e['update']({ online: ![] });
  }
  return (
    _0x258069['clearCookie'](_0x30d835(0x131)), _0x258069[_0x30d835(0x127)]()
  );
};
exports[a32_0x1f107d(0x12d)] = remove;
