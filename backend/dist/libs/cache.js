'use strict';
const a308_0x23f10e = a308_0x1f91;
(function (_0x16b764, _0x249778) {
  const _0x370bfe = a308_0x1f91,
    _0x5c86e4 = _0x16b764();
  while (!![]) {
    try {
      const _0x55868f =
        (-parseInt(_0x370bfe(0x11e)) / 0x1) *
          (parseInt(_0x370bfe(0x11a)) / 0x2) +
        -parseInt(_0x370bfe(0x10c)) / 0x3 +
        (parseInt(_0x370bfe(0x116)) / 0x4) *
          (-parseInt(_0x370bfe(0x110)) / 0x5) +
        -parseInt(_0x370bfe(0x124)) / 0x6 +
        parseInt(_0x370bfe(0x115)) / 0x7 +
        parseInt(_0x370bfe(0x117)) / 0x8 +
        parseInt(_0x370bfe(0x12c)) / 0x9;
      if (_0x55868f === _0x249778) break;
      else _0x5c86e4['push'](_0x5c86e4['shift']());
    } catch (_0x4e7ac0) {
      _0x5c86e4['push'](_0x5c86e4['shift']());
    }
  }
})(a308_0x2e3b, 0x2f646);
function a308_0x2e3b() {
  const _0x16a17e = [
    'all',
    'delFromParams',
    'util',
    '../config/redis',
    'ioredis',
    'set',
    '__importDefault',
    '7971867KDJUlU',
    'instance',
    'crypto-js/hmac-sha512',
    'setFromParams',
    '993588bPEzsw',
    'default',
    'getInstance',
    'get',
    '20xreISA',
    'promisify',
    'stringify',
    'encryptParams',
    'redis',
    '355733oIvICn',
    '60284aKXjgm',
    '1344512CZOzrP',
    'del',
    'REDIS_URI_CONNECTION',
    '9014yVDRiJ',
    'keys',
    'getKeys',
    'bind',
    '31PVKsiJ',
    'getRedisInstance',
    'defineProperty',
    '__esModule',
    'crypto-js/enc-base64',
    'getFromParams',
    '2275986RFbtiv'
  ];
  a308_0x2e3b = function () {
    return _0x16a17e;
  };
  return a308_0x2e3b();
}
var __importDefault =
  (this && this[a308_0x23f10e(0x12b)]) ||
  function (_0x16d2c0) {
    const _0x2fe2ae = a308_0x23f10e;
    return _0x16d2c0 && _0x16d2c0[_0x2fe2ae(0x121)]
      ? _0x16d2c0
      : { default: _0x16d2c0 };
  };
Object[a308_0x23f10e(0x120)](exports, a308_0x23f10e(0x121), { value: !![] });
const util_1 = __importDefault(require(a308_0x23f10e(0x127))),
  ioredis_1 = __importDefault(require(a308_0x23f10e(0x129))),
  hmac_sha512_1 = __importDefault(require(a308_0x23f10e(0x10a))),
  enc_base64_1 = __importDefault(require(a308_0x23f10e(0x122))),
  redis_1 = require(a308_0x23f10e(0x128));
