'use strict';
const a650_0x42d311 = a650_0x1852;
(function (_0x3b3dd3, _0x230ec6) {
  const _0x2f3379 = a650_0x1852,
    _0x561e14 = _0x3b3dd3();
  while (!![]) {
    try {
      const _0x3d88ee =
        (-parseInt(_0x2f3379(0xd0)) / 0x1) * (parseInt(_0x2f3379(0xd8)) / 0x2) +
        -parseInt(_0x2f3379(0xed)) / 0x3 +
        (parseInt(_0x2f3379(0xd6)) / 0x4) * (parseInt(_0x2f3379(0xd3)) / 0x5) +
        parseInt(_0x2f3379(0xd1)) / 0x6 +
        parseInt(_0x2f3379(0xdb)) / 0x7 +
        parseInt(_0x2f3379(0xdf)) / 0x8 +
        (-parseInt(_0x2f3379(0xe9)) / 0x9) * (parseInt(_0x2f3379(0xd7)) / 0xa);
      if (_0x3d88ee === _0x230ec6) break;
      else _0x561e14['push'](_0x561e14['shift']());
    } catch (_0x40299b) {
      _0x561e14['push'](_0x561e14['shift']());
    }
  }
})(a650_0x2c7a, 0xe7489);
function a650_0x2c7a() {
  const _0xe2eca5 = [
    '5504XsbQFH',
    '10OrMBtx',
    '118288hvPUlg',
    'quotedMsg',
    '../../models/CompaniesSettings',
    '4181016nAKQhv',
    'toString',
    '@s.whatsapp.net',
    'default',
    '13239152fGfIFL',
    '__esModule',
    '../../models/Message',
    '🚫\x20_Mensagem\x20Apagada_',
    'Erro\x20ao\x20tentar\x20marcar\x20a\x20mensagem\x20com\x20excluída',
    '@c.us',
    '../../libs/socket',
    'lgpdDeleteMessage',
    'defineProperty',
    'contact',
    '29947707kvjzeV',
    'replace',
    'update',
    'ticketId',
    '358776ETFdaR',
    'appMessage-',
    'getIO',
    '__importDefault',
    '17cBTtlS',
    '9490980YDiRrE',
    'enabled',
    '5690ugrjHB',
    'log',
    'findOne'
  ];
  a650_0x2c7a = function () {
    return _0xe2eca5;
  };
  return a650_0x2c7a();
}
var __importDefault =
  (this && this[a650_0x42d311(0xcf)]) ||
  function (_0x28ebd7) {
    const _0x1daed6 = a650_0x42d311;
    return _0x28ebd7 && _0x28ebd7[_0x1daed6(0xe0)]
      ? _0x28ebd7
      : { default: _0x28ebd7 };
  };
Object[a650_0x42d311(0xe7)](exports, a650_0x42d311(0xe0), { value: !![] });
const Message_1 = __importDefault(require(a650_0x42d311(0xe1))),
  socket_1 = require(a650_0x42d311(0xe5)),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  UpdateTicketService_1 = __importDefault(
    require('../TicketServices/UpdateTicketService')
  ),
  CompaniesSettings_1 = __importDefault(require(a650_0x42d311(0xda))),
  MarkDeleteWhatsAppMessage = async (
    _0x6122ca,
    _0x2ffe5d,
    _0x572116,
    _0x27f80a
  ) => {
    const _0x16bcf5 = a650_0x42d311;
    _0x6122ca = _0x6122ca[_0x16bcf5(0xea)](_0x16bcf5(0xe4), '')[
      _0x16bcf5(0xea)
    ](_0x16bcf5(0xdd), '');
    if (_0x572116) {
      const _0x1beb8b = await Message_1[_0x16bcf5(0xde)]['findAll']({
        where: { wid: _0x572116, companyId: _0x27f80a }
      });
      try {
        const _0x1f9670 = await Message_1[_0x16bcf5(0xde)]['findOne']({
          where: { wid: _0x1beb8b[0x0]['wid'] },
          include: [
            _0x16bcf5(0xe8),
            {
              model: Message_1['default'],
              as: _0x16bcf5(0xd9),
              include: [_0x16bcf5(0xe8)]
            }
          ]
        });
        if (_0x1f9670) {
          const _0x3e3eea = await CompaniesSettings_1['default']['findOne']({
              where: { companyId: _0x27f80a }
            }),
            _0x14ec0e = await Ticket_1[_0x16bcf5(0xde)][_0x16bcf5(0xd5)]({
              where: { id: _0x1f9670[_0x16bcf5(0xec)], companyId: _0x27f80a }
            });
          _0x3e3eea[_0x16bcf5(0xe6)] === _0x16bcf5(0xd2) &&
          _0x3e3eea['enableLGPD'] === _0x16bcf5(0xd2)
            ? await _0x1f9670['update']({
                body: _0x16bcf5(0xe2),
                isDeleted: !![]
              })
            : await _0x1f9670[_0x16bcf5(0xeb)]({ isDeleted: !![] });
          await (0x0, UpdateTicketService_1[_0x16bcf5(0xde)])({
            ticketData: { lastMessage: '🚫\x20_Mensagem\x20Apagada_' },
            ticketId: _0x14ec0e['id'],
            companyId: _0x27f80a
          });
          const _0x1f57e2 = (0x0, socket_1[_0x16bcf5(0xef)])();
          _0x1f57e2['to'](_0x1f9670[_0x16bcf5(0xec)][_0x16bcf5(0xdc)]())[
            'emit'
          ](_0x16bcf5(0xee) + _0x1f9670, {
            action: _0x16bcf5(0xeb),
            message: _0x1f9670
          });
        }
      } catch (_0x293cc1) {
        console[_0x16bcf5(0xd4)](_0x16bcf5(0xe3));
      }
      return _0x2ffe5d;
    }
  };
function a650_0x1852(_0x332ddb, _0x62640b) {
  const _0x2c7ac3 = a650_0x2c7a();
  return (
    (a650_0x1852 = function (_0x1852d9, _0x34e178) {
      _0x1852d9 = _0x1852d9 - 0xcf;
      let _0x2d32cf = _0x2c7ac3[_0x1852d9];
      return _0x2d32cf;
    }),
    a650_0x1852(_0x332ddb, _0x62640b)
  );
}
exports['default'] = MarkDeleteWhatsAppMessage;
