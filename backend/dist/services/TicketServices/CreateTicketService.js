'use strict';
function a620_0x1561() {
  const _0x5244c4 = [
    '266796AFXDRN',
    '__importDefault',
    'getIO',
    '../WhatsappService/ShowWhatsAppService',
    '../../libs/socket',
    '-ticket',
    '../../helpers/GetDefaultWhatsAppByUser',
    '../../helpers/CheckContactOpenTickets',
    '__esModule',
    '8AdhfOP',
    'open',
    '1844020NCkelJ',
    '389493CALzvs',
    './ShowTicketService',
    'default',
    'group',
    '3148341RoWHqO',
    '84322YAHecS',
    '35ELNxVH',
    'toString',
    '11641861xhmvLX',
    '41238qDFRPq',
    '170XiVWkB',
    'create',
    'emit',
    '20UQNjuV',
    'ERR_CREATING_TICKET',
    'notification'
  ];
  a620_0x1561 = function () {
    return _0x5244c4;
  };
  return a620_0x1561();
}
const a620_0x2e3d46 = a620_0x3b2b;
(function (_0xbe6a8e, _0x167bb4) {
  const _0xaedc10 = a620_0x3b2b,
    _0x1dca06 = _0xbe6a8e();
  while (!![]) {
    try {
      const _0x47c0d1 =
        (parseInt(_0xaedc10(0x105)) / 0x1) *
          (-parseInt(_0xaedc10(0x10d)) / 0x2) +
        -parseInt(_0xaedc10(0x100)) / 0x3 +
        parseInt(_0xaedc10(0xff)) / 0x4 +
        (-parseInt(_0xaedc10(0x106)) / 0x5) *
          (parseInt(_0xaedc10(0x109)) / 0x6) +
        (-parseInt(_0xaedc10(0x104)) / 0x7) *
          (parseInt(_0xaedc10(0xfd)) / 0x8) +
        (parseInt(_0xaedc10(0xf4)) / 0x9) * (parseInt(_0xaedc10(0x10a)) / 0xa) +
        parseInt(_0xaedc10(0x108)) / 0xb;
      if (_0x47c0d1 === _0x167bb4) break;
      else _0x1dca06['push'](_0x1dca06['shift']());
    } catch (_0x53ae9b) {
      _0x1dca06['push'](_0x1dca06['shift']());
    }
  }
})(a620_0x1561, 0x86dbb);
var __importDefault =
  (this && this[a620_0x2e3d46(0xf5)]) ||
  function (_0x5b6d38) {
    const _0x59a075 = a620_0x2e3d46;
    return _0x5b6d38 && _0x5b6d38[_0x59a075(0xfc)]
      ? _0x5b6d38
      : { default: _0x5b6d38 };
  };
Object['defineProperty'](exports, a620_0x2e3d46(0xfc), { value: !![] });
const AppError_1 = __importDefault(require('../../errors/AppError')),
  GetDefaultWhatsApp_1 = __importDefault(
    require('../../helpers/GetDefaultWhatsApp')
  ),
  GetDefaultWhatsAppByUser_1 = __importDefault(require(a620_0x2e3d46(0xfa))),
  Ticket_1 = __importDefault(require('../../models/Ticket')),
  ShowContactService_1 = __importDefault(
    require('../ContactServices/ShowContactService')
  ),
  socket_1 = require(a620_0x2e3d46(0xf8)),
  ShowWhatsAppService_1 = __importDefault(require(a620_0x2e3d46(0xf7))),
  CheckContactOpenTickets_1 = __importDefault(require(a620_0x2e3d46(0xfb))),
  CreateLogTicketService_1 = __importDefault(
    require('./CreateLogTicketService')
  ),
  ShowTicketService_1 = __importDefault(require(a620_0x2e3d46(0x101))),
  CreateTicketService = async ({
    contactId: _0x3ef48c,
    status: _0x4860a7,
    userId: _0x2f3bcd,
    queueId: _0x46d3e1,
    companyId: _0x55777c,
    whatsappId: _0x5b283a
  }) => {
    const _0x5dfb7e = a620_0x2e3d46,
      _0x57ab74 = (0x0, socket_1[_0x5dfb7e(0xf6)])();
    let _0x46ac11;
    _0x5b283a !== undefined &&
      _0x5b283a !== null &&
      _0x5b283a !== '' &&
      (_0x46ac11 = await (0x0, ShowWhatsAppService_1[_0x5dfb7e(0x102)])(
        _0x5b283a,
        _0x55777c
      ));
    let _0x2a6be3 = await (0x0, GetDefaultWhatsAppByUser_1[_0x5dfb7e(0x102)])(
      _0x2f3bcd
    );
    _0x46ac11 && (_0x2a6be3 = _0x46ac11);
    if (!_0x2a6be3)
      _0x2a6be3 = await (0x0, GetDefaultWhatsApp_1[_0x5dfb7e(0x102)])(
        _0x55777c
      );
    await (0x0, CheckContactOpenTickets_1[_0x5dfb7e(0x102)])(
      _0x3ef48c,
      _0x2a6be3['id']
    );
    const { isGroup: _0x3be5a2 } = await (0x0,
    ShowContactService_1[_0x5dfb7e(0x102)])(_0x3ef48c, _0x55777c);
    let _0x111422 = await Ticket_1['default'][_0x5dfb7e(0x10b)]({
      contactId: _0x3ef48c,
      companyId: _0x55777c,
      whatsappId: _0x2a6be3['id'],
      isGroup: _0x3be5a2,
      userId: _0x2f3bcd,
      isBot: !![],
      queueId: _0x46d3e1,
      status: _0x3be5a2 ? _0x5dfb7e(0x103) : _0x5dfb7e(0xfe),
      isActiveDemand: !![]
    });
    _0x111422 = await (0x0, ShowTicketService_1[_0x5dfb7e(0x102)])(
      _0x111422['id'],
      _0x55777c
    );
    if (!_0x111422) throw new AppError_1[_0x5dfb7e(0x102)](_0x5dfb7e(0xf2));
    return (
      _0x57ab74['to'](_0x111422['status'])
        ['to'](_0x5dfb7e(0xf3))
        ['to'](_0x111422['id'][_0x5dfb7e(0x107)]())
        [_0x5dfb7e(0x10c)]('company-' + _0x55777c + _0x5dfb7e(0xf9), {
          action: 'update',
          ticket: _0x111422
        }),
      await (0x0, CreateLogTicketService_1[_0x5dfb7e(0x102)])({
        userId: _0x2f3bcd,
        queueId: _0x46d3e1,
        ticketId: _0x111422['id'],
        type: 'create'
      }),
      _0x111422
    );
  };
function a620_0x3b2b(_0x59ee53, _0x25de85) {
  const _0x156119 = a620_0x1561();
  return (
    (a620_0x3b2b = function (_0x3b2b03, _0x23f82a) {
      _0x3b2b03 = _0x3b2b03 - 0xf2;
      let _0x37a919 = _0x156119[_0x3b2b03];
      return _0x37a919;
    }),
    a620_0x3b2b(_0x59ee53, _0x25de85)
  );
}
exports[a620_0x2e3d46(0x102)] = CreateTicketService;
