'use strict';
const a663_0x3f2111 = a663_0x6c69;
function a663_0x1a56() {
  const _0x4fb64f = [
    '5798673JEjGCf',
    '__esModule',
    '30djkcfU',
    'destroy',
    '330796xYAjVu',
    'findOne',
    '__importDefault',
    '../../models/Whatsapp',
    '5jAQpGk',
    '4qvOCdS',
    'default',
    '7767808ftDXZD',
    '2852256rqoewv',
    '183669mkhwXV',
    '8317456lVepYm',
    '1261660hECbQp'
  ];
  a663_0x1a56 = function () {
    return _0x4fb64f;
  };
  return a663_0x1a56();
}
(function (_0xb16b3, _0x29cb87) {
  const _0x12708f = a663_0x6c69,
    _0x4e2653 = _0xb16b3();
  while (!![]) {
    try {
      const _0x3a17de =
        -parseInt(_0x12708f(0xd1)) / 0x1 +
        -parseInt(_0x12708f(0xd6)) / 0x2 +
        (-parseInt(_0x12708f(0xcf)) / 0x3) *
          (-parseInt(_0x12708f(0xdb)) / 0x4) +
        (parseInt(_0x12708f(0xda)) / 0x5) * (parseInt(_0x12708f(0xde)) / 0x6) +
        -parseInt(_0x12708f(0xd0)) / 0x7 +
        parseInt(_0x12708f(0xdd)) / 0x8 +
        (parseInt(_0x12708f(0xd2)) / 0x9) * (parseInt(_0x12708f(0xd4)) / 0xa);
      if (_0x3a17de === _0x29cb87) break;
      else _0x4e2653['push'](_0x4e2653['shift']());
    } catch (_0x28aeb4) {
      _0x4e2653['push'](_0x4e2653['shift']());
    }
  }
})(a663_0x1a56, 0xc9770);
var __importDefault =
  (this && this[a663_0x3f2111(0xd8)]) ||
  function (_0xd9f5e) {
    return _0xd9f5e && _0xd9f5e['__esModule']
      ? _0xd9f5e
      : { default: _0xd9f5e };
  };
function a663_0x6c69(_0x32c4b2, _0x11953a) {
  const _0x1a5689 = a663_0x1a56();
  return (
    (a663_0x6c69 = function (_0x6c6997, _0x48953b) {
      _0x6c6997 = _0x6c6997 - 0xcf;
      let _0x1dc64c = _0x1a5689[_0x6c6997];
      return _0x1dc64c;
    }),
    a663_0x6c69(_0x32c4b2, _0x11953a)
  );
}
Object['defineProperty'](exports, a663_0x3f2111(0xd3), { value: !![] });
const Whatsapp_1 = __importDefault(require(a663_0x3f2111(0xd9))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  DeleteWhatsAppService = async _0x2e6ee8 => {
    const _0x59327e = a663_0x3f2111,
      _0x58a208 = await Whatsapp_1[_0x59327e(0xdc)][_0x59327e(0xd7)]({
        where: { id: _0x2e6ee8 }
      });
    if (!_0x58a208)
      throw new AppError_1[_0x59327e(0xdc)]('ERR_NO_WAPP_FOUND', 0x194);
    await _0x58a208[_0x59327e(0xd5)]();
  };
exports[a663_0x3f2111(0xdc)] = DeleteWhatsAppService;
