'use strict';
const a591_0x69f268 = a591_0x2f34;
function a591_0x2f34(_0xf6b826, _0x7a2a13) {
  const _0x32d679 = a591_0x32d6();
  return (
    (a591_0x2f34 = function (_0x2f3462, _0x18db97) {
      _0x2f3462 = _0x2f3462 - 0x10b;
      let _0xe5c86d = _0x32d679[_0x2f3462];
      return _0xe5c86d;
    }),
    a591_0x2f34(_0xf6b826, _0x7a2a13)
  );
}
(function (_0x4219c1, _0x51b43b) {
  const _0x35864f = a591_0x2f34,
    _0x358ba6 = _0x4219c1();
  while (!![]) {
    try {
      const _0x46b53d =
        (parseInt(_0x35864f(0x10e)) / 0x1) *
          (parseInt(_0x35864f(0x111)) / 0x2) +
        (parseInt(_0x35864f(0x10f)) / 0x3) *
          (-parseInt(_0x35864f(0x10b)) / 0x4) +
        parseInt(_0x35864f(0x116)) / 0x5 +
        (parseInt(_0x35864f(0x110)) / 0x6) *
          (-parseInt(_0x35864f(0x115)) / 0x7) +
        (-parseInt(_0x35864f(0x10c)) / 0x8) *
          (-parseInt(_0x35864f(0x117)) / 0x9) +
        parseInt(_0x35864f(0x118)) / 0xa +
        -parseInt(_0x35864f(0x11a)) / 0xb;
      if (_0x46b53d === _0x51b43b) break;
      else _0x358ba6['push'](_0x358ba6['shift']());
    } catch (_0x2b0d75) {
      _0x358ba6['push'](_0x358ba6['shift']());
    }
  }
})(a591_0x32d6, 0xe3abe);
function a591_0x32d6() {
  const _0xe2b445 = [
    '1623848CFRPIo',
    'default',
    '23OZfmVN',
    '70107ujmuXV',
    '6FgjFpd',
    '65834GKcOag',
    'findAll',
    'defineProperty',
    '__esModule',
    '7434301boLZvV',
    '4414810rLydwn',
    '45VxRoJb',
    '9097460gSQhni',
    '__importDefault',
    '7760126cBfWPK',
    '148CQunQT'
  ];
  a591_0x32d6 = function () {
    return _0xe2b445;
  };
  return a591_0x32d6();
}
var __importDefault =
  (this && this[a591_0x69f268(0x119)]) ||
  function (_0x163a4a) {
    const _0x350ed9 = a591_0x69f268;
    return _0x163a4a && _0x163a4a[_0x350ed9(0x114)]
      ? _0x163a4a
      : { default: _0x163a4a };
  };
Object[a591_0x69f268(0x113)](exports, '__esModule', { value: !![] });
const Setting_1 = __importDefault(require('../../models/Setting')),
  ListSettingsService = async ({ companyId: _0x5d706c }) => {
    const _0x2e3be4 = a591_0x69f268,
      _0x16c409 = await Setting_1[_0x2e3be4(0x10d)][_0x2e3be4(0x112)]({
        where: { companyId: _0x5d706c }
      });
    return _0x16c409;
  };
exports['default'] = ListSettingsService;
