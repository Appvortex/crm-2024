'use strict';
const a527_0x41a6ec = a527_0x643a;
(function (_0x492a44, _0x5098b6) {
  const _0x27e03f = a527_0x643a,
    _0x424335 = _0x492a44();
  while (!![]) {
    try {
      const _0xbd119f =
        (-parseInt(_0x27e03f(0x1da)) / 0x1) *
          (parseInt(_0x27e03f(0x1dc)) / 0x2) +
        parseInt(_0x27e03f(0x1d7)) / 0x3 +
        (parseInt(_0x27e03f(0x1db)) / 0x4) *
          (-parseInt(_0x27e03f(0x1de)) / 0x5) +
        parseInt(_0x27e03f(0x1ea)) / 0x6 +
        parseInt(_0x27e03f(0x1d6)) / 0x7 +
        (parseInt(_0x27e03f(0x1e3)) / 0x8) *
          (-parseInt(_0x27e03f(0x1e9)) / 0x9) +
        parseInt(_0x27e03f(0x1d5)) / 0xa;
      if (_0xbd119f === _0x5098b6) break;
      else _0x424335['push'](_0x424335['shift']());
    } catch (_0x45eaf2) {
      _0x424335['push'](_0x424335['shift']());
    }
  }
})(a527_0x251f, 0x25a93);
function a527_0x643a(_0x45b15f, _0x49477f) {
  const _0x251f1e = a527_0x251f();
  return (
    (a527_0x643a = function (_0x643aac, _0x19f515) {
      _0x643aac = _0x643aac - 0x1d5;
      let _0x38c230 = _0x251f1e[_0x643aac];
      return _0x38c230;
    }),
    a527_0x643a(_0x45b15f, _0x49477f)
  );
}
var __importDefault =
  (this && this[a527_0x41a6ec(0x1e8)]) ||
  function (_0x1568a0) {
    const _0x584772 = a527_0x41a6ec;
    return _0x1568a0 && _0x1568a0[_0x584772(0x1e2)]
      ? _0x1568a0
      : { default: _0x1568a0 };
  };
Object[a527_0x41a6ec(0x1e4)](exports, a527_0x41a6ec(0x1e2), { value: !![] }),
  (exports[a527_0x41a6ec(0x1e5)] = void 0x0);
const database_1 = __importDefault(require(a527_0x41a6ec(0x1df))),
  Message_1 = __importDefault(require(a527_0x41a6ec(0x1e6))),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  ShowMessageService = async _0x10820d => {
    const _0xe38ba3 = a527_0x41a6ec,
      _0x4d52b1 = await database_1[_0xe38ba3(0x1d8)][_0xe38ba3(0x1e7)](
        _0xe38ba3(0x1e1) + _0x10820d + '\x27',
        { model: Message_1[_0xe38ba3(0x1d8)], mapToModel: !![] }
      );
    if (_0x4d52b1[_0xe38ba3(0x1e0)] > 0x0) return _0x4d52b1[0x0];
    return undefined;
  },
  GetWhatsAppFromMessage = async _0x48d6d6 => {
    const _0x3aae3b = a527_0x41a6ec,
      _0xbac5af = _0x48d6d6[_0x3aae3b(0x1dd)],
      _0x42183a = await Ticket_1[_0x3aae3b(0x1d8)][_0x3aae3b(0x1d9)](_0xbac5af);
    if (!_0x42183a) return null;
    return _0x42183a['whatsappId'];
  };
function a527_0x251f() {
  const _0x1a0076 = [
    '3896glJEDf',
    '54518tJcqKo',
    'ticketId',
    '50ngVPvA',
    '../../database',
    'length',
    'select\x20*\x20from\x20\x22Messages\x22\x20where\x20id\x20=\x20\x27',
    '__esModule',
    '183448DMiEPN',
    'defineProperty',
    'GetWhatsAppFromMessage',
    '../../models/Message',
    'query',
    '__importDefault',
    '63FnGNxZ',
    '91734FsHmJU',
    '3178270uMsZBU',
    '180950ITVabv',
    '714420bswJYF',
    'default',
    'findByPk',
    '10WJbgjW'
  ];
  a527_0x251f = function () {
    return _0x1a0076;
  };
  return a527_0x251f();
}
(exports[a527_0x41a6ec(0x1e5)] = GetWhatsAppFromMessage),
  (exports['default'] = ShowMessageService);
