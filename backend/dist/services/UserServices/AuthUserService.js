'use strict';
const a634_0x599641 = a634_0x20f3;
(function (_0x34d7b5, _0x49e7d3) {
  const _0x50a88e = a634_0x20f3,
    _0x543bb6 = _0x34d7b5();
  while (!![]) {
    try {
      const _0x30431d =
        (-parseInt(_0x50a88e(0xa5)) / 0x1) * (parseInt(_0x50a88e(0x86)) / 0x2) +
        (parseInt(_0x50a88e(0x99)) / 0x3) * (-parseInt(_0x50a88e(0xa8)) / 0x4) +
        (-parseInt(_0x50a88e(0x9f)) / 0x5) * (parseInt(_0x50a88e(0x8c)) / 0x6) +
        -parseInt(_0x50a88e(0xa7)) / 0x7 +
        (parseInt(_0x50a88e(0xa0)) / 0x8) * (parseInt(_0x50a88e(0x9c)) / 0x9) +
        -parseInt(_0x50a88e(0x97)) / 0xa +
        parseInt(_0x50a88e(0x9e)) / 0xb;
      if (_0x30431d === _0x49e7d3) break;
      else _0x543bb6['push'](_0x543bb6['shift']());
    } catch (_0x26f1c5) {
      _0x543bb6['push'](_0x543bb6['shift']());
    }
  }
})(a634_0x1225, 0xb527d);
var __importDefault =
  (this && this[a634_0x599641(0x92)]) ||
  function (_0x1963ba) {
    return _0x1963ba && _0x1963ba['__esModule']
      ? _0x1963ba
      : { default: _0x1963ba };
  };
function a634_0x20f3(_0x2b0161, _0x231bf0) {
  const _0x122568 = a634_0x1225();
  return (
    (a634_0x20f3 = function (_0x20f300, _0xe58a1c) {
      _0x20f300 = _0x20f300 - 0x86;
      let _0x1b1f2c = _0x122568[_0x20f300];
      return _0x1b1f2c;
    }),
    a634_0x20f3(_0x2b0161, _0x231bf0)
  );
}
Object[a634_0x599641(0x93)](exports, a634_0x599641(0x94), { value: !![] });
const User_1 = __importDefault(require('../../models/User')),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  CreateTokens_1 = require(a634_0x599641(0xa3)),
  SerializeUser_1 = require(a634_0x599641(0xa4)),
  Company_1 = __importDefault(require(a634_0x599641(0x89))),
  CompaniesSettings_1 = __importDefault(require(a634_0x599641(0x8b))),
  AuthUserService = async ({ email: _0x4aac47, password: _0x451211 }) => {
    const _0x35089c = a634_0x599641,
      _0x32c8d6 = await User_1[_0x35089c(0x9d)][_0x35089c(0x96)]({
        where: { email: _0x4aac47 },
        include: [
          _0x35089c(0xa1),
          {
            model: Company_1[_0x35089c(0x9d)],
            include: [{ model: CompaniesSettings_1[_0x35089c(0x9d)] }]
          }
        ]
      });
    if (!_0x32c8d6)
      throw new AppError_1[_0x35089c(0x9d)]('ERR_INVALID_CREDENTIALS', 0x191);
    const _0x60a746 = new Date(),
      _0x173662 = _0x60a746[_0x35089c(0x90)]() * 0x3c * 0x3c,
      _0x5b624a = _0x60a746[_0x35089c(0x9b)]() * 0x3c,
      _0x50fc97 = _0x173662 + _0x5b624a,
      _0x3d23b4 = _0x32c8d6['startWork'],
      _0x43927d = Number(_0x3d23b4[_0x35089c(0x8d)](':')[0x0]) * 0x3c * 0x3c,
      _0x2db668 = Number(_0x3d23b4[_0x35089c(0x8d)](':')[0x1]) * 0x3c,
      _0x2e8419 = _0x43927d + _0x2db668,
      _0x3ba0bd = _0x32c8d6[_0x35089c(0x88)],
      _0x35998c = Number(_0x3ba0bd[_0x35089c(0x8d)](':')[0x0]) * 0x3c * 0x3c,
      _0x293601 = Number(_0x3ba0bd[_0x35089c(0x8d)](':')[0x1]) * 0x3c,
      _0x19f630 = _0x35998c + _0x293601;
    if (_0x50fc97 < _0x2e8419 || _0x50fc97 > _0x19f630)
      throw new AppError_1[_0x35089c(0x9d)](_0x35089c(0x9a), 0x191);
    if (_0x451211 === process[_0x35089c(0xa6)][_0x35089c(0x98)]) {
    } else {
      if (await _0x32c8d6[_0x35089c(0x8e)](_0x451211)) {
        const _0x49dcd6 = await Company_1[_0x35089c(0x9d)]['findByPk'](
          _0x32c8d6?.[_0x35089c(0x8f)]
        );
        await _0x49dcd6[_0x35089c(0x8a)]({ lastLogin: new Date() });
      } else throw new AppError_1[_0x35089c(0x9d)](_0x35089c(0x91), 0x191);
    }
    const _0xa4bccb = (0x0, CreateTokens_1[_0x35089c(0x95)])(_0x32c8d6),
      _0x2085f2 = (0x0, CreateTokens_1[_0x35089c(0xa2)])(_0x32c8d6),
      _0x3f65d6 = await (0x0, SerializeUser_1[_0x35089c(0x87)])(_0x32c8d6);
    return {
      serializedUser: _0x3f65d6,
      token: _0xa4bccb,
      refreshToken: _0x2085f2
    };
  };
exports[a634_0x599641(0x9d)] = AuthUserService;
function a634_0x1225() {
  const _0x2d4b2c = [
    'companyId',
    'getHours',
    'ERR_INVALID_CREDENTIALS',
    '__importDefault',
    'defineProperty',
    '__esModule',
    'createAccessToken',
    'findOne',
    '10306360yGKyfI',
    'MASTER_KEY',
    '3386511edFCPC',
    'ERR_OUT_OF_HOURS',
    'getMinutes',
    '2313EKLVIJ',
    'default',
    '56196041gANxQE',
    '5fNkkKb',
    '26456NLghob',
    'queues',
    'createRefreshToken',
    '../../helpers/CreateTokens',
    '../../helpers/SerializeUser',
    '458eDOozd',
    'env',
    '10094567LrDOPQ',
    '4opyCXB',
    '2124oWJxPM',
    'SerializeUser',
    'endWork',
    '../../models/Company',
    'update',
    '../../models/CompaniesSettings',
    '6772002llpqdA',
    'split',
    'checkPassword'
  ];
  a634_0x1225 = function () {
    return _0x2d4b2c;
  };
  return a634_0x1225();
}
