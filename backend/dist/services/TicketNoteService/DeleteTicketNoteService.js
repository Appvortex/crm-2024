'use strict';
function a613_0x2be3() {
  const _0x510b38 = [
    'default',
    '../../errors/AppError',
    '1061523OckgEl',
    '1413867vfARfr',
    '2460428dGVSAf',
    '1033028yklHSN',
    '61736drDJXa',
    '5iBaEaG',
    '5461448ZFpABT',
    '__esModule',
    '187271lCpbEf',
    'defineProperty',
    '72nMKoXc',
    'destroy',
    '130LBMAwD'
  ];
  a613_0x2be3 = function () {
    return _0x510b38;
  };
  return a613_0x2be3();
}
const a613_0x26acdb = a613_0x3999;
function a613_0x3999(_0x35e744, _0x4ed261) {
  const _0x2be3df = a613_0x2be3();
  return (
    (a613_0x3999 = function (_0x39998c, _0xdec488) {
      _0x39998c = _0x39998c - 0x13f;
      let _0x1fc76d = _0x2be3df[_0x39998c];
      return _0x1fc76d;
    }),
    a613_0x3999(_0x35e744, _0x4ed261)
  );
}
(function (_0x6b4322, _0x1161ab) {
  const _0x2b29a1 = a613_0x3999,
    _0x2e37fa = _0x6b4322();
  while (!![]) {
    try {
      const _0xf31ab5 =
        -parseInt(_0x2b29a1(0x13f)) / 0x1 +
        -parseInt(_0x2b29a1(0x14d)) / 0x2 +
        parseInt(_0x2b29a1(0x14b)) / 0x3 +
        (-parseInt(_0x2b29a1(0x14c)) / 0x4) *
          (parseInt(_0x2b29a1(0x140)) / 0x5) +
        (-parseInt(_0x2b29a1(0x145)) / 0x6) *
          (-parseInt(_0x2b29a1(0x143)) / 0x7) +
        -parseInt(_0x2b29a1(0x141)) / 0x8 +
        (-parseInt(_0x2b29a1(0x14a)) / 0x9) *
          (-parseInt(_0x2b29a1(0x147)) / 0xa);
      if (_0xf31ab5 === _0x1161ab) break;
      else _0x2e37fa['push'](_0x2e37fa['shift']());
    } catch (_0x464dc4) {
      _0x2e37fa['push'](_0x2e37fa['shift']());
    }
  }
})(a613_0x2be3, 0x6dc3e);
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x28c69c) {
    const _0xc81892 = a613_0x3999;
    return _0x28c69c && _0x28c69c[_0xc81892(0x142)]
      ? _0x28c69c
      : { default: _0x28c69c };
  };
Object[a613_0x26acdb(0x144)](exports, '__esModule', { value: !![] });
const TicketNote_1 = __importDefault(require('../../models/TicketNote')),
  AppError_1 = __importDefault(require(a613_0x26acdb(0x149))),
  DeleteTicketNoteService = async _0x4a6d8b => {
    const _0x366b20 = a613_0x26acdb,
      _0x246b5e = await TicketNote_1[_0x366b20(0x148)]['findOne']({
        where: { id: _0x4a6d8b }
      });
    if (!_0x246b5e)
      throw new AppError_1[_0x366b20(0x148)]('ERR_NO_TICKETNOTE_FOUND', 0x194);
    await _0x246b5e[_0x366b20(0x146)]();
  };
exports[a613_0x26acdb(0x148)] = DeleteTicketNoteService;
