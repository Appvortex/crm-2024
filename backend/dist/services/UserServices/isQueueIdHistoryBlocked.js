'use strict';
const a642_0x3a9d30 = a642_0x5233;
(function (_0x40b35c, _0x1f1fab) {
  const _0x5617ba = a642_0x5233,
    _0x5bac81 = _0x40b35c();
  while (!![]) {
    try {
      const _0xfeac2a =
        (-parseInt(_0x5617ba(0x169)) / 0x1) *
          (-parseInt(_0x5617ba(0x15d)) / 0x2) +
        -parseInt(_0x5617ba(0x162)) / 0x3 +
        parseInt(_0x5617ba(0x165)) / 0x4 +
        -parseInt(_0x5617ba(0x167)) / 0x5 +
        parseInt(_0x5617ba(0x163)) / 0x6 +
        (-parseInt(_0x5617ba(0x15e)) / 0x7) *
          (parseInt(_0x5617ba(0x15b)) / 0x8) +
        -parseInt(_0x5617ba(0x16a)) / 0x9;
      if (_0xfeac2a === _0x1f1fab) break;
      else _0x5bac81['push'](_0x5bac81['shift']());
    } catch (_0x238f22) {
      _0x5bac81['push'](_0x5bac81['shift']());
    }
  }
})(a642_0x3896, 0x62f5c);
var __importDefault =
  (this && this[a642_0x3a9d30(0x166)]) ||
  function (_0x4ec367) {
    const _0x3e0c80 = a642_0x3a9d30;
    return _0x4ec367 && _0x4ec367[_0x3e0c80(0x160)]
      ? _0x4ec367
      : { default: _0x4ec367 };
  };
function a642_0x3896() {
  const _0xd882b = [
    'findByPk',
    '1caDIvp',
    '3177585KsKEqx',
    'allHistoric',
    '../../models/User',
    '2634536hZbdPq',
    'default',
    '1472802cruiQs',
    '7ZOoDCX',
    'ERR_NO_USER_FOUND',
    '__esModule',
    'enabled',
    '1625250oKyYOv',
    '3927918FIflYB',
    '../../errors/AppError',
    '2692140kBFCuf',
    '__importDefault',
    '2173085oLafhw'
  ];
  a642_0x3896 = function () {
    return _0xd882b;
  };
  return a642_0x3896();
}
Object['defineProperty'](exports, a642_0x3a9d30(0x160), { value: !![] });
const User_1 = __importDefault(require(a642_0x3a9d30(0x15a))),
  AppError_1 = __importDefault(require(a642_0x3a9d30(0x164))),
  isQueueIdHistoryBlocked = async ({ userRequest: _0x2b6715 }) => {
    const _0x37ffd6 = a642_0x3a9d30;
    if (!_0x2b6715)
      throw new AppError_1[_0x37ffd6(0x15c)](_0x37ffd6(0x15f), 0x194);
    const _0x1115fd =
      await User_1[_0x37ffd6(0x15c)][_0x37ffd6(0x168)](_0x2b6715);
    if (!_0x1115fd)
      throw new AppError_1[_0x37ffd6(0x15c)](_0x37ffd6(0x15f), 0x194);
    return _0x1115fd[_0x37ffd6(0x16b)] === _0x37ffd6(0x161);
  };
function a642_0x5233(_0x54f566, _0x15a18f) {
  const _0x3896de = a642_0x3896();
  return (
    (a642_0x5233 = function (_0x523390, _0x24679c) {
      _0x523390 = _0x523390 - 0x15a;
      let _0x35d11a = _0x3896de[_0x523390];
      return _0x35d11a;
    }),
    a642_0x5233(_0x54f566, _0x15a18f)
  );
}
exports[a642_0x3a9d30(0x15c)] = isQueueIdHistoryBlocked;
