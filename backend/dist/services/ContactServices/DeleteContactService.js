'use strict';
const a481_0x19d704 = a481_0x1705;
function a481_0xbd59() {
  const _0x556fa5 = [
    '194860fibShf',
    '633717NtzTKn',
    '1055tNOUvK',
    '7549956TlLDyq',
    '164yQvboy',
    '2089857LYPazY',
    '1522356dwjTgH',
    '../../errors/AppError',
    '16tVWSZi',
    '76362YPsizE',
    'defineProperty',
    'destroy',
    'default',
    '../../models/Contact',
    '__importDefault',
    'ERR_NO_CONTACT_FOUND'
  ];
  a481_0xbd59 = function () {
    return _0x556fa5;
  };
  return a481_0xbd59();
}
(function (_0x47d5d6, _0x4fc680) {
  const _0x2708ed = a481_0x1705,
    _0x3fc0b4 = _0x47d5d6();
  while (!![]) {
    try {
      const _0x97c0a8 =
        -parseInt(_0x2708ed(0x108)) / 0x1 +
        parseInt(_0x2708ed(0xfe)) / 0x2 +
        parseInt(_0x2708ed(0x109)) / 0x3 +
        (-parseInt(_0x2708ed(0xfc)) / 0x4) *
          (-parseInt(_0x2708ed(0x10a)) / 0x5) +
        parseInt(_0x2708ed(0x101)) / 0x6 +
        (-parseInt(_0x2708ed(0xfd)) / 0x7) *
          (-parseInt(_0x2708ed(0x100)) / 0x8) +
        -parseInt(_0x2708ed(0x10b)) / 0x9;
      if (_0x97c0a8 === _0x4fc680) break;
      else _0x3fc0b4['push'](_0x3fc0b4['shift']());
    } catch (_0x159e2d) {
      _0x3fc0b4['push'](_0x3fc0b4['shift']());
    }
  }
})(a481_0xbd59, 0x88061);
var __importDefault =
  (this && this[a481_0x19d704(0x106)]) ||
  function (_0x380309) {
    return _0x380309 && _0x380309['__esModule']
      ? _0x380309
      : { default: _0x380309 };
  };
Object[a481_0x19d704(0x102)](exports, '__esModule', { value: !![] });
function a481_0x1705(_0x271830, _0x51bbdf) {
  const _0xbd5924 = a481_0xbd59();
  return (
    (a481_0x1705 = function (_0x17050f, _0x5e6ae8) {
      _0x17050f = _0x17050f - 0xfc;
      let _0x747bc8 = _0xbd5924[_0x17050f];
      return _0x747bc8;
    }),
    a481_0x1705(_0x271830, _0x51bbdf)
  );
}
const Contact_1 = __importDefault(require(a481_0x19d704(0x105))),
  AppError_1 = __importDefault(require(a481_0x19d704(0xff))),
  DeleteContactService = async _0x5502fa => {
    const _0x4e02f9 = a481_0x19d704,
      _0x2dab0d = await Contact_1[_0x4e02f9(0x104)]['findOne']({
        where: { id: _0x5502fa }
      });
    if (!_0x2dab0d)
      throw new AppError_1[_0x4e02f9(0x104)](_0x4e02f9(0x107), 0x194);
    await _0x2dab0d[_0x4e02f9(0x103)]();
  };
exports[a481_0x19d704(0x104)] = DeleteContactService;
