'use strict';
function a618_0x36c2(_0xdcd199, _0xd191bd) {
  const _0x214082 = a618_0x2140();
  return (
    (a618_0x36c2 = function (_0x36c233, _0x4665eb) {
      _0x36c233 = _0x36c233 - 0xe7;
      let _0x1be68d = _0x214082[_0x36c233];
      return _0x1be68d;
    }),
    a618_0x36c2(_0xdcd199, _0xd191bd)
  );
}
const a618_0xda7938 = a618_0x36c2;
(function (_0x351916, _0x21382d) {
  const _0x1625fc = a618_0x36c2,
    _0x420301 = _0x351916();
  while (!![]) {
    try {
      const _0xdeaa7d =
        (parseInt(_0x1625fc(0xf4)) / 0x1) * (parseInt(_0x1625fc(0xf2)) / 0x2) +
        parseInt(_0x1625fc(0xf6)) / 0x3 +
        (-parseInt(_0x1625fc(0xf7)) / 0x4) * (parseInt(_0x1625fc(0xea)) / 0x5) +
        (parseInt(_0x1625fc(0xee)) / 0x6) * (parseInt(_0x1625fc(0xf1)) / 0x7) +
        (-parseInt(_0x1625fc(0xe7)) / 0x8) * (parseInt(_0x1625fc(0xf0)) / 0x9) +
        parseInt(_0x1625fc(0xef)) / 0xa +
        -parseInt(_0x1625fc(0xe9)) / 0xb;
      if (_0xdeaa7d === _0x21382d) break;
      else _0x420301['push'](_0x420301['shift']());
    } catch (_0x4a0f4e) {
      _0x420301['push'](_0x420301['shift']());
    }
  }
})(a618_0x2140, 0x476c0);
function a618_0x2140() {
  const _0x269347 = [
    '4550DTOMaI',
    '__importDefault',
    'findByPk',
    'update',
    '2855118iwAqOd',
    '1882040mlIHtn',
    '9ETDauW',
    '7brbhWF',
    '10pyhgAs',
    '__esModule',
    '29663giQaMI',
    'defineProperty',
    '235737lbMfVH',
    '1336LttMBp',
    'ERR_NO_TICKETNOTE_FOUND',
    '444040uGeIoc',
    'default',
    '2628582hBCvdf'
  ];
  a618_0x2140 = function () {
    return _0x269347;
  };
  return a618_0x2140();
}
var __importDefault =
  (this && this[a618_0xda7938(0xeb)]) ||
  function (_0x49679a) {
    const _0x2382f9 = a618_0xda7938;
    return _0x49679a && _0x49679a[_0x2382f9(0xf3)]
      ? _0x49679a
      : { default: _0x49679a };
  };
Object[a618_0xda7938(0xf5)](exports, '__esModule', { value: !![] });
const AppError_1 = __importDefault(require('../../errors/AppError')),
  TicketNote_1 = __importDefault(require('../../models/TicketNote')),
  UpdateTicketNoteService = async _0x690194 => {
    const _0x1dbdf0 = a618_0xda7938,
      { id: _0xef615a, note: _0x9293a5 } = _0x690194,
      _0x2e4431 =
        await TicketNote_1[_0x1dbdf0(0xe8)][_0x1dbdf0(0xec)](_0xef615a);
    if (!_0x2e4431) throw new AppError_1['default'](_0x1dbdf0(0xf8), 0x194);
    return await _0x2e4431[_0x1dbdf0(0xed)]({ note: _0x9293a5 }), _0x2e4431;
  };
exports['default'] = UpdateTicketNoteService;
