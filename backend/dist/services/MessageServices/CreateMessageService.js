'use strict';
const a522_0x18ddc5 = a522_0xa424;
(function (_0x1cdc85, _0x29ab2b) {
  const _0xfbda9e = a522_0xa424,
    _0x5252e = _0x1cdc85();
  while (!![]) {
    try {
      const _0xa11440 =
        (-parseInt(_0xfbda9e(0x9f)) / 0x1) *
          (-parseInt(_0xfbda9e(0x98)) / 0x2) +
        parseInt(_0xfbda9e(0x8c)) / 0x3 +
        -parseInt(_0xfbda9e(0x94)) / 0x4 +
        (-parseInt(_0xfbda9e(0x97)) / 0x5) * (parseInt(_0xfbda9e(0xad)) / 0x6) +
        -parseInt(_0xfbda9e(0xaa)) / 0x7 +
        (-parseInt(_0xfbda9e(0xa4)) / 0x8) *
          (-parseInt(_0xfbda9e(0x9e)) / 0x9) +
        (parseInt(_0xfbda9e(0x95)) / 0xa) * (parseInt(_0xfbda9e(0x8f)) / 0xb);
      if (_0xa11440 === _0x29ab2b) break;
      else _0x5252e['push'](_0x5252e['shift']());
    } catch (_0x349e8e) {
      _0x5252e['push'](_0x5252e['shift']());
    }
  }
})(a522_0x4ce7, 0x9712c);
var __importDefault =
  (this && this[a522_0x18ddc5(0xac)]) ||
  function (_0x3a69fc) {
    return _0x3a69fc && _0x3a69fc['__esModule']
      ? _0x3a69fc
      : { default: _0x3a69fc };
  };
Object[a522_0x18ddc5(0x8a)](exports, a522_0x18ddc5(0xa7), { value: !![] });
function a522_0x4ce7() {
  const _0x4e6a68 = [
    '54OuoNgk',
    'ticket',
    'defineProperty',
    '../../models/Queue',
    '2168283gcWHTK',
    'PVT',
    '-appMessage',
    '99NQyttq',
    'ticketImported',
    'upsert',
    'queueId',
    'companyId',
    '3049772yeBrxp',
    '561070uIeESl',
    'findOne',
    '74960qObXiZ',
    '2fLYZlc',
    'toString',
    'notification',
    'tags',
    'urlPicture',
    '../../models/Message',
    '9IdfLrj',
    '785677pudIFa',
    '../../models/Contact',
    'name',
    'status',
    'emit',
    '4859720pWdAAr',
    '../../models/Ticket',
    'default',
    '__esModule',
    'company-',
    'extraInfo',
    '7732893LDuEIz',
    'contact',
    '__importDefault'
  ];
  a522_0x4ce7 = function () {
    return _0x4e6a68;
  };
  return a522_0x4ce7();
}
function a522_0xa424(_0x31900c, _0x167509) {
  const _0x4ce75b = a522_0x4ce7();
  return (
    (a522_0xa424 = function (_0xa424fd, _0x281f19) {
      _0xa424fd = _0xa424fd - 0x89;
      let _0x5e64dc = _0x4ce75b[_0xa424fd];
      return _0x5e64dc;
    }),
    a522_0xa424(_0x31900c, _0x167509)
  );
}
const socket_1 = require('../../libs/socket'),
  Contact_1 = __importDefault(require(a522_0x18ddc5(0xa0))),
  Message_1 = __importDefault(require(a522_0x18ddc5(0x9d))),
  Queue_1 = __importDefault(require(a522_0x18ddc5(0x8b))),
  Ticket_1 = __importDefault(require(a522_0x18ddc5(0xa5))),
  User_1 = __importDefault(require('../../models/User')),
  Whatsapp_1 = __importDefault(require('../../models/Whatsapp')),
  CreateMessageService = async ({
    messageData: _0x33bab9,
    companyId: _0x21f863
  }) => {
    const _0xc2765a = a522_0x18ddc5;
    await Message_1['default'][_0xc2765a(0x91)]({
      ..._0x33bab9,
      companyId: _0x21f863
    });
    const _0x1a76ad = await Message_1[_0xc2765a(0xa6)][_0xc2765a(0x96)]({
      where: { wid: _0x33bab9['wid'], companyId: _0x21f863 },
      include: [
        _0xc2765a(0xab),
        {
          model: Ticket_1['default'],
          as: _0xc2765a(0x89),
          include: [
            {
              model: Contact_1['default'],
              attributes: [
                'id',
                _0xc2765a(0xa1),
                _0xc2765a(0x93),
                _0xc2765a(0x9c)
              ],
              include: [_0xc2765a(0xa9), _0xc2765a(0x9b)]
            },
            { model: Queue_1['default'], attributes: ['id', 'name', 'color'] },
            { model: Whatsapp_1[_0xc2765a(0xa6)], attributes: ['id', 'name'] },
            {
              model: User_1[_0xc2765a(0xa6)],
              attributes: ['id', _0xc2765a(0xa1)]
            }
          ]
        },
        {
          model: Message_1[_0xc2765a(0xa6)],
          as: 'quotedMsg',
          include: [_0xc2765a(0xab)]
        }
      ]
    });
    _0x1a76ad[_0xc2765a(0x89)]['queueId'] !== null &&
      _0x1a76ad[_0xc2765a(0x92)] === null &&
      (await _0x1a76ad['update']({
        queueId: _0x1a76ad[_0xc2765a(0x89)][_0xc2765a(0x92)]
      }));
    _0x1a76ad['isPrivate'] &&
      (await _0x1a76ad['update']({ wid: _0xc2765a(0x8d) + _0x1a76ad['id'] }));
    if (!_0x1a76ad) throw new Error('ERR_CREATING_MESSAGE');
    const _0x4ed137 = (0x0, socket_1['getIO'])();
    return (
      !_0x33bab9?.[_0xc2765a(0x90)] &&
        _0x4ed137['to'](_0x1a76ad['ticketId'][_0xc2765a(0x99)]())
          ['to'](_0x1a76ad[_0xc2765a(0x89)][_0xc2765a(0xa2)])
          ['to'](_0xc2765a(0x9a))
          [_0xc2765a(0xa3)](_0xc2765a(0xa8) + _0x21f863 + _0xc2765a(0x8e), {
            action: 'create',
            message: _0x1a76ad,
            ticket: _0x1a76ad[_0xc2765a(0x89)],
            contact: _0x1a76ad[_0xc2765a(0x89)][_0xc2765a(0xab)]
          }),
      _0x1a76ad
    );
  };
exports[a522_0x18ddc5(0xa6)] = CreateMessageService;
