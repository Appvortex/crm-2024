'use strict';
const a621_0x28c49f = a621_0x2abc;
function a621_0x2abc(_0x3f5dfd, _0x14773b) {
  const _0x35db34 = a621_0x35db();
  return (
    (a621_0x2abc = function (_0x2abcc6, _0x547c57) {
      _0x2abcc6 = _0x2abcc6 - 0x15a;
      let _0x2c5b82 = _0x35db34[_0x2abcc6];
      return _0x2c5b82;
    }),
    a621_0x2abc(_0x3f5dfd, _0x14773b)
  );
}
(function (_0x326675, _0x498aa9) {
  const _0xa57dc7 = a621_0x2abc,
    _0x2c0749 = _0x326675();
  while (!![]) {
    try {
      const _0x37d307 =
        (parseInt(_0xa57dc7(0x16c)) / 0x1) *
          (-parseInt(_0xa57dc7(0x16b)) / 0x2) +
        (parseInt(_0xa57dc7(0x167)) / 0x3) *
          (-parseInt(_0xa57dc7(0x15a)) / 0x4) +
        -parseInt(_0xa57dc7(0x15e)) / 0x5 +
        (parseInt(_0xa57dc7(0x163)) / 0x6) *
          (parseInt(_0xa57dc7(0x169)) / 0x7) +
        -parseInt(_0xa57dc7(0x15d)) / 0x8 +
        parseInt(_0xa57dc7(0x168)) / 0x9 +
        (-parseInt(_0xa57dc7(0x160)) / 0xa) *
          (-parseInt(_0xa57dc7(0x15f)) / 0xb);
      if (_0x37d307 === _0x498aa9) break;
      else _0x2c0749['push'](_0x2c0749['shift']());
    } catch (_0x2db653) {
      _0x2c0749['push'](_0x2c0749['shift']());
    }
  }
})(a621_0x35db, 0x37d89);
function a621_0x35db() {
  const _0x348abd = [
    '705475gJkQvL',
    '979PCPcFX',
    '94890xobVJR',
    '__esModule',
    'default',
    '216mLpdsK',
    '../../errors/AppError',
    '../../models/Ticket',
    'defineProperty',
    '186SpLRki',
    '1826991ggFpZl',
    '39844ZQyQcT',
    'findOne',
    '71428ijECng',
    '5KRyAJw',
    '22368fxZfzZ',
    'destroy',
    '__importDefault',
    '2858544bYgQiG'
  ];
  a621_0x35db = function () {
    return _0x348abd;
  };
  return a621_0x35db();
}
var __importDefault =
  (this && this[a621_0x28c49f(0x15c)]) ||
  function (_0x2e588d) {
    const _0x287972 = a621_0x28c49f;
    return _0x2e588d && _0x2e588d[_0x287972(0x161)]
      ? _0x2e588d
      : { default: _0x2e588d };
  };
Object[a621_0x28c49f(0x166)](exports, a621_0x28c49f(0x161), { value: !![] });
const Ticket_1 = __importDefault(require(a621_0x28c49f(0x165))),
  AppError_1 = __importDefault(require(a621_0x28c49f(0x164))),
  DeleteTicketService = async (_0x5c719c, _0x3bfe48, _0x6bdcc0) => {
    const _0x48063f = a621_0x28c49f,
      _0x57a03a = await Ticket_1[_0x48063f(0x162)][_0x48063f(0x16a)]({
        where: { id: _0x5c719c }
      });
    if (!_0x57a03a)
      throw new AppError_1[_0x48063f(0x162)]('ERR_NO_TICKET_FOUND', 0x194);
    return await _0x57a03a[_0x48063f(0x15b)](), _0x57a03a;
  };
exports[a621_0x28c49f(0x162)] = DeleteTicketService;
