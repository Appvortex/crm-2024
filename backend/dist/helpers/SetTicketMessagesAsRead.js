'use strict';
const a302_0x7a351a = a302_0x5ab7;
function a302_0x29c0() {
  const _0x2fa797 = [
    'dataJson',
    'getIO',
    'companyId',
    'channel',
    'status',
    'emit',
    'parse',
    ':unreads',
    'defineProperty',
    'readMessages',
    'notification',
    '-ticket',
    '4932914SyUlFN',
    './GetTicketWbot',
    'forEach',
    '../models/Message',
    '407104PGFEqi',
    'contacts:',
    '591701kTOHor',
    '1938jCZZQC',
    '11905360BstzAD',
    'default',
    'whatsapp',
    'contactId',
    'set',
    'isBot',
    'length',
    'update',
    '321075clpMuz',
    'isGroup',
    'warn',
    'createdAt',
    'DESC',
    '13885ZmkgiO',
    'Could\x20not\x20mark\x20messages\x20as\x20read.\x20Maybe\x20whatsapp\x20session\x20disconnected?\x20Err:\x20',
    '88136oEbtbm',
    'updateUnread',
    'log',
    '../libs/cache',
    'company-',
    'fromMe',
    'userId',
    '__esModule',
    'key'
  ];
  a302_0x29c0 = function () {
    return _0x2fa797;
  };
  return a302_0x29c0();
}
(function (_0x3afd1b, _0x4eb9e4) {
  const _0x3e9334 = a302_0x5ab7,
    _0x4e4da2 = _0x3afd1b();
  while (!![]) {
    try {
      const _0x181655 =
        parseInt(_0x3e9334(0x16f)) / 0x1 +
        parseInt(_0x3e9334(0x180)) / 0x2 +
        -parseInt(_0x3e9334(0x179)) / 0x3 +
        parseInt(_0x3e9334(0x16d)) / 0x4 +
        (-parseInt(_0x3e9334(0x17e)) / 0x5) *
          (parseInt(_0x3e9334(0x170)) / 0x6) +
        -parseInt(_0x3e9334(0x169)) / 0x7 +
        parseInt(_0x3e9334(0x171)) / 0x8;
      if (_0x181655 === _0x4eb9e4) break;
      else _0x4e4da2['push'](_0x4e4da2['shift']());
    } catch (_0x2cf1ab) {
      _0x4e4da2['push'](_0x4e4da2['shift']());
    }
  }
})(a302_0x29c0, 0x7e399);
function a302_0x5ab7(_0x5f83e2, _0x376926) {
  const _0x29c0c9 = a302_0x29c0();
  return (
    (a302_0x5ab7 = function (_0x5ab7ec, _0x44af27) {
      _0x5ab7ec = _0x5ab7ec - 0x165;
      let _0x369a25 = _0x29c0c9[_0x5ab7ec];
      return _0x369a25;
    }),
    a302_0x5ab7(_0x5f83e2, _0x376926)
  );
}
var __importDefault =
  (this && this['__importDefault']) ||
  function (_0x5a3534) {
    const _0x29b1e0 = a302_0x5ab7;
    return _0x5a3534 && _0x5a3534[_0x29b1e0(0x187)]
      ? _0x5a3534
      : { default: _0x5a3534 };
  };
Object[a302_0x7a351a(0x165)](exports, a302_0x7a351a(0x187), { value: !![] });
const cache_1 = __importDefault(require(a302_0x7a351a(0x183))),
  socket_1 = require('../libs/socket'),
  Message_1 = __importDefault(require(a302_0x7a351a(0x16c))),
  logger_1 = require('../utils/logger'),
  GetTicketWbot_1 = __importDefault(require(a302_0x7a351a(0x16a))),
  SetTicketMessagesAsRead = async _0x1529a7 => {
    const _0x53ac41 = a302_0x7a351a;
    !_0x1529a7[_0x53ac41(0x176)] &&
      (_0x1529a7['userId'] || _0x1529a7[_0x53ac41(0x17a)]) &&
      (await _0x1529a7['update']({ unreadMessages: 0x0 }),
      await cache_1[_0x53ac41(0x172)][_0x53ac41(0x175)](
        _0x53ac41(0x16e) + _0x1529a7[_0x53ac41(0x174)] + _0x53ac41(0x190),
        '0'
      ));
    if (_0x1529a7[_0x53ac41(0x18c)] === _0x53ac41(0x173))
      try {
        const _0x382626 = await (0x0, GetTicketWbot_1[_0x53ac41(0x172)])(
            _0x1529a7
          ),
          _0x4c21d7 = await Message_1[_0x53ac41(0x172)]['findAll']({
            where: { ticketId: _0x1529a7['id'], fromMe: ![], read: ![] },
            order: [[_0x53ac41(0x17c), _0x53ac41(0x17d)]]
          });
        _0x4c21d7[_0x53ac41(0x177)] > 0x0 &&
          _0x4c21d7[_0x53ac41(0x16b)](async _0x2e5c9b => {
            const _0x579f32 = _0x53ac41,
              _0x1e0340 = JSON[_0x579f32(0x18f)](_0x2e5c9b[_0x579f32(0x189)]);
            _0x1e0340[_0x579f32(0x188)] &&
              _0x1e0340[_0x579f32(0x188)][_0x579f32(0x185)] === ![] &&
              !_0x1529a7['isBot'] &&
              (_0x1529a7[_0x579f32(0x186)] || _0x1529a7[_0x579f32(0x17a)]) &&
              (await _0x382626[_0x579f32(0x166)]([
                _0x1e0340[_0x579f32(0x188)]
              ]));
          }),
          !_0x1529a7['isBot'] &&
            (_0x1529a7[_0x53ac41(0x186)] || _0x1529a7['isGroup']) &&
            (await Message_1['default'][_0x53ac41(0x178)](
              { read: !![] },
              { where: { ticketId: _0x1529a7['id'], read: ![] } }
            ));
      } catch (_0xf690d2) {
        console[_0x53ac41(0x182)](_0xf690d2),
          logger_1['logger'][_0x53ac41(0x17b)](_0x53ac41(0x17f) + _0xf690d2);
      }
    const _0xb5f0fc = (0x0, socket_1[_0x53ac41(0x18a)])();
    _0xb5f0fc['to'](_0x1529a7[_0x53ac41(0x18d)])
      ['to'](_0x53ac41(0x167))
      [_0x53ac41(0x18e)](
        _0x53ac41(0x184) + _0x1529a7[_0x53ac41(0x18b)] + _0x53ac41(0x168),
        { action: _0x53ac41(0x181), ticketId: _0x1529a7['id'] }
      );
  };
exports[a302_0x7a351a(0x172)] = SetTicketMessagesAsRead;
