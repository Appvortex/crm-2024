'use strict';
function a664_0x2af9(_0x3996af, _0x2078d4) {
  const _0x59728b = a664_0x5972();
  return (
    (a664_0x2af9 = function (_0x2af932, _0x2e3b03) {
      _0x2af932 = _0x2af932 - 0x72;
      let _0x34eadb = _0x59728b[_0x2af932];
      return _0x34eadb;
    }),
    a664_0x2af9(_0x3996af, _0x2078d4)
  );
}
const a664_0x5e8012 = a664_0x2af9;
(function (_0x8576b1, _0x9fd04) {
  const _0x1a5bfe = a664_0x2af9,
    _0x368701 = _0x8576b1();
  while (!![]) {
    try {
      const _0x3405ff =
        parseInt(_0x1a5bfe(0xa8)) / 0x1 +
        -parseInt(_0x1a5bfe(0x76)) / 0x2 +
        (-parseInt(_0x1a5bfe(0x7c)) / 0x3) *
          (-parseInt(_0x1a5bfe(0x72)) / 0x4) +
        (parseInt(_0x1a5bfe(0xa6)) / 0x5) * (parseInt(_0x1a5bfe(0x93)) / 0x6) +
        (-parseInt(_0x1a5bfe(0x9e)) / 0x7) * (parseInt(_0x1a5bfe(0x9c)) / 0x8) +
        (-parseInt(_0x1a5bfe(0xa3)) / 0x9) * (parseInt(_0x1a5bfe(0xa4)) / 0xa) +
        parseInt(_0x1a5bfe(0x8d)) / 0xb;
      if (_0x3405ff === _0x9fd04) break;
      else _0x368701['push'](_0x368701['shift']());
    } catch (_0xceb7a7) {
      _0x368701['push'](_0x368701['shift']());
    }
  }
})(a664_0x5972, 0xbe482);
function a664_0x5972() {
  const _0x577f85 = [
    '\x0a\x20\x20\x20\x20Selecionado\x20Data\x20de\x20inicio\x20de\x20importação:\x20',
    '__esModule',
    '3JKtQcW',
    '../../models/Whatsapp',
    '../../libs/wbot',
    '../../models/Ticket',
    'low',
    'getTime',
    'importMessages-',
    'length',
    'handleMessage',
    '../WbotServices/wbotMessageListener',
    '../TicketServices/UpdateTicketService',
    '../../helpers/addLogs',
    'getIO',
    'date-fns',
    'whatsapps',
    'closedTicketsPostImported',
    'getWbot',
    '1758405zvAtVT',
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
    'addLogs',
    'sort',
    'moment',
    'floor',
    '2856186aTwWKe',
    'defineProperty',
    '\x0aMensagem\x20',
    '__importDefault',
    'name',
    'closed',
    'closeTicketsImported',
    '../../errors/AppError',
    'importOldMessages',
    '960760qgmXIF',
    'emit',
    '35apbbnI',
    'Aguardando\x20conexão\x20para\x20iniciar\x20a\x20importação\x20de\x20mensagens:\x0a\x20\x20\x20\x20Whatsapp\x20nome:\x20',
    'processImportMessagesWppId',
    '\x20de\x20',
    'format',
    '360648ueEfei',
    '10gshEbr',
    'DD/MM/YY\x20HH:mm:ss',
    '5CqSMRj',
    'has',
    '225983liwrcY',
    'importRecentMessages',
    'DD/MM/YYYY\x20HH:mm:ss',
    'refresh',
    'dataMessages',
    'ERR_NOT_MESSAGE_TO_IMPORT',
    '\x0a\x20\x20\x20\x20Whatsapp\x20Id:\x20',
    'messageTimestamp',
    'renderButtonCloseTickets',
    '6179948YpLFKz',
    'default',
    'update',
    'companyId',
    '1973830dSqYRA',
    'push',
    '\x20\x0a\x20\x20\x20\x20Selecionado\x20Data\x20final\x20da\x20importação:\x20',
    '.txt'
  ];
  a664_0x5972 = function () {
    return _0x577f85;
  };
  return a664_0x5972();
}
var __importDefault =
  (this && this[a664_0x5e8012(0x96)]) ||
  function (_0xcc28f) {
    const _0x551721 = a664_0x5e8012;
    return _0xcc28f && _0xcc28f[_0x551721(0x7b)]
      ? _0xcc28f
      : { default: _0xcc28f };
  };
