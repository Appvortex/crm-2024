'use strict';
const a511_0x545464 = a511_0x419c;
function a511_0x419c(_0x27258e, _0x4728db) {
  const _0x4da8ad = a511_0x4da8();
  return (
    (a511_0x419c = function (_0x419c1e, _0x51d3ad) {
      _0x419c1e = _0x419c1e - 0x13c;
      let _0x13a3a1 = _0x4da8ad[_0x419c1e];
      return _0x13a3a1;
    }),
    a511_0x419c(_0x27258e, _0x4728db)
  );
}
(function (_0x54df40, _0x2c34f1) {
  const _0x7a802d = a511_0x419c,
    _0xe277e4 = _0x54df40();
  while (!![]) {
    try {
      const _0x5341ae =
        (parseInt(_0x7a802d(0x144)) / 0x1) *
          (-parseInt(_0x7a802d(0x141)) / 0x2) +
        (-parseInt(_0x7a802d(0x142)) / 0x3) *
          (-parseInt(_0x7a802d(0x148)) / 0x4) +
        -parseInt(_0x7a802d(0x147)) / 0x5 +
        -parseInt(_0x7a802d(0x13d)) / 0x6 +
        parseInt(_0x7a802d(0x14b)) / 0x7 +
        parseInt(_0x7a802d(0x145)) / 0x8 +
        (parseInt(_0x7a802d(0x13f)) / 0x9) * (parseInt(_0x7a802d(0x140)) / 0xa);
      if (_0x5341ae === _0x2c34f1) break;
      else _0xe277e4['push'](_0xe277e4['shift']());
    } catch (_0x15adec) {
      _0xe277e4['push'](_0xe277e4['shift']());
    }
  }
})(a511_0x4da8, 0x259c6);
var __importDefault =
  (this && this[a511_0x545464(0x143)]) ||
  function (_0x2b739f) {
    const _0x128ac9 = a511_0x545464;
    return _0x2b739f && _0x2b739f[_0x128ac9(0x13c)]
      ? _0x2b739f
      : { default: _0x2b739f };
  };
Object[a511_0x545464(0x146)](exports, a511_0x545464(0x13c), { value: !![] });
const Help_1 = __importDefault(require(a511_0x545464(0x14a))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  DeleteService = async _0x42b824 => {
    const _0x5cb2da = a511_0x545464,
      _0x52856a = await Help_1[_0x5cb2da(0x149)][_0x5cb2da(0x13e)]({
        where: { id: _0x42b824 }
      });
    if (!_0x52856a)
      throw new AppError_1[_0x5cb2da(0x149)](_0x5cb2da(0x14c), 0x194);
    await _0x52856a['destroy']();
  };
exports['default'] = DeleteService;
function a511_0x4da8() {
  const _0x581e62 = [
    '235200EYlpKp',
    '4CumqOD',
    'default',
    '../../models/Help',
    '580363qClsuA',
    'ERR_NO_HELP_FOUND',
    '__esModule',
    '689412boAGpJ',
    'findOne',
    '4419KQRujV',
    '6430sVGVXV',
    '314AJVFaj',
    '91365XMgBhW',
    '__importDefault',
    '1733MejxuM',
    '1272000oNdcci',
    'defineProperty'
  ];
  a511_0x4da8 = function () {
    return _0x581e62;
  };
  return a511_0x4da8();
}
