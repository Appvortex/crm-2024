'use strict';
const a422_0x10ac85 = a422_0x1618;
function a422_0x1618(_0x22b0e3, _0x3bd3b4) {
  const _0x48f8ad = a422_0x48f8();
  return (
    (a422_0x1618 = function (_0x16182a, _0x43b9f1) {
      _0x16182a = _0x16182a - 0xcd;
      let _0x139ac1 = _0x48f8ad[_0x16182a];
      return _0x139ac1;
    }),
    a422_0x1618(_0x22b0e3, _0x3bd3b4)
  );
}
(function (_0x1c89d1, _0x34209b) {
  const _0x552c5f = a422_0x1618,
    _0x4ec352 = _0x1c89d1();
  while (!![]) {
    try {
      const _0x14374f =
        -parseInt(_0x552c5f(0xd8)) / 0x1 +
        -parseInt(_0x552c5f(0xd0)) / 0x2 +
        (parseInt(_0x552c5f(0xce)) / 0x3) * (-parseInt(_0x552c5f(0xcd)) / 0x4) +
        parseInt(_0x552c5f(0xd5)) / 0x5 +
        -parseInt(_0x552c5f(0xdb)) / 0x6 +
        (-parseInt(_0x552c5f(0xd1)) / 0x7) *
          (-parseInt(_0x552c5f(0xda)) / 0x8) +
        parseInt(_0x552c5f(0xd4)) / 0x9;
      if (_0x14374f === _0x34209b) break;
      else _0x4ec352['push'](_0x4ec352['shift']());
    } catch (_0xaa7900) {
      _0x4ec352['push'](_0x4ec352['shift']());
    }
  }
})(a422_0x48f8, 0x7a8c8);
function a422_0x48f8() {
  const _0x4c7cba = [
    'findOne',
    'default',
    'No\x20se\x20permite\x20eliminar\x20una\x20campaña\x20en\x20curso.',
    '4atEIWL',
    '529683TaaXlp',
    '../../models/Campaign',
    '1300804tYbIJn',
    '133jUOxQF',
    'status',
    'ERR_NO_CAMPAIGN_FOUND',
    '9386892CbBMMf',
    '4196935ykmuGB',
    '__importDefault',
    '__esModule',
    '805889bdAAEj',
    'EM_ANDAMENTO',
    '290712utqxCk',
    '2628024IKbPvF'
  ];
  a422_0x48f8 = function () {
    return _0x4c7cba;
  };
  return a422_0x48f8();
}
var __importDefault =
  (this && this[a422_0x10ac85(0xd6)]) ||
  function (_0x139a83) {
    const _0x550c78 = a422_0x10ac85;
    return _0x139a83 && _0x139a83[_0x550c78(0xd7)]
      ? _0x139a83
      : { default: _0x139a83 };
  };
Object['defineProperty'](exports, a422_0x10ac85(0xd7), { value: !![] });
const Campaign_1 = __importDefault(require(a422_0x10ac85(0xcf))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  DeleteService = async _0x1287ad => {
    const _0x2061d1 = a422_0x10ac85,
      _0xbaf121 = await Campaign_1['default'][_0x2061d1(0xdc)]({
        where: { id: _0x1287ad }
      });
    if (!_0xbaf121) throw new AppError_1['default'](_0x2061d1(0xd3), 0x194);
    if (_0xbaf121[_0x2061d1(0xd2)] === _0x2061d1(0xd9))
      throw new AppError_1['default'](_0x2061d1(0xde), 0x190);
    await _0xbaf121['destroy']();
  };
exports[a422_0x10ac85(0xdd)] = DeleteService;