Object[a664_0x5e8012(0x94)](exports, '__esModule', { value: !![] }),
  (exports[a664_0x5e8012(0x99)] = void 0x0);
const AppError_1 = __importDefault(require(a664_0x5e8012(0x9a))),
  Whatsapp_1 = __importDefault(require(a664_0x5e8012(0x7d))),
  socket_1 = require('../../libs/socket'),
  Ticket_1 = __importDefault(require(a664_0x5e8012(0x7f))),
  sequelize_1 = require('sequelize'),
  date_fns_1 = require(a664_0x5e8012(0x89)),
  UpdateTicketService_1 = __importDefault(require(a664_0x5e8012(0x86))),
  wbot_1 = require(a664_0x5e8012(0x7e)),
  wbotMessageListener_1 = require(a664_0x5e8012(0x85)),
  moment_1 = __importDefault(require(a664_0x5e8012(0x91))),
  addLogs_1 = require(a664_0x5e8012(0x87)),
  closeTicketsImported = async _0x1c339c => {
    const _0xdc03ca = a664_0x5e8012,
      _0x8a099b = await Ticket_1['default']['findAll']({
        where: {
          status: 'pending',
          whatsappId: _0x1c339c,
          imported: {
            [sequelize_1['Op']['lt']]: +(0x0, date_fns_1['add'])(new Date(), {
              hours: +0x5
            })
          }
        }
      });
    for (const _0x468883 of _0x8a099b) {
      await new Promise(_0x231783 => setTimeout(_0x231783, 0x14a)),
        await (0x0, UpdateTicketService_1[_0xdc03ca(0x73)])({
          ticketData: { status: _0xdc03ca(0x98) },
          ticketId: _0x468883['id'],
          companyId: _0x468883[_0xdc03ca(0x75)]
        });
    }
    let _0x4e0b36 = await Whatsapp_1[_0xdc03ca(0x73)]['findByPk'](_0x1c339c);
    _0x4e0b36[_0xdc03ca(0x74)]({ statusImportMessages: null });
    const _0x41efbf = (0x0, socket_1[_0xdc03ca(0x88)])();
    _0x41efbf[_0xdc03ca(0x9d)](_0xdc03ca(0x82) + _0x4e0b36[_0xdc03ca(0x75)], {
      action: _0xdc03ca(0xab)
    });
  };
