'use strict';
const a285_0x4d0d38 = a285_0x1c01;
(function (_0x15068d, _0x25b018) {
  const _0x1f76fd = a285_0x1c01,
    _0x5b2542 = _0x15068d();
  while (!![]) {
    try {
      const _0x3efa8f =
        parseInt(_0x1f76fd(0x117)) / 0x1 +
        parseInt(_0x1f76fd(0x114)) / 0x2 +
        parseInt(_0x1f76fd(0x111)) / 0x3 +
        -parseInt(_0x1f76fd(0x119)) / 0x4 +
        parseInt(_0x1f76fd(0x112)) / 0x5 +
        (-parseInt(_0x1f76fd(0x11b)) / 0x6) *
          (parseInt(_0x1f76fd(0x118)) / 0x7) +
        parseInt(_0x1f76fd(0x113)) / 0x8;
      if (_0x3efa8f === _0x25b018) break;
      else _0x5b2542['push'](_0x5b2542['shift']());
    } catch (_0x56157b) {
      _0x5b2542['push'](_0x5b2542['shift']());
    }
  }
})(a285_0x2eff, 0x19326);
function a285_0x2eff() {
  const _0x4d2d55 = [
    'findOne',
    '269226EwjFAQ',
    'ERR_NO_SETTING_FOUND',
    '__importDefault',
    'value',
    '416937riitel',
    '92650xuChQF',
    '1976136zKriFZ',
    '46832TOVJsR',
    '__esModule',
    'default',
    '21NQDbiP',
    '21rCXfGE',
    '760576ZDCtIc'
  ];
  a285_0x2eff = function () {
    return _0x4d2d55;
  };
  return a285_0x2eff();
}
var __importDefault =
  (this && this[a285_0x4d0d38(0x11d)]) ||
  function (_0x1b7488) {
    const _0x5e36e7 = a285_0x4d0d38;
    return _0x1b7488 && _0x1b7488[_0x5e36e7(0x115)]
      ? _0x1b7488
      : { default: _0x1b7488 };
  };
Object['defineProperty'](exports, a285_0x4d0d38(0x115), { value: !![] });
function a285_0x1c01(_0x21f329, _0x42265d) {
  const _0x2effe1 = a285_0x2eff();
  return (
    (a285_0x1c01 = function (_0x1c01d0, _0x1ef68f) {
      _0x1c01d0 = _0x1c01d0 - 0x111;
      let _0x5b8fa7 = _0x2effe1[_0x1c01d0];
      return _0x5b8fa7;
    }),
    a285_0x1c01(_0x21f329, _0x42265d)
  );
}
const Setting_1 = __importDefault(require('../models/Setting')),
  AppError_1 = __importDefault(require('../errors/AppError')),
  CheckSettings = async _0x5f5d48 => {
    const _0x18407f = a285_0x4d0d38,
      _0xb94b21 = await Setting_1['default'][_0x18407f(0x11a)]({
        where: { key: _0x5f5d48 }
      });
    if (!_0xb94b21)
      throw new AppError_1[_0x18407f(0x116)](_0x18407f(0x11c), 0x194);
    return _0xb94b21[_0x18407f(0x11e)];
  };
exports[a285_0x4d0d38(0x116)] = CheckSettings;
