'use strict';
const a570_0xd7016e = a570_0x32c6;
(function (_0x4dec0a, _0x1a5790) {
  const _0x3f0495 = a570_0x32c6,
    _0x205da0 = _0x4dec0a();
  while (!![]) {
    try {
      const _0x29026e =
        (-parseInt(_0x3f0495(0x17b)) / 0x1) *
          (-parseInt(_0x3f0495(0x172)) / 0x2) +
        (-parseInt(_0x3f0495(0x170)) / 0x3) *
          (parseInt(_0x3f0495(0x173)) / 0x4) +
        (parseInt(_0x3f0495(0x171)) / 0x5) *
          (-parseInt(_0x3f0495(0x179)) / 0x6) +
        (-parseInt(_0x3f0495(0x178)) / 0x7) *
          (parseInt(_0x3f0495(0x182)) / 0x8) +
        -parseInt(_0x3f0495(0x17f)) / 0x9 +
        (parseInt(_0x3f0495(0x17e)) / 0xa) *
          (parseInt(_0x3f0495(0x17c)) / 0xb) +
        parseInt(_0x3f0495(0x16e)) / 0xc;
      if (_0x29026e === _0x1a5790) break;
      else _0x205da0['push'](_0x205da0['shift']());
    } catch (_0x374b9d) {
      _0x205da0['push'](_0x205da0['shift']());
    }
  }
})(a570_0x1e22, 0x250ad);
var __importDefault =
  (this && this[a570_0xd7016e(0x181)]) ||
  function (_0x42c838) {
    return _0x42c838 && _0x42c838['__esModule']
      ? _0x42c838
      : { default: _0x42c838 };
  };
Object[a570_0xd7016e(0x16d)](exports, a570_0xd7016e(0x175), { value: !![] });
function a570_0x32c6(_0x19aeea, _0x91c9e5) {
  const _0x1e2227 = a570_0x1e22();
  return (
    (a570_0x32c6 = function (_0x32c617, _0x2c3200) {
      _0x32c617 = _0x32c617 - 0x16d;
      let _0x54007f = _0x1e2227[_0x32c617];
      return _0x54007f;
    }),
    a570_0x32c6(_0x19aeea, _0x91c9e5)
  );
}
function a570_0x1e22() {
  const _0x6398f5 = [
    'ERR_NO_PERMISSION',
    '__esModule',
    'visao',
    'findByPk',
    '7CRSHNT',
    '33954BdLwMK',
    '../../models/QuickMessage',
    '26eyLQjh',
    '2293258svyYIi',
    '../../errors/AppError',
    '10DnMENl',
    '2307627UzRvxC',
    'userId',
    '__importDefault',
    '1957624BpsayL',
    'default',
    'defineProperty',
    '5404896pWXLry',
    'geral',
    '39531oDakrI',
    '155bPoVLI',
    '15056doHvyK',
    '8MgNJiI'
  ];
  a570_0x1e22 = function () {
    return _0x6398f5;
  };
  return a570_0x1e22();
}
const AppError_1 = __importDefault(require(a570_0xd7016e(0x17d))),
  QuickMessage_1 = __importDefault(require(a570_0xd7016e(0x17a))),
  UpdateService = async _0x38f731 => {
    const _0x27dd12 = a570_0xd7016e,
      {
        id: _0x5756b9,
        shortcode: _0x1ba75d,
        message: _0x350cab,
        userId: _0x4b7acf,
        geral: _0x21e485,
        mediaPath: _0xb69b62,
        visao: _0x5d36b2
      } = _0x38f731,
      _0x41ea65 = await QuickMessage_1['default'][_0x27dd12(0x177)](_0x5756b9);
    if (!_0x41ea65)
      throw new AppError_1[_0x27dd12(0x183)]('ERR_NO_TICKETNOTE_FOUND', 0x194);
    if (
      !_0x41ea65[_0x27dd12(0x16f)] &&
      _0x41ea65[_0x27dd12(0x176)] &&
      _0x41ea65[_0x27dd12(0x180)] !== _0x4b7acf
    )
      throw new AppError_1[_0x27dd12(0x183)](_0x27dd12(0x174), 0x193);
    return (
      await _0x41ea65['update']({
        shortcode: _0x1ba75d,
        message: _0x350cab,
        userId: _0x4b7acf,
        geral: _0x21e485,
        mediaPath: _0xb69b62,
        visao: _0x5d36b2
      }),
      _0x41ea65
    );
  };
exports[a570_0xd7016e(0x183)] = UpdateService;
