'use strict';
function a460_0x2b85(_0x47d867, _0x4a177f) {
  const _0x43c21d = a460_0x43c2();
  return (
    (a460_0x2b85 = function (_0x2b8582, _0x1c368b) {
      _0x2b8582 = _0x2b8582 - 0xf8;
      let _0x26e704 = _0x43c21d[_0x2b8582];
      return _0x26e704;
    }),
    a460_0x2b85(_0x47d867, _0x4a177f)
  );
}
const a460_0x40f454 = a460_0x2b85;
(function (_0x516302, _0x434938) {
  const _0x508f66 = a460_0x2b85,
    _0x35baf8 = _0x516302();
  while (!![]) {
    try {
      const _0xed88ab =
        (parseInt(_0x508f66(0x104)) / 0x1) * (parseInt(_0x508f66(0xfa)) / 0x2) +
        -parseInt(_0x508f66(0x103)) / 0x3 +
        (parseInt(_0x508f66(0x108)) / 0x4) *
          (-parseInt(_0x508f66(0x10b)) / 0x5) +
        (-parseInt(_0x508f66(0x107)) / 0x6) *
          (-parseInt(_0x508f66(0xf9)) / 0x7) +
        (parseInt(_0x508f66(0x101)) / 0x8) *
          (parseInt(_0x508f66(0x10a)) / 0x9) +
        parseInt(_0x508f66(0xff)) / 0xa +
        (-parseInt(_0x508f66(0x105)) / 0xb) *
          (-parseInt(_0x508f66(0xfc)) / 0xc);
      if (_0xed88ab === _0x434938) break;
      else _0x35baf8['push'](_0x35baf8['shift']());
    } catch (_0x1bf205) {
      _0x35baf8['push'](_0x35baf8['shift']());
    }
  }
})(a460_0x43c2, 0x9c8e4);
var __importDefault =
  (this && this[a460_0x40f454(0xfb)]) ||
  function (_0x41e61) {
    const _0x1c24e1 = a460_0x40f454;
    return _0x41e61 && _0x41e61[_0x1c24e1(0xfd)]
      ? _0x41e61
      : { default: _0x41e61 };
  };
Object[a460_0x40f454(0x102)](exports, a460_0x40f454(0xfd), { value: !![] });
function a460_0x43c2() {
  const _0x46935d = [
    'default',
    '3786KdJDra',
    '45268tFkpPq',
    'findByPk',
    '3874113hdWIRo',
    '125kMcubN',
    'ERR_NO_COMPANY_FOUND',
    '413ZSqLdR',
    '42678DkHISX',
    '__importDefault',
    '948492tcWMIY',
    '__esModule',
    '../../models/Company',
    '1158510KUTIgy',
    'update',
    '8gAPlOb',
    'defineProperty',
    '3416799DqpfsV',
    '36sqAoOI',
    '99OqLCmV'
  ];
  a460_0x43c2 = function () {
    return _0x46935d;
  };
  return a460_0x43c2();
}
const AppError_1 = __importDefault(require('../../errors/AppError')),
  Company_1 = __importDefault(require(a460_0x40f454(0xfe))),
  UpdateSchedulesService = async ({ id: _0x3c5c6f, schedules: _0x575a1d }) => {
    const _0x25d8d7 = a460_0x40f454,
      _0x5cb924 =
        await Company_1[_0x25d8d7(0x106)][_0x25d8d7(0x109)](_0x3c5c6f);
    if (!_0x5cb924)
      throw new AppError_1[_0x25d8d7(0x106)](_0x25d8d7(0xf8), 0x194);
    return (
      await _0x5cb924[_0x25d8d7(0x100)]({ schedules: _0x575a1d }), _0x5cb924
    );
  };
exports[a460_0x40f454(0x106)] = UpdateSchedulesService;
