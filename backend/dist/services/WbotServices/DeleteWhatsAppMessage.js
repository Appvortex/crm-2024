'use strict';
const a647_0x46d34d = a647_0x5d71;
(function (_0x217a3f, _0x31eb30) {
  const _0x4ce6b5 = a647_0x5d71,
    _0x48d083 = _0x217a3f();
  while (!![]) {
    try {
      const _0xd64e54 =
        parseInt(_0x4ce6b5(0x1dd)) / 0x1 +
        -parseInt(_0x4ce6b5(0x1c8)) / 0x2 +
        (parseInt(_0x4ce6b5(0x1d4)) / 0x3) *
          (-parseInt(_0x4ce6b5(0x1ce)) / 0x4) +
        (-parseInt(_0x4ce6b5(0x1de)) / 0x5) *
          (parseInt(_0x4ce6b5(0x1e0)) / 0x6) +
        parseInt(_0x4ce6b5(0x1d1)) / 0x7 +
        (-parseInt(_0x4ce6b5(0x1d0)) / 0x8) *
          (-parseInt(_0x4ce6b5(0x1d6)) / 0x9) +
        parseInt(_0x4ce6b5(0x1c7)) / 0xa;
      if (_0xd64e54 === _0x31eb30) break;
      else _0x48d083['push'](_0x48d083['shift']());
    } catch (_0x43a4d2) {
      _0x48d083['push'](_0x48d083['shift']());
    }
  }
})(a647_0x3ca2, 0xc80ff);
function a647_0x5d71(_0x12bf4b, _0xc1f101) {
  const _0x3ca262 = a647_0x3ca2();
  return (
    (a647_0x5d71 = function (_0x5d718f, _0x1d3d81) {
      _0x5d718f = _0x5d718f - 0x1c5;
      let _0x2d29eb = _0x3ca262[_0x5d718f];
      return _0x2d29eb;
    }),
    a647_0x5d71(_0x12bf4b, _0xc1f101)
  );
}
var __importDefault =
  (this && this[a647_0x46d34d(0x1c6)]) ||
  function (_0x5a7385) {
    return _0x5a7385 && _0x5a7385['__esModule']
      ? _0x5a7385
      : { default: _0x5a7385 };
  };
Object[a647_0x46d34d(0x1ca)](exports, a647_0x46d34d(0x1db), { value: !![] });
const AppError_1 = __importDefault(require(a647_0x46d34d(0x1d2))),
  GetTicketWbot_1 = __importDefault(require('../../helpers/GetTicketWbot')),
  GetWbotMessage_1 = __importDefault(require(a647_0x46d34d(0x1cf))),
  Message_1 = __importDefault(require(a647_0x46d34d(0x1df))),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  DeleteWhatsAppMessage = async _0x1b00dc => {
    const _0x467084 = a647_0x46d34d,
      _0x4fa617 = await Message_1[_0x467084(0x1cb)][_0x467084(0x1d3)]({
        where: { id: _0x1b00dc },
        include: [
          {
            model: Ticket_1[_0x467084(0x1cb)],
            as: _0x467084(0x1d8),
            include: [_0x467084(0x1da)]
          }
        ]
      });
    if (!_0x4fa617) throw new AppError_1[_0x467084(0x1cb)](_0x467084(0x1dc));
    const { ticket: _0x3ac821 } = _0x4fa617;
    if (!_0x4fa617['isPrivate']) {
      const _0x53900e = await (0x0, GetWbotMessage_1['default'])(
        _0x3ac821,
        _0x1b00dc
      );
      try {
        const _0x28182e = await (0x0, GetTicketWbot_1[_0x467084(0x1cb)])(
            _0x3ac821
          ),
          _0x5aa356 = _0x53900e,
          _0x849dd7 = JSON[_0x467084(0x1e1)](_0x5aa356[_0x467084(0x1c5)]);
        await _0x28182e[_0x467084(0x1d7)](_0x5aa356[_0x467084(0x1c9)], {
          delete: _0x849dd7['key']
        });
      } catch (_0x11fe42) {
        console[_0x467084(0x1d5)](_0x11fe42);
        throw new AppError_1[_0x467084(0x1cb)](_0x467084(0x1cc));
      }
    }
    return (
      !_0x4fa617[_0x467084(0x1cd)] &&
        (await _0x4fa617[_0x467084(0x1d9)]({ isDeleted: !![] })),
      _0x4fa617
    );
  };
exports[a647_0x46d34d(0x1cb)] = DeleteWhatsAppMessage;
function a647_0x3ca2() {
  const _0x42866a = [
    'ERR_DELETE_WAPP_MSG',
    'isPrivate',
    '4tQTxJD',
    '../../helpers/GetWbotMessage',
    '3376rWWHKU',
    '10057901rosgus',
    '../../errors/AppError',
    'findOne',
    '3967311PaTiSm',
    'log',
    '4761KtiWHc',
    'sendMessage',
    'ticket',
    'update',
    'contact',
    '__esModule',
    'No\x20se\x20encontró\x20ningún\x20mensaje\x20con\x20este\x20ID.',
    '1168141VVjlkP',
    '409210ZsRRjj',
    '../../models/Message',
    '102gVykSz',
    'parse',
    'dataJson',
    '__importDefault',
    '23298140XrHsje',
    '3249660vSIqbw',
    'remoteJid',
    'defineProperty',
    'default'
  ];
  a647_0x3ca2 = function () {
    return _0x42866a;
  };
  return a647_0x3ca2();
}