exports[a664_0x5e8012(0x99)] = closeTicketsImported;
function sortByMessageTimestamp(_0x3845ef, _0xce35c3) {
  const _0x16fd5e = a664_0x5e8012;
  return _0xce35c3[_0x16fd5e(0xaf)] - _0x3845ef[_0x16fd5e(0xaf)];
}
function cleaner(_0x137447) {
  const _0x15e113 = a664_0x5e8012,
    _0x36f9fe = new Map(),
    _0x10c5fa = [];
  for (const _0x19df62 of _0x137447) {
    const _0x371b73 = _0x19df62['key']['id'];
    !_0x36f9fe[_0x15e113(0xa7)](_0x371b73) &&
      (_0x36f9fe['set'](_0x371b73, !![]),
      _0x10c5fa[_0x15e113(0x77)](_0x19df62));
  }
  return _0x10c5fa[_0x15e113(0x90)](sortByMessageTimestamp);
}
const ImportWhatsAppMessageService = async _0x1b7c9b => {
  const _0x1e7506 = a664_0x5e8012;
  let _0x2b7f1b = await Whatsapp_1[_0x1e7506(0x73)]['findByPk'](_0x1b7c9b);
  const _0x5ed575 = (0x0, wbot_1[_0x1e7506(0x8c)])(_0x2b7f1b['id']);
  try {
    const _0xb5de6c = (0x0, socket_1['getIO'])(),
      _0x174e9c = cleaner(wbot_1[_0x1e7506(0xac)][_0x1b7c9b]);
    let _0x26778b = new Date(_0x2b7f1b[_0x1e7506(0x9b)])[_0x1e7506(0x81)](),
      _0x24a450 = new Date(_0x2b7f1b[_0x1e7506(0xa9)])[_0x1e7506(0x81)]();
    (0x0, addLogs_1[_0x1e7506(0x8f)])({
      fileName: 'processImportMessagesWppId' + _0x1b7c9b + _0x1e7506(0x79),
      forceNewFile: !![],
      text:
        _0x1e7506(0x9f) +
        _0x2b7f1b[_0x1e7506(0x97)] +
        _0x1e7506(0xae) +
        _0x2b7f1b['id'] +
        '\x0a\x20\x20\x20\x20Criação\x20do\x20arquivo\x20de\x20logs:\x20' +
        (0x0, moment_1[_0x1e7506(0x73)])()[_0x1e7506(0xa2)](
          'DD/MM/YYYY\x20HH:mm:ss'
        ) +
        _0x1e7506(0x7a) +
        (0x0, moment_1[_0x1e7506(0x73)])(_0x26778b)[_0x1e7506(0xa2)](
          _0x1e7506(0xaa)
        ) +
        _0x1e7506(0x78) +
        (0x0, moment_1[_0x1e7506(0x73)])(_0x24a450)[_0x1e7506(0xa2)](
          'DD/MM/YYYY\x20HH:mm:ss'
        ) +
        '\x20\x0a\x20\x20\x20\x20'
    });
    const _0x15bc19 = _0x174e9c[_0x1e7506(0x83)];
    let _0x44e7c1 = 0x0;
    while (_0x44e7c1 < _0x15bc19) {
      try {
        const _0x295aed = _0x174e9c[_0x44e7c1];
        (0x0, addLogs_1['addLogs'])({
          fileName: _0x1e7506(0xa0) + _0x1b7c9b + '.txt',
          text:
            _0x1e7506(0x95) +
            (_0x44e7c1 + 0x1) +
            _0x1e7506(0xa1) +
            _0x15bc19 +
            _0x1e7506(0x8e)
        }),
          await (0x0, wbotMessageListener_1[_0x1e7506(0x84)])(
            _0x295aed,
            _0x5ed575,
            _0x2b7f1b[_0x1e7506(0x75)],
            !![]
          );
        if (_0x44e7c1 % 0x2 === 0x0) {
          const _0x2b9161 = Math[_0x1e7506(0x92)](
            _0x295aed[_0x1e7506(0xaf)][_0x1e7506(0x80)] * 0x3e8
          );
          _0xb5de6c[_0x1e7506(0x9d)](
            _0x1e7506(0x82) + _0x2b7f1b[_0x1e7506(0x75)],
            {
              action: _0x1e7506(0x74),
              status: {
                this: _0x44e7c1 + 0x1,
                all: _0x15bc19,
                date: (0x0, moment_1[_0x1e7506(0x73)])(_0x2b9161)[
                  _0x1e7506(0xa2)
                ](_0x1e7506(0xa5))
              }
            }
          );
        }
        _0x44e7c1 + 0x1 === _0x15bc19 &&
          ((wbot_1[_0x1e7506(0xac)][_0x1b7c9b] = []),
          _0x2b7f1b['closedTicketsPostImported'] &&
            (await (0x0, exports['closeTicketsImported'])(_0x1b7c9b)),
          await _0x2b7f1b[_0x1e7506(0x74)]({
            statusImportMessages: _0x2b7f1b[_0x1e7506(0x8b)]
              ? null
              : _0x1e7506(0xb0),
            importOldMessages: null,
            importRecentMessages: null
          }),
          _0xb5de6c['emit'](_0x1e7506(0x82) + _0x2b7f1b[_0x1e7506(0x75)], {
            action: _0x1e7506(0xab)
          }));
      } catch (_0x4438ce) {}
      _0x44e7c1++;
    }
  } catch (_0x5ab152) {
    throw new AppError_1[_0x1e7506(0x73)](_0x1e7506(0xad), 0x193);
  }
  return _0x1e7506(0x8a);
};
exports[a664_0x5e8012(0x73)] = ImportWhatsAppMessageService;
