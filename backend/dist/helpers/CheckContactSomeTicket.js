'use strict';
const a284_0x13e732 = a284_0x462c;
(function (_0x32f96e, _0x14a7d7) {
  const _0x3577fc = a284_0x462c,
    _0x236576 = _0x32f96e();
  while (!![]) {
    try {
      const _0x578dcc =
        parseInt(_0x3577fc(0xc4)) / 0x1 +
        (parseInt(_0x3577fc(0xb5)) / 0x2) * (-parseInt(_0x3577fc(0xbc)) / 0x3) +
        (-parseInt(_0x3577fc(0xb9)) / 0x4) * (parseInt(_0x3577fc(0xc2)) / 0x5) +
        (-parseInt(_0x3577fc(0xbd)) / 0x6) * (parseInt(_0x3577fc(0xbf)) / 0x7) +
        -parseInt(_0x3577fc(0xb4)) / 0x8 +
        (parseInt(_0x3577fc(0xbb)) / 0x9) * (parseInt(_0x3577fc(0xc1)) / 0xa) +
        (parseInt(_0x3577fc(0xbe)) / 0xb) * (parseInt(_0x3577fc(0xc3)) / 0xc);
      if (_0x578dcc === _0x14a7d7) break;
      else _0x236576['push'](_0x236576['shift']());
    } catch (_0x543ba9) {
      _0x236576['push'](_0x236576['shift']());
    }
  }
})(a284_0x225f, 0xc2a21);
var __importDefault =
  (this && this[a284_0x13e732(0xb7)]) ||
  function (_0x3e4c90) {
    const _0x5e3afa = a284_0x13e732;
    return _0x3e4c90 && _0x3e4c90[_0x5e3afa(0xc0)]
      ? _0x3e4c90
      : { default: _0x3e4c90 };
  };
Object['defineProperty'](exports, a284_0x13e732(0xc0), { value: !![] });
function a284_0x462c(_0xc65624, _0x4023a0) {
  const _0x225ff0 = a284_0x225f();
  return (
    (a284_0x462c = function (_0x462c0a, _0x3d6d7a) {
      _0x462c0a = _0x462c0a - 0xb3;
      let _0x58b007 = _0x225ff0[_0x462c0a];
      return _0x58b007;
    }),
    a284_0x462c(_0xc65624, _0x4023a0)
  );
}
function a284_0x225f() {
  const _0x27ff43 = [
    '845318RdJQxa',
    '../errors/AppError',
    '__importDefault',
    'ERR_OTHER_OPEN_TICKET',
    '50132fTtPIB',
    '../models/Ticket',
    '9rBfgqz',
    '3TNAEjv',
    '24672TYNape',
    '40073WEwJAw',
    '483jVDwhG',
    '__esModule',
    '1892470ULIGCB',
    '5RfEWHd',
    '4764pcTiBC',
    '1355684kNuKfz',
    'default',
    '11800520iYVuJh'
  ];
  a284_0x225f = function () {
    return _0x27ff43;
  };
  return a284_0x225f();
}
const AppError_1 = __importDefault(require(a284_0x13e732(0xb6))),
  Ticket_1 = __importDefault(require(a284_0x13e732(0xba))),
  CheckContactSomeTickets = async (_0x34bd82, _0x3aa0fa) => {
    const _0x44bce7 = a284_0x13e732,
      _0x3b21ee = await Ticket_1[_0x44bce7(0xb3)]['findOne']({
        where: { contactId: _0x34bd82, companyId: _0x3aa0fa }
      });
    if (_0x3b21ee) throw new AppError_1['default'](_0x44bce7(0xb8));
  };
exports[a284_0x13e732(0xb3)] = CheckContactSomeTickets;