class CacheSingleton {
  constructor(_0x46a502) {
    const _0x5d2790 = a308_0x23f10e;
    (this['redis'] = _0x46a502),
      (this[_0x5d2790(0x12a)] = util_1[_0x5d2790(0x10d)]
        [_0x5d2790(0x111)](this[_0x5d2790(0x114)][_0x5d2790(0x12a)])
        ['bind'](this[_0x5d2790(0x114)])),
      (this['get'] = util_1['default']
        [_0x5d2790(0x111)](this[_0x5d2790(0x114)][_0x5d2790(0x10f)])
        ['bind'](this['redis'])),
      (this[_0x5d2790(0x11b)] = util_1[_0x5d2790(0x10d)]
        [_0x5d2790(0x111)](this['redis'][_0x5d2790(0x11b)])
        ['bind'](this[_0x5d2790(0x114)])),
      (this[_0x5d2790(0x118)] = util_1[_0x5d2790(0x10d)]
        [_0x5d2790(0x111)](this[_0x5d2790(0x114)][_0x5d2790(0x118)])
        [_0x5d2790(0x11d)](this[_0x5d2790(0x114)]));
  }
  static [a308_0x23f10e(0x10e)](_0xb5d619) {
    const _0xa46992 = a308_0x23f10e;
    return (
      !CacheSingleton[_0xa46992(0x109)] &&
        (CacheSingleton['instance'] = new CacheSingleton(_0xb5d619)),
      CacheSingleton[_0xa46992(0x109)]
    );
  }
  static [a308_0x23f10e(0x113)](_0x4be237) {
    const _0x494beb = a308_0x23f10e,
      _0x352bf2 = JSON['stringify'](_0x4be237),
      _0x2d3bda = enc_base64_1['default'][_0x494beb(0x112)](
        (0x0, hmac_sha512_1['default'])(_0x4be237, _0x352bf2)
      );
    return _0x2d3bda;
  }
  async [a308_0x23f10e(0x12a)](_0x23361b, _0x2bc7ef, _0x292c9c, _0x20522a) {
    const _0x1d2ac3 = a308_0x23f10e,
      _0x58a3d7 = util_1[_0x1d2ac3(0x10d)]
        [_0x1d2ac3(0x111)](this[_0x1d2ac3(0x114)][_0x1d2ac3(0x12a)])
        [_0x1d2ac3(0x11d)](this[_0x1d2ac3(0x114)]);
    if (_0x292c9c !== undefined && _0x20522a !== undefined)
      return _0x58a3d7(_0x23361b, _0x2bc7ef, _0x292c9c, _0x20522a);
    return _0x58a3d7(_0x23361b, _0x2bc7ef);
  }
  async ['get'](_0x361168) {
    const _0x4785d2 = a308_0x23f10e,
      _0x3c4cda = util_1[_0x4785d2(0x10d)]
        ['promisify'](this[_0x4785d2(0x114)][_0x4785d2(0x10f)])
        [_0x4785d2(0x11d)](this[_0x4785d2(0x114)]);
    return _0x3c4cda(_0x361168);
  }
  async [a308_0x23f10e(0x11c)](_0x394537) {
    const _0x5f1c11 = a308_0x23f10e,
      _0x1dfae1 = util_1['default']
        [_0x5f1c11(0x111)](this[_0x5f1c11(0x114)][_0x5f1c11(0x11b)])
        [_0x5f1c11(0x11d)](this['redis']);
    return _0x1dfae1(_0x394537);
  }
  async ['del'](_0x577efe) {
    const _0x49be5a = a308_0x23f10e,
      _0x179382 = util_1[_0x49be5a(0x10d)]
        ['promisify'](this['redis'][_0x49be5a(0x118)])
        [_0x49be5a(0x11d)](this['redis']);
    return _0x179382(_0x577efe);
  }
  async ['delFromPattern'](_0xb45ae) {
    const _0x38203f = a308_0x23f10e,
      _0x9c5017 = await this[_0x38203f(0x11c)](_0xb45ae);
    await Promise[_0x38203f(0x125)](
      _0x9c5017['map'](_0xd32dd => this[_0x38203f(0x118)](_0xd32dd))
    );
  }
  async [a308_0x23f10e(0x10b)](
    _0x355427,
    _0x407e58,
    _0x2e174d,
    _0x448362,
    _0x1a7ab4
  ) {
    const _0x245b22 = a308_0x23f10e,
      _0x3b44d4 = _0x355427 + ':' + CacheSingleton[_0x245b22(0x113)](_0x407e58);
    if (_0x448362 !== undefined && _0x1a7ab4 !== undefined)
      return this['set'](_0x3b44d4, _0x2e174d, _0x448362, _0x1a7ab4);
    return this['set'](_0x3b44d4, _0x2e174d);
  }
  async [a308_0x23f10e(0x123)](_0x490a3f, _0xc69628) {
    const _0x1b19fb = a308_0x23f10e,
      _0x4da6db = _0x490a3f + ':' + CacheSingleton[_0x1b19fb(0x113)](_0xc69628);
    return this[_0x1b19fb(0x10f)](_0x4da6db);
  }
  async [a308_0x23f10e(0x126)](_0x1da490, _0x9cd7bb) {
    const _0x56c4ec = a308_0x23f10e,
      _0x5586d9 = _0x1da490 + ':' + CacheSingleton[_0x56c4ec(0x113)](_0x9cd7bb);
    return this['del'](_0x5586d9);
  }
  [a308_0x23f10e(0x11f)]() {
    const _0x24d3df = a308_0x23f10e;
    return this[_0x24d3df(0x114)];
  }
}
function a308_0x1f91(_0x5abff8, _0x16dd0d) {
  const _0x2e3b2f = a308_0x2e3b();
  return (
    (a308_0x1f91 = function (_0x1f91bd, _0x147bd9) {
      _0x1f91bd = _0x1f91bd - 0x109;
      let _0x41f178 = _0x2e3b2f[_0x1f91bd];
      return _0x41f178;
    }),
    a308_0x1f91(_0x5abff8, _0x16dd0d)
  );
}
const redisInstance = new ioredis_1[a308_0x23f10e(0x10d)](
  redis_1[a308_0x23f10e(0x119)]
);
exports[a308_0x23f10e(0x10d)] =
  CacheSingleton[a308_0x23f10e(0x10e)](redisInstance);
