'use strict';
const a529_0xda6f70 = a529_0x220c;
function a529_0x220c(_0x2e6bf9, _0x390a3f) {
  const _0x6795b2 = a529_0x6795();
  return (
    (a529_0x220c = function (_0x220cfe, _0x36faf0) {
      _0x220cfe = _0x220cfe - 0x1a2;
      let _0x59a887 = _0x6795b2[_0x220cfe];
      return _0x59a887;
    }),
    a529_0x220c(_0x2e6bf9, _0x390a3f)
  );
}
function a529_0x6795() {
  const _0x5be3f4 = [
    '112208wYJRRn',
    '1020750rBmjBx',
    'findOne',
    '21erzkjB',
    '324981VqEqlP',
    '339224FMhkld',
    '1375440LkYEvW',
    'defineProperty',
    '27hfCzjN',
    '55QroWDe',
    '__esModule',
    'default',
    'ERR_NO_PARTNER_FOUND',
    '1DHzvcW',
    '__importDefault',
    '9439232wOjLwB',
    '../../models/Partner',
    'destroy',
    '1408582YgvJOh'
  ];
  a529_0x6795 = function () {
    return _0x5be3f4;
  };
  return a529_0x6795();
}
(function (_0x2d72fb, _0x4abd71) {
  const _0x12198e = a529_0x220c,
    _0x2458cb = _0x2d72fb();
  while (!![]) {
    try {
      const _0x3685bb =
        (parseInt(_0x12198e(0x1ac)) / 0x1) *
          (parseInt(_0x12198e(0x1b1)) / 0x2) +
        -parseInt(_0x12198e(0x1a3)) / 0x3 +
        (parseInt(_0x12198e(0x1b2)) / 0x4) *
          (-parseInt(_0x12198e(0x1a8)) / 0x5) +
        (parseInt(_0x12198e(0x1b3)) / 0x6) *
          (-parseInt(_0x12198e(0x1a2)) / 0x7) +
        (-parseInt(_0x12198e(0x1a4)) / 0x8) *
          (parseInt(_0x12198e(0x1a7)) / 0x9) +
        -parseInt(_0x12198e(0x1a5)) / 0xa +
        parseInt(_0x12198e(0x1ae)) / 0xb;
      if (_0x3685bb === _0x4abd71) break;
      else _0x2458cb['push'](_0x2458cb['shift']());
    } catch (_0x493c8c) {
      _0x2458cb['push'](_0x2458cb['shift']());
    }
  }
})(a529_0x6795, 0x5a6c8);
var __importDefault =
  (this && this[a529_0xda6f70(0x1ad)]) ||
  function (_0x345ba3) {
    const _0x3e4fcf = a529_0xda6f70;
    return _0x345ba3 && _0x345ba3[_0x3e4fcf(0x1a9)]
      ? _0x345ba3
      : { default: _0x345ba3 };
  };
Object[a529_0xda6f70(0x1a6)](exports, a529_0xda6f70(0x1a9), { value: !![] });
const Partner_1 = __importDefault(require(a529_0xda6f70(0x1af))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  DeleteService = async _0x5a5fc3 => {
    const _0x1e7f0d = a529_0xda6f70,
      _0x154b64 = await Partner_1['default'][_0x1e7f0d(0x1b4)]({
        where: { id: _0x5a5fc3 }
      });
    if (!_0x154b64)
      throw new AppError_1[_0x1e7f0d(0x1aa)](_0x1e7f0d(0x1ab), 0x194);
    await _0x154b64[_0x1e7f0d(0x1b0)]();
  };
exports[a529_0xda6f70(0x1aa)] = DeleteService;
