'use strict';
const a463_0x65f13b = a463_0xf0fb;
(function (_0x17379e, _0x781cdc) {
  const _0x4973d8 = a463_0xf0fb,
    _0x2429d8 = _0x17379e();
  while (!![]) {
    try {
      const _0x54670e =
        -parseInt(_0x4973d8(0x194)) / 0x1 +
        (-parseInt(_0x4973d8(0x195)) / 0x2) *
          (parseInt(_0x4973d8(0x18f)) / 0x3) +
        (-parseInt(_0x4973d8(0x192)) / 0x4) *
          (-parseInt(_0x4973d8(0x190)) / 0x5) +
        (-parseInt(_0x4973d8(0x19b)) / 0x6) *
          (parseInt(_0x4973d8(0x19c)) / 0x7) +
        parseInt(_0x4973d8(0x199)) / 0x8 +
        (-parseInt(_0x4973d8(0x196)) / 0x9) *
          (parseInt(_0x4973d8(0x19f)) / 0xa) +
        (-parseInt(_0x4973d8(0x191)) / 0xb) *
          (-parseInt(_0x4973d8(0x18e)) / 0xc);
      if (_0x54670e === _0x781cdc) break;
      else _0x2429d8['push'](_0x2429d8['shift']());
    } catch (_0x53f585) {
      _0x2429d8['push'](_0x2429d8['shift']());
    }
  }
})(a463_0x3a23, 0x50a58);
var __importDefault =
  (this && this[a463_0x65f13b(0x19a)]) ||
  function (_0x4bf102) {
    return _0x4bf102 && _0x4bf102['__esModule']
      ? _0x4bf102
      : { default: _0x4bf102 };
  };
Object[a463_0x65f13b(0x193)](exports, a463_0x65f13b(0x197), { value: !![] });
const ContactListItem_1 = __importDefault(require(a463_0x65f13b(0x198))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  DeleteService = async _0x21c5a8 => {
    const _0x1a96a9 = a463_0x65f13b,
      _0x16ac59 = await ContactListItem_1['default'][_0x1a96a9(0x19d)]({
        where: { id: _0x21c5a8 }
      });
    if (!_0x16ac59)
      throw new AppError_1[_0x1a96a9(0x19e)](
        'ERR_NO_CONTACTLISTITEM_FOUND',
        0x194
      );
    await _0x16ac59[_0x1a96a9(0x18d)]();
  };
function a463_0xf0fb(_0x327cd4, _0x3e4944) {
  const _0x3a23ac = a463_0x3a23();
  return (
    (a463_0xf0fb = function (_0xf0fbcd, _0xf1765f) {
      _0xf0fbcd = _0xf0fbcd - 0x18d;
      let _0x3022de = _0x3a23ac[_0xf0fbcd];
      return _0x3022de;
    }),
    a463_0xf0fb(_0x327cd4, _0x3e4944)
  );
}
exports['default'] = DeleteService;
function a463_0x3a23() {
  const _0xc845fd = [
    '4lVAJKu',
    'defineProperty',
    '103820ponUid',
    '350DsMgGr',
    '9DAGmUl',
    '__esModule',
    '../../models/ContactListItem',
    '4773304ngqrLZ',
    '__importDefault',
    '316230gcqcML',
    '63sdjXqH',
    'findOne',
    'default',
    '3937070BUOzCz',
    'destroy',
    '47100gZfgIF',
    '11157MWcSrU',
    '2601685cFacro',
    '2343wZlsay'
  ];
  a463_0x3a23 = function () {
    return _0xc845fd;
  };
  return a463_0x3a23();
}
