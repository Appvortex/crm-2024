'use strict';
const a628_0x1a37c0 = a628_0x4a2b;
(function (_0x122583, _0x5429fb) {
  const _0x1bf6e4 = a628_0x4a2b,
    _0x53a8ce = _0x122583();
  while (!![]) {
    try {
      const _0x3ada7b =
        -parseInt(_0x1bf6e4(0x1ef)) / 0x1 +
        parseInt(_0x1bf6e4(0x205)) / 0x2 +
        parseInt(_0x1bf6e4(0x1fa)) / 0x3 +
        -parseInt(_0x1bf6e4(0x209)) / 0x4 +
        -parseInt(_0x1bf6e4(0x206)) / 0x5 +
        (-parseInt(_0x1bf6e4(0x201)) / 0x6) *
          (parseInt(_0x1bf6e4(0x208)) / 0x7) +
        parseInt(_0x1bf6e4(0x1f4)) / 0x8;
      if (_0x3ada7b === _0x5429fb) break;
      else _0x53a8ce['push'](_0x53a8ce['shift']());
    } catch (_0x1a4260) {
      _0x53a8ce['push'](_0x53a8ce['shift']());
    }
  }
})(a628_0x2800, 0xe001f);
var __importDefault =
  (this && this[a628_0x1a37c0(0x1f1)]) ||
  function (_0x2c83f3) {
    const _0x1dc552 = a628_0x1a37c0;
    return _0x2c83f3 && _0x2c83f3[_0x1dc552(0x202)]
      ? _0x2c83f3
      : { default: _0x2c83f3 };
  };
function a628_0x2800() {
  const _0x1d7845 = [
    'wallets',
    'active',
    '474648PSkBFW',
    '__esModule',
    'disableBot',
    'whatsapp',
    '1588012DGtSDQ',
    '1401030pjRFlK',
    'acceptAudioMessage',
    '14ymKolX',
    '5202140ZndXlH',
    '../../models/Tag',
    'companyId',
    'email',
    'color',
    'contactTags',
    'tags',
    'queueIntegration',
    'number',
    '796667VnWebY',
    '../../models/QueueIntegrations',
    '__importDefault',
    'company',
    'facebookUserId',
    '12660384bjIDrI',
    'profilePicUrl',
    'default',
    '../../models/Company',
    '../../models/Ticket',
    'name',
    '3229815dlHckb',
    '../../models/User',
    'queue',
    'ERR_NO_TICKET_FOUND',
    'extraInfo'
  ];
  a628_0x2800 = function () {
    return _0x1d7845;
  };
  return a628_0x2800();
}
Object['defineProperty'](exports, a628_0x1a37c0(0x202), { value: !![] });
function a628_0x4a2b(_0x140c1d, _0x3e1a7a) {
  const _0x2800d3 = a628_0x2800();
  return (
    (a628_0x4a2b = function (_0x4a2bfb, _0x46276c) {
      _0x4a2bfb = _0x4a2bfb - 0x1ed;
      let _0x180436 = _0x2800d3[_0x4a2bfb];
      return _0x180436;
    }),
    a628_0x4a2b(_0x140c1d, _0x3e1a7a)
  );
}
const Ticket_1 = __importDefault(require(a628_0x1a37c0(0x1f8))),
  AppError_1 = __importDefault(require('../../errors/AppError')),
  Contact_1 = __importDefault(require('../../models/Contact')),
  User_1 = __importDefault(require(a628_0x1a37c0(0x1fb))),
  Queue_1 = __importDefault(require('../../models/Queue')),
  Tag_1 = __importDefault(require(a628_0x1a37c0(0x20a))),
  Whatsapp_1 = __importDefault(require('../../models/Whatsapp')),
  Company_1 = __importDefault(require(a628_0x1a37c0(0x1f7))),
  QueueIntegrations_1 = __importDefault(require(a628_0x1a37c0(0x1f0))),
  ShowTicketUUIDService = async (_0x298853, _0x52cfdd) => {
    const _0x24ef17 = a628_0x1a37c0,
      _0x3a853e = await Ticket_1[_0x24ef17(0x1f6)]['findOne']({
        where: { uuid: _0x298853 },
        include: [
          {
            model: Contact_1['default'],
            as: 'contact',
            attributes: [
              'id',
              'name',
              _0x24ef17(0x1ee),
              _0x24ef17(0x20c),
              _0x24ef17(0x1f5),
              _0x24ef17(0x207),
              _0x24ef17(0x200),
              _0x24ef17(0x203),
              'urlPicture',
              _0x24ef17(0x20b)
            ],
            include: [
              _0x24ef17(0x1fe),
              _0x24ef17(0x20e),
              _0x24ef17(0x20f),
              {
                association: _0x24ef17(0x1ff),
                attributes: ['id', _0x24ef17(0x1f9)]
              }
            ]
          },
          {
            model: Queue_1[_0x24ef17(0x1f6)],
            as: _0x24ef17(0x1fc),
            attributes: ['id', _0x24ef17(0x1f9), 'color']
          },
          {
            model: User_1[_0x24ef17(0x1f6)],
            as: 'user',
            attributes: ['id', 'name']
          },
          {
            model: Tag_1[_0x24ef17(0x1f6)],
            as: _0x24ef17(0x20f),
            attributes: ['id', _0x24ef17(0x1f9), _0x24ef17(0x20d)]
          },
          {
            model: Whatsapp_1['default'],
            as: _0x24ef17(0x204),
            attributes: [
              'id',
              _0x24ef17(0x1f9),
              'facebookUserToken',
              _0x24ef17(0x1f3),
              'groupAsTicket'
            ]
          },
          {
            model: Company_1[_0x24ef17(0x1f6)],
            as: _0x24ef17(0x1f2),
            attributes: ['id', 'name']
          },
          {
            model: QueueIntegrations_1[_0x24ef17(0x1f6)],
            as: _0x24ef17(0x1ed),
            attributes: ['id', _0x24ef17(0x1f9)]
          }
        ]
      });
    if (!_0x3a853e)
      throw new AppError_1[_0x24ef17(0x1f6)](_0x24ef17(0x1fd), 0x194);
    return _0x3a853e;
  };
exports[a628_0x1a37c0(0x1f6)] = ShowTicketUUIDService;
