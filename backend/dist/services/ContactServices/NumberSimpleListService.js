'use strict';
const a487_0x4ca45f = a487_0xe35d;
(function (_0x3f5355, _0x5f4130) {
  const _0x3c9a46 = a487_0xe35d,
    _0x49fb77 = _0x3f5355();
  while (!![]) {
    try {
      const _0x526db1 =
        (-parseInt(_0x3c9a46(0x12d)) / 0x1) *
          (-parseInt(_0x3c9a46(0x132)) / 0x2) +
        -parseInt(_0x3c9a46(0x12a)) / 0x3 +
        (-parseInt(_0x3c9a46(0x130)) / 0x4) *
          (-parseInt(_0x3c9a46(0x12b)) / 0x5) +
        parseInt(_0x3c9a46(0x125)) / 0x6 +
        (parseInt(_0x3c9a46(0x129)) / 0x7) *
          (parseInt(_0x3c9a46(0x12f)) / 0x8) +
        parseInt(_0x3c9a46(0x133)) / 0x9 +
        -parseInt(_0x3c9a46(0x11f)) / 0xa;
      if (_0x526db1 === _0x5f4130) break;
      else _0x49fb77['push'](_0x49fb77['shift']());
    } catch (_0x5f5796) {
      _0x49fb77['push'](_0x49fb77['shift']());
    }
  }
})(a487_0x35c2, 0x7c3ac);
var __importDefault =
  (this && this[a487_0x4ca45f(0x124)]) ||
  function (_0x1c9e1a) {
    const _0x18916a = a487_0x4ca45f;
    return _0x1c9e1a && _0x1c9e1a[_0x18916a(0x128)]
      ? _0x1c9e1a
      : { default: _0x1c9e1a };
  };
Object['defineProperty'](exports, a487_0x4ca45f(0x128), { value: !![] });
const Contact_1 = __importDefault(require(a487_0x4ca45f(0x12c))),
  AppError_1 = __importDefault(require(a487_0x4ca45f(0x131))),
  sequelize_1 = require(a487_0x4ca45f(0x12e)),
  NumberSimpleListService = async ({
    number: _0x341edd,
    companyId: _0x3784e8
  }) => {
    const _0x3c6ee3 = a487_0x4ca45f;
    let _0x22ffb0 = { order: [['name', _0x3c6ee3(0x126)]] };
    _0x341edd &&
      (_0x22ffb0[_0x3c6ee3(0x120)] = {
        number: { [sequelize_1['Op'][_0x3c6ee3(0x127)]]: '%' + _0x341edd + '%' }
      });
    _0x22ffb0['where'] = {
      ..._0x22ffb0[_0x3c6ee3(0x120)],
      companyId: _0x3784e8
    };
    const _0x29ceb1 = await Contact_1['default'][_0x3c6ee3(0x122)](_0x22ffb0);
    if (!_0x29ceb1)
      throw new AppError_1[_0x3c6ee3(0x123)](_0x3c6ee3(0x121), 0x194);
    return _0x29ceb1;
  };
function a487_0x35c2() {
  const _0x17d767 = [
    '__importDefault',
    '952944qrwEFQ',
    'ASC',
    'like',
    '__esModule',
    '14BccnSr',
    '2154222FmmsLh',
    '315ufusgE',
    '../../models/Contact',
    '1cERCcX',
    'sequelize',
    '1656824exjkFr',
    '12572SZPJfy',
    '../../errors/AppError',
    '1454884xaBlEt',
    '6255306hQXbNA',
    '9665970CYFXPk',
    'where',
    'ERR_NO_CONTACT_FOUND',
    'findAll',
    'default'
  ];
  a487_0x35c2 = function () {
    return _0x17d767;
  };
  return a487_0x35c2();
}
function a487_0xe35d(_0x193e2b, _0x2f15e7) {
  const _0x35c269 = a487_0x35c2();
  return (
    (a487_0xe35d = function (_0xe35d31, _0x33536f) {
      _0xe35d31 = _0xe35d31 - 0x11f;
      let _0x1e6d07 = _0x35c269[_0xe35d31];
      return _0x1e6d07;
    }),
    a487_0xe35d(_0x193e2b, _0x2f15e7)
  );
}
exports[a487_0x4ca45f(0x123)] = NumberSimpleListService;
