'use strict';
const a303_0x2f7077 = a303_0x1ccb;
(function (_0xc42a, _0x3c1834) {
  const _0x47ed9b = a303_0x1ccb,
    _0x3cebe4 = _0xc42a();
  while (!![]) {
    try {
      const _0x3534cb =
        (parseInt(_0x47ed9b(0x126)) / 0x1) *
          (-parseInt(_0x47ed9b(0x12d)) / 0x2) +
        (-parseInt(_0x47ed9b(0x133)) / 0x3) *
          (parseInt(_0x47ed9b(0x125)) / 0x4) +
        -parseInt(_0x47ed9b(0x132)) / 0x5 +
        parseInt(_0x47ed9b(0x12f)) / 0x6 +
        -parseInt(_0x47ed9b(0x12b)) / 0x7 +
        -parseInt(_0x47ed9b(0x127)) / 0x8 +
        (parseInt(_0x47ed9b(0x130)) / 0x9) * (parseInt(_0x47ed9b(0x12a)) / 0xa);
      if (_0x3534cb === _0x3c1834) break;
      else _0x3cebe4['push'](_0x3cebe4['shift']());
    } catch (_0x5a097c) {
      _0x3cebe4['push'](_0x3cebe4['shift']());
    }
  }
})(a303_0x5b6e, 0xb178d);
function a303_0x5b6e() {
  const _0x18e5be = [
    '399186ahjVSa',
    'toString',
    '60240zttdIy',
    '3HtDBBJ',
    'forEach',
    'default',
    '3683864VVRqDd',
    '539351gbhepR',
    '10506712qrkDzJ',
    '__importDefault',
    'defineProperty',
    '1010zZQujd',
    '6837999CURjUU',
    'pending',
    '4OILAwV',
    '../services/TicketServices/UpdateTicketService',
    '3294498mfpJJc'
  ];
  a303_0x5b6e = function () {
    return _0x18e5be;
  };
  return a303_0x5b6e();
}
var __importDefault =
  (this && this[a303_0x2f7077(0x128)]) ||
  function (_0xd82723) {
    return _0xd82723 && _0xd82723['__esModule']
      ? _0xd82723
      : { default: _0xd82723 };
  };
Object[a303_0x2f7077(0x129)](exports, '__esModule', { value: !![] });
function a303_0x1ccb(_0x5dedc9, _0xdc78dd) {
  const _0x5b6eea = a303_0x5b6e();
  return (
    (a303_0x1ccb = function (_0x1ccb5d, _0x121901) {
      _0x1ccb5d = _0x1ccb5d - 0x123;
      let _0x256f22 = _0x5b6eea[_0x1ccb5d];
      return _0x256f22;
    }),
    a303_0x1ccb(_0x5dedc9, _0xdc78dd)
  );
}
const UpdateTicketService_1 = __importDefault(require(a303_0x2f7077(0x12e))),
  UpdateDeletedUserOpenTicketsStatus = async (_0x15cd88, _0x100107) => {
    const _0x4cfe13 = a303_0x2f7077;
    _0x15cd88[_0x4cfe13(0x123)](async _0x4d3c7c => {
      const _0x466231 = _0x4cfe13,
        _0x3b063c = _0x4d3c7c['id'][_0x466231(0x131)]();
      await (0x0, UpdateTicketService_1['default'])({
        ticketData: { status: _0x466231(0x12c) },
        ticketId: _0x3b063c,
        companyId: _0x100107
      });
    });
  };
exports[a303_0x2f7077(0x124)] = UpdateDeletedUserOpenTicketsStatus;
