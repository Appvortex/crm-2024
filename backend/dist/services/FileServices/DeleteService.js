'use strict';
function a505_0x2a6f(_0x50d173, _0x3d6ea9) {
  const _0x44acea = a505_0x44ac();
  return (
    (a505_0x2a6f = function (_0x2a6f90, _0x11d19f) {
      _0x2a6f90 = _0x2a6f90 - 0x138;
      let _0x47bbfa = _0x44acea[_0x2a6f90];
      return _0x47bbfa;
    }),
    a505_0x2a6f(_0x50d173, _0x3d6ea9)
  );
}
const a505_0x4519bb = a505_0x2a6f;
(function (_0x55b522, _0x1afc80) {
  const _0x25a76b = a505_0x2a6f,
    _0x2d91c8 = _0x55b522();
  while (!![]) {
    try {
      const _0xebde9c =
        -parseInt(_0x25a76b(0x141)) / 0x1 +
        parseInt(_0x25a76b(0x13d)) / 0x2 +
        -parseInt(_0x25a76b(0x146)) / 0x3 +
        (parseInt(_0x25a76b(0x139)) / 0x4) *
          (-parseInt(_0x25a76b(0x13c)) / 0x5) +
        -parseInt(_0x25a76b(0x143)) / 0x6 +
        (-parseInt(_0x25a76b(0x13e)) / 0x7) *
          (-parseInt(_0x25a76b(0x144)) / 0x8) +
        (parseInt(_0x25a76b(0x13f)) / 0x9) * (parseInt(_0x25a76b(0x142)) / 0xa);
      if (_0xebde9c === _0x1afc80) break;
      else _0x2d91c8['push'](_0x2d91c8['shift']());
    } catch (_0xdc0e38) {
      _0x2d91c8['push'](_0x2d91c8['shift']());
    }
  }
})(a505_0x44ac, 0x99ac8);
var __importDefault =
  (this && this[a505_0x4519bb(0x13a)]) ||
  function (_0x3c6e45) {
    const _0x16b5b5 = a505_0x4519bb;
    return _0x3c6e45 && _0x3c6e45[_0x16b5b5(0x13b)]
      ? _0x3c6e45
      : { default: _0x3c6e45 };
  };
Object[a505_0x4519bb(0x138)](exports, a505_0x4519bb(0x13b), { value: !![] });
const Files_1 = __importDefault(require(a505_0x4519bb(0x140))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  DeleteService = async (_0x46f135, _0x2d4b1b) => {
    const _0x5116ef = a505_0x4519bb,
      _0x1dcf47 = await Files_1[_0x5116ef(0x147)]['findOne']({
        where: { id: _0x46f135, companyId: _0x2d4b1b }
      });
    if (!_0x1dcf47)
      throw new AppError_1['default']('ERR_NO_RATING_FOUND', 0x194);
    await _0x1dcf47[_0x5116ef(0x145)]();
  };
function a505_0x44ac() {
  const _0x20e6f8 = [
    '../../models/Files',
    '542553lpOhew',
    '70lpuKpi',
    '1719510NCklgv',
    '24vBCjlS',
    'destroy',
    '910227RYgXrS',
    'default',
    'defineProperty',
    '3890036IioReY',
    '__importDefault',
    '__esModule',
    '5ZNljIO',
    '547008PPmCLU',
    '2292325OrVYeZ',
    '1901025egEVrO'
  ];
  a505_0x44ac = function () {
    return _0x20e6f8;
  };
  return a505_0x44ac();
}
exports[a505_0x4519bb(0x147)] = DeleteService;
