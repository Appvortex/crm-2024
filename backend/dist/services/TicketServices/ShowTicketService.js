'use strict';
const a629_0x5884fb = a629_0x2947;
function a629_0x2947(_0x2770c2, _0x115269) {
  const _0x21f18a = a629_0x21f1();
  return (
    (a629_0x2947 = function (_0x29473b, _0x5d0082) {
      _0x29473b = _0x29473b - 0x1ce;
      let _0x25978e = _0x21f18a[_0x29473b];
      return _0x25978e;
    }),
    a629_0x2947(_0x2770c2, _0x115269)
  );
}
(function (_0x300776, _0x1ab9cd) {
  const _0x5b0079 = a629_0x2947,
    _0xa38c1c = _0x300776();
  while (!![]) {
    try {
      const _0x34cc80 =
        -parseInt(_0x5b0079(0x1f8)) / 0x1 +
        (parseInt(_0x5b0079(0x1e4)) / 0x2) *
          (-parseInt(_0x5b0079(0x1f6)) / 0x3) +
        (parseInt(_0x5b0079(0x1d8)) / 0x4) *
          (-parseInt(_0x5b0079(0x1f1)) / 0x5) +
        (-parseInt(_0x5b0079(0x1f7)) / 0x6) *
          (-parseInt(_0x5b0079(0x1f9)) / 0x7) +
        -parseInt(_0x5b0079(0x1ea)) / 0x8 +
        (parseInt(_0x5b0079(0x1f3)) / 0x9) *
          (parseInt(_0x5b0079(0x1eb)) / 0xa) +
        (-parseInt(_0x5b0079(0x1e1)) / 0xb) *
          (-parseInt(_0x5b0079(0x1dd)) / 0xc);
      if (_0x34cc80 === _0x1ab9cd) break;
      else _0xa38c1c['push'](_0xa38c1c['shift']());
    } catch (_0x2aa43d) {
      _0xa38c1c['push'](_0xa38c1c['shift']());
    }
  }
})(a629_0x21f1, 0xd1055);
function a629_0x21f1() {
  const _0x16050e = [
    '43436HbezvD',
    '../../models/User',
    '__esModule',
    'color',
    'No\x20es\x20posible\x20consultar\x20registros\x20de\x20otra\x20empresa.',
    '24RYHztx',
    'whatsapp',
    'facebookUserId',
    'remoteJid',
    '19239539lfyogf',
    'company',
    'queueIntegration',
    '2QZeSLR',
    'active',
    'urlPicture',
    'default',
    'contact',
    '../../models/Tag',
    '8548384UcnMcG',
    '5389410sWzPhJ',
    '../../models/QueueIntegrations',
    'groupAsTicket',
    'findOne',
    'lgpdAcceptedAt',
    '../../errors/AppError',
    '515kbcyJz',
    'ERR_NO_TICKET_FOUND',
    '18jvqRry',
    'facebookUserToken',
    'profilePicUrl',
    '2522766CGJnNM',
    '37794AOftPv',
    '761173hAGJmN',
    '77xHsoYh',
    'name',
    '../../models/Contact',
    '../../models/Queue',
    'disableBot',
    '../../models/Whatsapp',
    'companyId',
    'email',
    'extraInfo',
    'tags',
    '__importDefault',
    'wallets'
  ];
  a629_0x21f1 = function () {
    return _0x16050e;
  };
  return a629_0x21f1();
}
var __importDefault =
  (this && this[a629_0x5884fb(0x1d6)]) ||
  function (_0x15693) {
    const _0x3ed25c = a629_0x5884fb;
    return _0x15693 && _0x15693[_0x3ed25c(0x1da)]
      ? _0x15693
      : { default: _0x15693 };
  };
Object['defineProperty'](exports, a629_0x5884fb(0x1da), { value: !![] });
const Ticket_1 = __importDefault(require('../../models/Ticket')),
  AppError_1 = __importDefault(require(a629_0x5884fb(0x1f0))),
  Contact_1 = __importDefault(require(a629_0x5884fb(0x1ce))),
  User_1 = __importDefault(require(a629_0x5884fb(0x1d9))),
  Queue_1 = __importDefault(require(a629_0x5884fb(0x1cf))),
  Tag_1 = __importDefault(require(a629_0x5884fb(0x1e9))),
  Whatsapp_1 = __importDefault(require(a629_0x5884fb(0x1d1))),
  Company_1 = __importDefault(require('../../models/Company')),
  QueueIntegrations_1 = __importDefault(require(a629_0x5884fb(0x1ec))),
  ShowTicketService = async (_0x5c9684, _0x1faadf) => {
    const _0x224971 = a629_0x5884fb,
      _0xe7315d = await Ticket_1[_0x224971(0x1e7)][_0x224971(0x1ee)]({
        where: { id: _0x5c9684, companyId: _0x1faadf },
        include: [
          {
            model: Contact_1[_0x224971(0x1e7)],
            as: _0x224971(0x1e8),
            attributes: [
              'id',
              _0x224971(0x1d2),
              _0x224971(0x1fa),
              'number',
              _0x224971(0x1d3),
              _0x224971(0x1f5),
              'acceptAudioMessage',
              _0x224971(0x1e5),
              _0x224971(0x1d0),
              _0x224971(0x1e0),
              _0x224971(0x1e6),
              _0x224971(0x1ef)
            ],
            include: [
              _0x224971(0x1d4),
              'contactTags',
              _0x224971(0x1d5),
              {
                association: _0x224971(0x1d7),
                attributes: ['id', _0x224971(0x1fa)]
              }
            ]
          },
          {
            model: Queue_1[_0x224971(0x1e7)],
            as: 'queue',
            attributes: ['id', _0x224971(0x1fa), _0x224971(0x1db)],
            include: ['chatbots']
          },
          {
            model: User_1[_0x224971(0x1e7)],
            as: 'user',
            attributes: ['id', 'name']
          },
          {
            model: Tag_1['default'],
            as: _0x224971(0x1d5),
            attributes: ['id', 'name', _0x224971(0x1db)]
          },
          {
            model: Whatsapp_1[_0x224971(0x1e7)],
            as: _0x224971(0x1de),
            attributes: [
              'id',
              'name',
              _0x224971(0x1ed),
              'greetingMediaAttachment',
              _0x224971(0x1f4),
              _0x224971(0x1df)
            ]
          },
          {
            model: Company_1[_0x224971(0x1e7)],
            as: _0x224971(0x1e2),
            attributes: ['id', _0x224971(0x1fa)]
          },
          {
            model: QueueIntegrations_1[_0x224971(0x1e7)],
            as: _0x224971(0x1e3),
            attributes: ['id', _0x224971(0x1fa)]
          }
        ]
      });
    if (_0xe7315d?.['companyId'] !== _0x1faadf)
      throw new AppError_1[_0x224971(0x1e7)](_0x224971(0x1dc));
    if (!_0xe7315d)
      throw new AppError_1[_0x224971(0x1e7)](_0x224971(0x1f2), 0x194);
    return _0xe7315d;
  };
exports[a629_0x5884fb(0x1e7)] = ShowTicketService;
