'use strict';
const a287_0x7b26ed = a287_0x2cf2;
(function (_0x138f24, _0x5b9ce5) {
  const _0x93fec0 = a287_0x2cf2,
    _0x418505 = _0x138f24();
  while (!![]) {
    try {
      const _0x1d1ba6 =
        -parseInt(_0x93fec0(0x88)) / 0x1 +
        parseInt(_0x93fec0(0x80)) / 0x2 +
        (parseInt(_0x93fec0(0x85)) / 0x3) * (-parseInt(_0x93fec0(0x7d)) / 0x4) +
        parseInt(_0x93fec0(0x87)) / 0x5 +
        (parseInt(_0x93fec0(0x7b)) / 0x6) * (-parseInt(_0x93fec0(0x7a)) / 0x7) +
        -parseInt(_0x93fec0(0x86)) / 0x8 +
        parseInt(_0x93fec0(0x84)) / 0x9;
      if (_0x1d1ba6 === _0x5b9ce5) break;
      else _0x418505['push'](_0x418505['shift']());
    } catch (_0x3a967c) {
      _0x418505['push'](_0x418505['shift']());
    }
  }
})(a287_0x3d38, 0x4961e);
function a287_0x3d38() {
  const _0x598504 = [
    '8696304QFnOoS',
    '3zvbzmz',
    '3939168WCKeDA',
    '1902705fgCKNR',
    '422796nTmjPu',
    '__importDefault',
    '../config/auth',
    '14HRyZyg',
    '869874eIRyjz',
    'companyId',
    '900260VIouDd',
    'sign',
    'createAccessToken',
    '767984NTDqYZ',
    'default',
    'jsonwebtoken',
    'createRefreshToken'
  ];
  a287_0x3d38 = function () {
    return _0x598504;
  };
  return a287_0x3d38();
}
var __importDefault =
  (this && this[a287_0x7b26ed(0x89)]) ||
  function (_0xb8fdc6) {
    return _0xb8fdc6 && _0xb8fdc6['__esModule']
      ? _0xb8fdc6
      : { default: _0xb8fdc6 };
  };
Object['defineProperty'](exports, '__esModule', { value: !![] }),
  (exports[a287_0x7b26ed(0x83)] = exports[a287_0x7b26ed(0x7f)] = void 0x0);
const jsonwebtoken_1 = require(a287_0x7b26ed(0x82)),
  auth_1 = __importDefault(require(a287_0x7b26ed(0x8a))),
  createAccessToken = _0x363ec6 => {
    const _0xf15d4a = a287_0x7b26ed,
      { secret: _0x2552f2, expiresIn: _0x212899 } = auth_1[_0xf15d4a(0x81)];
    return (0x0, jsonwebtoken_1[_0xf15d4a(0x7e)])(
      {
        usarname: _0x363ec6['name'],
        profile: _0x363ec6['profile'],
        id: _0x363ec6['id'],
        companyId: _0x363ec6[_0xf15d4a(0x7c)]
      },
      _0x2552f2,
      { expiresIn: _0x212899 }
    );
  };
exports['createAccessToken'] = createAccessToken;
function a287_0x2cf2(_0x296e18, _0x45e53d) {
  const _0x3d38a4 = a287_0x3d38();
  return (
    (a287_0x2cf2 = function (_0x2cf2f0, _0x16d5de) {
      _0x2cf2f0 = _0x2cf2f0 - 0x7a;
      let _0x4796e6 = _0x3d38a4[_0x2cf2f0];
      return _0x4796e6;
    }),
    a287_0x2cf2(_0x296e18, _0x45e53d)
  );
}
const createRefreshToken = _0x59ec5a => {
  const _0x31e400 = a287_0x7b26ed,
    { refreshSecret: _0x3154dd, refreshExpiresIn: _0x4bbc18 } =
      auth_1[_0x31e400(0x81)];
  return (0x0, jsonwebtoken_1[_0x31e400(0x7e)])(
    {
      id: _0x59ec5a['id'],
      tokenVersion: _0x59ec5a['tokenVersion'],
      companyId: _0x59ec5a[_0x31e400(0x7c)]
    },
    _0x3154dd,
    { expiresIn: _0x4bbc18 }
  );
};
exports[a287_0x7b26ed(0x83)] = createRefreshToken;
