'use strict';
function a605_0x2e48() {
  const _0x1184fe = [
    '24bkYsvc',
    '__importDefault',
    '__esModule',
    '454268tYVSdg',
    '1CoJaXs',
    '3022395ybLict',
    '24684720olixIv',
    '2623230EWuaZH',
    'default',
    '8562465jospiY',
    '../../errors/AppError',
    '2570505wiqDLM',
    '4jfcKdS',
    'defineProperty',
    '2067342fIUGrz',
    'destroy'
  ];
  a605_0x2e48 = function () {
    return _0x1184fe;
  };
  return a605_0x2e48();
}
const a605_0x2bcf2a = a605_0x41ee;
function a605_0x41ee(_0x1df970, _0x28d339) {
  const _0x2e487f = a605_0x2e48();
  return (
    (a605_0x41ee = function (_0x41eee6, _0x36c78d) {
      _0x41eee6 = _0x41eee6 - 0xd8;
      let _0xf51349 = _0x2e487f[_0x41eee6];
      return _0xf51349;
    }),
    a605_0x41ee(_0x1df970, _0x28d339)
  );
}
(function (_0x24a41b, _0x268e2d) {
  const _0x52cb09 = a605_0x41ee,
    _0x2e6ef5 = _0x24a41b();
  while (!![]) {
    try {
      const _0x339951 =
        (-parseInt(_0x52cb09(0xe1)) / 0x1) *
          (-parseInt(_0x52cb09(0xe0)) / 0x2) +
        -parseInt(_0x52cb09(0xe4)) / 0x3 +
        (-parseInt(_0x52cb09(0xd9)) / 0x4) *
          (-parseInt(_0x52cb09(0xe2)) / 0x5) +
        parseInt(_0x52cb09(0xdb)) / 0x6 +
        (-parseInt(_0x52cb09(0xd8)) / 0x7) * (parseInt(_0x52cb09(0xdd)) / 0x8) +
        -parseInt(_0x52cb09(0xe6)) / 0x9 +
        parseInt(_0x52cb09(0xe3)) / 0xa;
      if (_0x339951 === _0x268e2d) break;
      else _0x2e6ef5['push'](_0x2e6ef5['shift']());
    } catch (_0xa7f1c4) {
      _0x2e6ef5['push'](_0x2e6ef5['shift']());
    }
  }
})(a605_0x2e48, 0xaf192);
var __importDefault =
  (this && this[a605_0x2bcf2a(0xde)]) ||
  function (_0x49ccbf) {
    const _0x5b3f76 = a605_0x2bcf2a;
    return _0x49ccbf && _0x49ccbf[_0x5b3f76(0xdf)]
      ? _0x49ccbf
      : { default: _0x49ccbf };
  };
Object[a605_0x2bcf2a(0xda)](exports, '__esModule', { value: !![] });
const Tag_1 = __importDefault(require('../../models/Tag')),
  AppError_1 = __importDefault(require(a605_0x2bcf2a(0xe7))),
  DeleteService = async _0x4cc063 => {
    const _0x2b633b = a605_0x2bcf2a,
      _0x445419 = await Tag_1['default']['findOne']({
        where: { id: _0x4cc063 }
      });
    if (!_0x445419)
      throw new AppError_1[_0x2b633b(0xe5)]('ERR_NO_TAG_FOUND', 0x194);
    await _0x445419[_0x2b633b(0xdc)]();
  };
exports[a605_0x2bcf2a(0xe5)] = DeleteService;
