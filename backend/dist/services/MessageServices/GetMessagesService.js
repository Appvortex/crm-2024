'use strict';
const a524_0x1fc75e = a524_0x5c36;
(function (_0x127166, _0x1fa64c) {
  const _0x1bc2f4 = a524_0x5c36,
    _0x1d9911 = _0x127166();
  while (!![]) {
    try {
      const _0x20f0dd =
        -parseInt(_0x1bc2f4(0x16e)) / 0x1 +
        -parseInt(_0x1bc2f4(0x16f)) / 0x2 +
        (-parseInt(_0x1bc2f4(0x177)) / 0x3) *
          (-parseInt(_0x1bc2f4(0x16d)) / 0x4) +
        -parseInt(_0x1bc2f4(0x176)) / 0x5 +
        -parseInt(_0x1bc2f4(0x173)) / 0x6 +
        parseInt(_0x1bc2f4(0x16b)) / 0x7 +
        (parseInt(_0x1bc2f4(0x174)) / 0x8) * (parseInt(_0x1bc2f4(0x16c)) / 0x9);
      if (_0x20f0dd === _0x1fa64c) break;
      else _0x1d9911['push'](_0x1d9911['shift']());
    } catch (_0x55b92b) {
      _0x1d9911['push'](_0x1d9911['shift']());
    }
  }
})(a524_0x2056, 0x5c8b7);
function a524_0x5c36(_0x77c28b, _0x463569) {
  const _0x205644 = a524_0x2056();
  return (
    (a524_0x5c36 = function (_0x5c36fa, _0x3b9591) {
      _0x5c36fa = _0x5c36fa - 0x16b;
      let _0x576436 = _0x205644[_0x5c36fa];
      return _0x576436;
    }),
    a524_0x5c36(_0x77c28b, _0x463569)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x542015) {
    const _0x3f0542 = a524_0x5c36;
    return _0x542015 && _0x542015[_0x3f0542(0x179)]
      ? _0x542015
      : { default: _0x542015 };
  };
function a524_0x2056() {
  const _0x5c9b43 = [
    '1403874RprySb',
    'MESSAGE_NOT_FIND',
    'default',
    'defineProperty',
    '2478018WKJXXU',
    '11272izvLFd',
    '../../errors/AppError',
    '2780260TmrXvt',
    '4386PxTQvh',
    'findOne',
    '__esModule',
    '13776fXgsAC',
    '11277JxlNbh',
    '1724UvxYWN',
    '347512Civqib'
  ];
  a524_0x2056 = function () {
    return _0x5c9b43;
  };
  return a524_0x2056();
}
Object[a524_0x1fc75e(0x172)](exports, a524_0x1fc75e(0x179), { value: !![] });
const AppError_1 = __importDefault(require(a524_0x1fc75e(0x175))),
  Message_1 = __importDefault(require('../../models/Message')),
  GetMessageService = async ({ id: _0x1acc9c }) => {
    const _0x5f5af1 = a524_0x1fc75e,
      _0x480661 = await Message_1[_0x5f5af1(0x171)][_0x5f5af1(0x178)]({
        where: { id: _0x1acc9c }
      });
    if (!_0x480661) throw new AppError_1[_0x5f5af1(0x171)](_0x5f5af1(0x170));
    return _0x480661;
  };
exports['default'] = GetMessageService;
